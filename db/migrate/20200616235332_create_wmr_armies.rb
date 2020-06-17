class CreateWmrArmies < ActiveRecord::Migration[6.0]
  	def change
    	create_table :wmr_armies do |t|
    		t.string :name, null: false, unique: true
    		t.integer :number_in_order, null: false, unique: true
    		t.text :army_rules
    		t.string :alignment
    	end
  	end
end
