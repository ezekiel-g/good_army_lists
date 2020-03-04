class AddIsRangedToGgUnits < ActiveRecord::Migration[6.0]
  	def change
  		add_column :gg_units, :is_ranged, :boolean
  	end
end
