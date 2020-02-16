class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
    	t.string :name, null: false, unique: true
    	t.string :display_name, null: false
    	t.string :company, null: false
    	t.string :game_type
    end
  end
end
