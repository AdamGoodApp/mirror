class GPIO

  attr_accessor :pusher_client

  def initialize
    @pusher_client = Pusher::Client.new({
                                           app_id: ENV['pusher_app_id'],
                                           key: ENV['pusher_key'],
                                           secret: ENV['pusher_secret']
                                       })
  end

  def fan_off!
    pusher_client.trigger('mirror', 'gpio_message', {pin: 18, state: 'on'})
  end

  def fan_on!
    pusher_client.trigger('mirror', 'gpio_message', {pin: 18, state: 'off'})
  end

end