class AddSpecialRulesContToUnits < ActiveRecord::Migration[6.0]
  def change
  	add_column :units, :special_rules_cont, :text
  	add_column :units, :keywords, :text
  end
end
