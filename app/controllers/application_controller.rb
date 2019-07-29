# frozen_string_literal: true

class ApplicationController < ActionController::API
  include Knock::Authenticable

  def jwtDecode(token)
    secret = Rails.application.secrets.secret_key_base.to_s
    decoded = JWT.decode(token, secret)[0]
    HashWithIndifferentAccess.new decoded
  end
end
