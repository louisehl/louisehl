class EditAuthorInBooks < ActiveRecord::Migration[5.2]
  def change
    change_table :books do |t|
      t.rename :author, :authorname
    end
  end
end
