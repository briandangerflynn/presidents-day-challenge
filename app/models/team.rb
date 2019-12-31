# frozen_string_literal: true

class Team < ApplicationRecord
  belongs_to :creator, class_name: 'User'
  has_and_belongs_to_many :users
  has_many :team_presidents
end
