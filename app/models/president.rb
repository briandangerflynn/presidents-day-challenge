# frozen_string_literal: true

class President < ApplicationRecord
  has_many :team_presidents
end
