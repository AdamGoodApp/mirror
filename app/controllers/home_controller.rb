class HomeController < ApplicationController

  def index
    gon.user = current_user if current_user
  end

  def weather
    render json: Weather.new.forecast
  end

end