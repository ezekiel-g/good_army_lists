class CreateUnits < ActiveRecord::Migration[6.0]
    def change
        create_table :units do |t|
            t.string :name, null: false, unique: true
            t.string :display_name, null: false
            t.string :unit_type, null: false
            t.integer :unit_type_index, null: false
            t.string :unit_size
            t.integer :unit_strength, null: false
            t.integer :points, null: false
            t.integer :limited_n
            t.boolean :is_irregular, null: false, default: false

            t.belongs_to :army     
        end
    end
end