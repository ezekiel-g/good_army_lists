class CreateWmrUnits < ActiveRecord::Migration[6.0]
  	def change
    	create_table :wmr_units do |t|
            t.string :name, null: false, unique: true
            t.string :display_name, null: false
            t.string :unit_type, null: false
            t.integer :unit_type_index, null: false
            t.string :attacks, null: false
            t.string :hits, null: false
            t.string :armor, null: false
            t.string :command, null: false
            t.string :unit_size, null: false
            t.string :points_per_unit, null: false
            t.string :min_max, null: false
            t.text :special_rules                		

    		t.belongs_to :wmr_army
    	end
  	end
end
