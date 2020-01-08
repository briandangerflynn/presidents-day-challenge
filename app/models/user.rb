# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :teams
  has_many :owned_teams, class_name: 'Team', foreign_key: 'creator_id'

  validates :email, presence: true

  def to_token_payload
    {
      sub: id,
      email: email,
      username: username
    }
  end

  def self.from_token_payload(payload)
    select(:id, :username, :email, :created_at, :updated_at).find payload["sub"]
  end
end
