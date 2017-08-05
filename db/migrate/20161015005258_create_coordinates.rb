class CreateCoordinates < ActiveRecord::Migration[5.0]
  def change
    create_table :coordinates do |t|
      t.integer :character_id
      t.integer :group
      t.decimal :x
      t.decimal :y
    end
    add_index :coordinates, :character_id
  end
end
