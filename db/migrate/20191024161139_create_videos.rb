class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string  :title, null: false
      t.string :runtime, null: false
      t.integer :year, null: false
      t.string :genre
      t.text :description, null: false
      
      t.timestamps
    end
    add_index :videos, :title, unique: true
  end
end
