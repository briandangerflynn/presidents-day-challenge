# frozen_string_literal: true

class Team < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  has_many :team_members
end
