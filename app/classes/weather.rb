class Weather

  attr_accessor :lat, :lng, :tomorrow, :after_tomorrow

  def initialize
    @lat = 51.492211
    @lng = -0.105718
    @tomorrow = Date.today + 1
    @after_tomorrow = tomorrow + 1
  end

  def forecast
    forecast = ForecastIO.forecast(lat, lng, params: { units: 'si' })
    forecast_tomorrow = ForecastIO.forecast(lat,lng, time: tomorrow.to_time.to_i, params: { units: 'si' })
    forecast_after_tomorrow = ForecastIO.forecast(lat,lng, time: after_tomorrow.to_time.to_i, params: { units: 'si' })
    {
        current: {
          icon: forecast.currently.icon,
          temperature: forecast.currently.temperature,
        },
        tomorrow: {
          icon: forecast_tomorrow.currently.icon,
          temperature: forecast_tomorrow.currently.temperature,
          day: tomorrow.strftime("%a")
        },
        after_tomorrow: {
            icon: forecast_after_tomorrow.currently.icon,
            temperature: forecast_after_tomorrow.currently.temperature,
            day: after_tomorrow.strftime("%a")
        }
    }
  end


end