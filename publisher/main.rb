require "bunny"
require "json"

connection = Bunny.new(ENV["RABBITMQ_URL"])
connection.start

channel = connection.create_channel

example_data = {
  data: {
    name: "message",
    description: "data example"
  }
}

channel.default_exchange.publish(
  JSON(example_data),
  routing_key: "rabbitmq_test.default_queue"
)

puts "Sent example data to `rabbitmq_test.default_queue`"

connection.close
