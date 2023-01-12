class CreateResorts < ActiveRecord::Migration[6.1]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :map

      t.timestamps
    end
  end
end
