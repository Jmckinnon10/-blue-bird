class FavoritesController < ApplicationController

  def create
    fav = Favorite.create!(fav_params)
    render json: fav, status: :created
  end

  private

  def fav_params
    params.permit(:favorited,:user_id, :trail_id)
  end


end
