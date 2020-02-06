# frozen_string_literal: true

class TeamsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  # connected_user = connections_info[0][:subscriptions_identifiers][0]["user"]["id"]
  
      
    @team = Team.find(params[:team]["id"])
    stream_for @team
    
    
  end

  def connections_info
    connections_array = []
    connection.server.connections.each do |conn|
        conn_hash = {}
        conn_hash[:subscriptions_identifiers] = conn.subscriptions.identifiers.map {|k| JSON.parse k}
        connections_array << conn_hash
    end
    connections_array
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
