class HomeController < ApplicationController

  def index
    gon.user = current_user if current_user
  end

  def weather
    render json: Weather.new.forecast
  end

  def lights_on
    Vision.all_on!
    render nothing: true
  end

  def lights_off
    Vision.all_off!
    render nothing: true
  end

  def fan_on
    GPIO.new().fan_on!
    render nothing: true
  end

  def fan_off
    GPIO.new().fan_off!
    render nothing: true
  end

end