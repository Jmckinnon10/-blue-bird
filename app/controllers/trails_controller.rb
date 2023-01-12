class TrailsController < ApplicationController

  def index
    render json: Trail.all, status: :ok
  end

end
