class AddAbbreviationToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :abbreviation, :string
  end
end
