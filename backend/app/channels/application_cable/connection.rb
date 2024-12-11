module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      # Differentiate based on path or parameters
      if request.path == "/ws/raw"
        @frontend = :raw
      elsif request.path == "/ws/htmx"
        @frontend = :htmx
      elsif request.path == "/ws/react"
        @frontend = :react
      else
        reject_unauthorized_connection
      end
    end

    # Override the base receive method and skip using the coder
    def receive(message)
      logger.info "Received raw data: #{message}"
    end

    # Override the base transmit method and skip using the coder
    def transmit(message)
      websocket.transmit(message)
    end
  end
end
