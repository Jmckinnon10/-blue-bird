class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :difficulty
      t.belongs_to :resort, null: false, foreign_key: true

      t.timestamps
    end
  end
end
