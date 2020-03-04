class CreateGgUnitOptions < ActiveRecord::Migration[6.0]
  	def change
    	create_table :gg_unit_options do |t|
    	    t.string :name, null: false, unique: true
    		t.string :display_name, null: false
    		t.integer :points, null: false
    		t.boolean :is_spell, null: false, default: false
    		t.boolean :is_unique, null: false, default: false
    		t.text :description

    		t.belongs_to :gg_unit    	
    	end
  	end
end
