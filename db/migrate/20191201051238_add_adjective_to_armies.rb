class AddAdjectiveToArmies < ActiveRecord::Migration[6.0]
  def change
  	add_column :armies, :adjective, :string
  end
end
