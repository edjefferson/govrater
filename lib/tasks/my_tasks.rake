namespace :my_tasks do
  desc "TODO"
  task blat_counts: :environment do
    hash = {}
    Government.all.each do |g|
      hash[g.country_code] = g.ratings.map {|r| {rating_no: r.rating_no, votes: r.votes} }
    end

    DailyRecord.create(record_text: hash.to_json)
    Rating.update_all(votes: 0)
    
  end

end
