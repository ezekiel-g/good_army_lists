# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_19_065313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armies", force: :cascade do |t|
    t.string "name", null: false
    t.string "alignment", null: false
  end

  create_table "artefacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_heroic", default: false, null: false
  end

  create_table "unit_options", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_spell", default: false, null: false
    t.boolean "is_unique", default: false, null: false
    t.bigint "unit_id"
    t.index ["unit_id"], name: "index_unit_options_on_unit_id"
  end

  create_table "units", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "unit_type", null: false
    t.integer "unit_type_index", null: false
    t.string "unit_size"
    t.integer "unit_strength", null: false
    t.integer "points", null: false
    t.integer "limited_n"
    t.boolean "is_irregular", default: false, null: false
    t.bigint "army_id"
    t.index ["army_id"], name: "index_units_on_army_id"
  end

end
