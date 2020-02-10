class AddDescriptionToPresidents < ActiveRecord::Migration[5.2]
  def change
    add_column :presidents, :description, :text
  end
end
