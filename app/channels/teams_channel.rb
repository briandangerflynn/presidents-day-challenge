# frozen_string_literal: true

class TeamsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @team = Team.find(params[:team])
    stream_for @team
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
