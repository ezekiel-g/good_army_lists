class AddDetailsToUnits < ActiveRecord::Migration[6.0]
  def change
  	add_column :units, :spellcaster, :integer
  	add_column :units, :height, :integer
  	add_column :units, :speed, :string
  	add_column :units, :melee, :string
  	add_column :units, :ranged, :string
  	add_column :units, :defense, :string
  	add_column :units, :attacks, :string
  	add_column :units, :nerve, :string
  	add_column :units, :special_rules, :text
  	add_column :units, :spells, :text
  	add_column :units, :options, :text
  	add_column :units, :unlocking_class, :integer
  end
end
