class CreateAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :areas do |t|
      t.string :name
      t.string :state
      t.string :logo
      t.integer :age
      t.boolean :ski
      t.boolean :snowboard

      t.timestamps
    end
  end
end
