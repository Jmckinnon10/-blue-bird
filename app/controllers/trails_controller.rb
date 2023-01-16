class TrailsController < ApplicationController

  def index
    trail = Trail.all
    render json: trail, status: :ok
  end

end
