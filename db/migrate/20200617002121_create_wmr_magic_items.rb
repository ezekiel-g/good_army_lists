class CreateWmrMagicItems < ActiveRecord::Migration[6.0]
  	def change
    	create_table :wmr_magic_items do |t|
    		t.string :name, null: false, unique: true
    		t.string :display_name, null: false
    		t.string :magic_item_type, null: false
    		t.string :unique_to
    		t.integer :points, null: false
    		t.text :description, null: false
    	end
  	end
end
