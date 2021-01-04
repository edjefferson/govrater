class PagesController < ApplicationController
  def index
    @government = Government.find_by(country_code: params[:cc].upcase)
    if @government
      @votes = Rating.where(government_id: @government.id).order(:rating_no)
      @total_votes = @votes.sum("votes")
    end

  end

  def vote
    @government = Government.find_by(country_code: params[:cc].upcase)
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
