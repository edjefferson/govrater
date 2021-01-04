class PagesController < ApplicationController
  def index
    @votes = Rating.all
  end

  def vote
    rating = Rating.where(rating_no: params[:rating_no].to_i).first_or_create
    rating.votes += 1
    rating.save
    @a = "a"
    @votes = Rating.all

    respond_to do |format|
      format.js {}
    end
    
  end
end
