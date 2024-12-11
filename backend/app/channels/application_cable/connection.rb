module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      # Differentiate based on path or parameters
      if request.path == "/ws/raw"
        transmit '{"id": 1, "progress": 30}'
      elsif request.path == "/ws/htmx"
        transmit '<progress id="download_1_progress" max="100" value="30"></progress>'
      elsif request.path == "/ws/react"
        transmit '{"id": 1, "progress": 30}'
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
