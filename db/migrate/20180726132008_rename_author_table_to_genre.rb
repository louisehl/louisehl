class RenameAuthorTableToGenre < ActiveRecord::Migration[5.2]
  def change
    rename_table :authors, :genres
  end
end
