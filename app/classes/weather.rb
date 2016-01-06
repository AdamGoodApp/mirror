class Weather

  attr_accessor :lat, :lng

  def initialize
    @lat = 51.492211
    @lng = -0.105718
  end

  def forecast
    forecast = ForecastIO.forecast(lat, lng, params: { units: 'si' })
    {
        current: {
          icon: forecast.currently.icon,
          temperature: forecast.currently.temperature,
        }
    }
  end


end