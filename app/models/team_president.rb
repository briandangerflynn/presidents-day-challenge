class TeamPresident < ApplicationRecord
  belongs_to :team
  belongs_to :president
  belongs_to :user, optional: true
end
