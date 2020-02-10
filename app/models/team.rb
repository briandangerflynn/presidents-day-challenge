# frozen_string_literal: true

class Team < ApplicationRecord
  has_secure_password

  belongs_to :creator, class_name: 'User'
  has_and_belongs_to_many :users
  has_many :team_presidents
  validates :teamname, uniqueness: true
  validates :password, length: { minimum: 5 }
end
