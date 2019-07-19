# frozen_string_literal: true

class CreateTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :team_members do |t|
      t.references :user, foreign_key: true
      t.references :team, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
