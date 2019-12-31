class CreateTeamPresidents < ActiveRecord::Migration[5.2]
  def change
    create_table :team_presidents do |t|
      t.references :team, foreign_key: true
      t.references :president, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
