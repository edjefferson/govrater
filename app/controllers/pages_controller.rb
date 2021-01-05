class PagesController < ApplicationController
  def index
    unless cookies["first_time"]
      @first_load = true
      tomorrow_date = Time.now().tomorrow
      cookies["first_time"] = {value: "true", expires: Time.utc(tomorrow_date.year, tomorrow_date.month, tomorrow_date.day, 0)}
    end
    @alt_texts = ["happy face","indifferent face","slightly sad face", "very sad faceß"]

    
    if params[:cc]
      cc = params[:cc]
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

    
      @flag = ISO3166::Country.new(cc.upcase == "UK" ? "GB" : cc.upcase).emoji_flag
      @votes = Rating.where(government_id: @government.id).order(:rating_no)
      @total_votes = @votes.sum("votes")

      @other_countries = Government.where.not(id: @government.id).order(:url_string)
    end

  end

  def load_country

    @alt_texts = ["happy face","indifferent face","slightly sad face", "very sad face"]
    cc = params[:cc]
    cc = "uk" if cc.downcase == "gb"
    @government = Government.find_by(country_code: cc.upcase)
    if @government
      @flag = ISO3166::Country.new(cc.upcase == "UK" ? "GB" : cc.upcase).emoji_flag
      @votes = Rating.where(government_id: @government.id).order(:rating_no)
      @total_votes = @votes.sum("votes")

      @other_countries = Government.where.not(id: @government.id).order(:url_string)
      
      
    end


  end

  def get_history(cc)
    history = DailyRecord.order(created_at: :desc)[0]
    history_scores = JSON.parse(history.record_text)[cc.upcase].sort_by {|x| x["rating_no"]}
    history_total_votes = history_scores.map {|s| s["votes"]}.sum
    if history_total_votes > 0
      history_scores.each do |s|
        s["percent"] = s["votes"]/history_total_votes.to_f
      end
    end
    history_scores
  end

  def vote
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
    
  end
end
