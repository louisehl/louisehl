class RenameGenreTableToAuthor < ActiveRecord::Migration[5.2]
  def change
    rename_table :genres, :authors
  end
end
