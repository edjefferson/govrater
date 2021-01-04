class Rating < ApplicationRecord
  belongs_to :government

  def self.generate_blank_ratings
    Government.all.each {|g| (1..4).each {|x| Rating.where(government_id: g.id, rating_no: x).first_or_create} }
  end
end
