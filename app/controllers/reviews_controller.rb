class ReviewsController < ApplicationController


  def index 
    render json: Review.all
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
      params.permit(:id, :comment, :user_id, :trail_id)
  end

end
