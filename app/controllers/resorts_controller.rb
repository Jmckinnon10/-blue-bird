class ResortsController < ApplicationController

  def index
    @resorts = Resort.all
    render json: @resorts.to_json(:include => [:trails => {:include => {:reviews => {:methods => :review_name}}}])
  end

  

end
