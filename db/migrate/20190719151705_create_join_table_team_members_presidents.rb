# frozen_string_literal: true

class CreateJoinTableTeamMembersPresidents < ActiveRecord::Migration[5.2]
  def change
    create_join_table :team_members, :presidents do |t|
      # t.index [:team_member_idm, president_id]
      # t.index [:president_id, :team_member_id]
    end
  end
end
