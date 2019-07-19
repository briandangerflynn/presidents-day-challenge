# frozen_string_literal: true

class TeamMember < ApplicationRecord
  belongs_to :user
  belongs_to :team
  has_and_belongs_to_many :presidents
end
