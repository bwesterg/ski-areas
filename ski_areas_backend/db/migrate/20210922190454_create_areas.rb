class CreateAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :areas do |t|
      t.integer :name
      t.string :state
      t.string :logo
      t.boolean :ski
      t.boolean :snowboard

      t.timestamps
    end
  end
end
