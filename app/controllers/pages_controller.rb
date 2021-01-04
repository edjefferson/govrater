class PagesController < ApplicationController
  def index
    @votes = Rating.order(:rating_no)
  end

  def vote
    rating = Rating.where(rating_no: params[:rating_no].to_i).first_or_create
    rating.votes += 1
    rating.save
    @votes = Rating.order(:rating_no)

    respond_to do |format|
      format.js {}
    end
    
  end
end
