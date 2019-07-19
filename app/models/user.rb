# frozen_string_literal: true

class User < ApplicationRecord
  has_many :team_members
  has_many :owned_teams, class_name: 'Team', foreign_key: 'creator_id'
end
