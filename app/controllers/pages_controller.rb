class PagesController < ApplicationController
  def index
    if params[:heroes] || (Time.now.wday == 4 && Time.now.hour == 20 && Time.now.minute < 10)
      @carers = true
    end
    unless cookies.encrypted["check_code"]
      cookies.encrypted["check_code"] = "empty"
    end
    unless cookies["first_time"]
      @first_load = true
    end
    tomorrow_date = Time.now().tomorrow
    cookies["first_time"] = {value: "true", expires: Time.utc(tomorrow_date.year, tomorrow_date.month, tomorrow_date.day, 0)}
    @alt_texts = ["happy face","indifferent face","slightly sad face", "very sad faceß"]

    
    if params[:cc]
      cc = params[:cc]
    elsif @carers
      cc = "uk"
    else
      reader = MaxMind::DB.new('GeoLite2-Country.mmdb', mode: MaxMind::DB::MODE_MEMORY)
      record = reader.get(request.remote_ip)
      if record.nil?
        puts "#{request.remote_ip} was not found in the database"
        cc = "uk"
      else
        cc = record['country']['iso_code']
      end
    end

    cc = "uk" if cc.downcase == "gb" 

    @government = Government.find_by(country_code: cc.upcase)
    if @government
      @votes = Rating.where(government_id: @government.id).order(:rating_no)
      @total_votes = @votes.sum("votes")
      @history_scores = get_history(cc)
      @other_countries = Government.where.not(id: @government.id).order(:url_string)
    end

  end

  def load_country

    @alt_texts = ["happy face","indifferent face","slightly sad face", "very sad face"]
    cc = params[:cc]
    cc = "uk" if cc.downcase == "gb"
    @government = Government.find_by(country_code: cc.upcase)
    if @government
      @votes = Rating.where(government_id: @government.id).order(:rating_no)
      @total_votes = @votes.sum("votes")
      @history_scores = get_history(cc)
      @other_countries = Government.where.not(id: @government.id).order(:url_string)
    end


  end

  def get_history(cc)
    history = DailyRecord.order(created_at: :desc)[0]
    if history.created_at >= Time.now - 1.day
      history_scores = JSON.parse(history.record_text)[cc.upcase].sort_by {|x| x["rating_no"]}
      history_total_votes = history_scores.map {|s| s["votes"]}.sum
      if history_total_votes > 0
        history_scores.each do |s|
          s["percent"] = s["votes"]/history_total_votes.to_f
        end
      end
      history_scores
    else
      [{rating_no: 1},{rating_no: 2},{rating_no: 3},{rating_no: 4}]
    end
  end

  def vote
    if cookies.encrypted["check_code"] == "empty" || params[:check_code].to_i > cookies.encrypted["check_code"].to_i + 100
      
      cookies.encrypted["check_code"] = params[:check_code]

      @government = Government.find_by(country_code: params[:cc].upcase)

      if [1,2,3,4].include?(params[:rating_no].to_i)
        rating = Rating.where(government_id: @government.id, rating_no: params[:rating_no].to_i).first_or_create
        rating.votes += 1
        rating.save
        
        @votes = Rating.where(government_id: @government.id).order(:rating_no)
        @total_votes = @votes.sum("votes")

        respond_to do |format|
          format.js {}
        end
      end

    else
      respond_to do |format|
        format.js { render "vote", :locals => { :@no_vote => true } }
      end
    end
    
  end

  def ranking
    @governments = Government.all.sort_by{|g| g.ratings.map{|r| -r.votes}.sum}
  end
end
