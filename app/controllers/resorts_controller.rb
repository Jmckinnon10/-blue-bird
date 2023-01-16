class ResortsController < ApplicationController

  def index
    @resorts = Resort.all
    render json: @resorts.to_json(:include => [:trails => {:include => :reviews}])
end

end
