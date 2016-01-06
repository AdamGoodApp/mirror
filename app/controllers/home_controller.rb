class HomeController < ApplicationController

  def index
  end

  def weather
    render json: Weather.new.forecast
  end

end