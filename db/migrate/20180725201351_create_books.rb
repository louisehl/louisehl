class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.references :author, foreign_key: true
      t.string :title
      t.string :description
      t.integer :stars
      t.string :comment

      t.timestamps
    end
  end
end
