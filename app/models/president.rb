# frozen_string_literal: true

class President < ApplicationRecord
  has_and_belongs_to_many :team_members
end
