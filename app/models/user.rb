# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :team_members
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
    find payload[:sub]
  end
end
