# frozen_string_literal: true

class CreatePresidents < ActiveRecord::Migration[5.2]
  def change
    create_table :presidents do |t|
      t.string :name
      t.string :presidency
      t.string :years_active
      t.string :specific_drink
      t.string :drink_type
      t.string :alt_one
      t.string :alt_two
      t.string :image_url

      t.timestamps
    end
  end
end
