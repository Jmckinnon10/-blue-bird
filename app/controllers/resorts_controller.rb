class ResortsController < ApplicationController


  def index
    render json: Resort.all, status: :ok
  end

end
