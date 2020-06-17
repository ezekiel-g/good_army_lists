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

ActiveRecord::Schema.define(version: 2020_06_17_002121) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armies", force: :cascade do |t|
    t.string "name", null: false
    t.string "alignment", null: false
    t.string "adjective"
  end

  create_table "artefacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_heroic", default: false, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "company", null: false
    t.string "game_type"
    t.string "abbreviation"
  end

  create_table "gg_unit_options", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_spell", default: false, null: false
    t.boolean "is_unique", default: false, null: false
    t.text "description"
    t.bigint "gg_unit_id"
    t.index ["gg_unit_id"], name: "index_gg_unit_options_on_gg_unit_id"
  end

  create_table "gg_units", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "unit_type", null: false
    t.integer "unit_type_index", null: false
    t.string "unit_size"
    t.integer "unit_strength", null: false
    t.integer "points", null: false
    t.integer "limited_n", null: false
    t.integer "unlocking_class", null: false
    t.boolean "is_irregular", default: false, null: false
    t.boolean "is_army_specific", default: false, null: false
    t.integer "spellcaster"
    t.integer "height"
    t.string "speed"
    t.string "melee"
    t.string "ranged"
    t.string "defense"
    t.string "attacks"
    t.string "nerve"
    t.text "special_rules"
    t.string "spells"
    t.string "options"
    t.boolean "is_ranged"
  end

  create_table "kowh_unit_options", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_spell", default: false, null: false
    t.boolean "is_unique", default: false, null: false
    t.text "description"
    t.bigint "kowh_unit_id"
    t.index ["kowh_unit_id"], name: "index_kowh_unit_options_on_kowh_unit_id"
  end

  create_table "kowh_units", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "unit_type", null: false
    t.integer "unit_type_index", null: false
    t.string "unit_size"
    t.integer "unit_strength", null: false
    t.integer "points", null: false
    t.integer "limited_n", null: false
    t.integer "unlocking_class", null: false
    t.boolean "is_irregular", default: false, null: false
    t.boolean "is_army_specific", default: false, null: false
    t.integer "spellcaster"
    t.integer "height"
    t.string "speed"
    t.string "melee"
    t.string "ranged"
    t.string "defense"
    t.string "attacks"
    t.string "nerve"
    t.text "special_rules"
    t.string "spells"
    t.string "options"
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
    t.integer "spellcaster"
    t.integer "height"
    t.string "speed"
    t.string "melee"
    t.string "ranged"
    t.string "defense"
    t.string "attacks"
    t.string "nerve"
    t.text "special_rules"
    t.text "spells"
    t.text "options"
    t.integer "unlocking_class"
    t.text "special_rules_cont"
    t.text "keywords"
    t.index ["army_id"], name: "index_units_on_army_id"
  end

  create_table "veteran_abilities", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.integer "points", null: false
    t.boolean "is_heroic", default: false, null: false
    t.text "description"
  end

  create_table "wmr_armies", force: :cascade do |t|
    t.string "name", null: false
    t.integer "number_in_order", null: false
    t.text "army_rules"
    t.string "alignment"
  end

  create_table "wmr_magic_items", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "magic_item_type", null: false
    t.string "unique_to"
    t.integer "points", null: false
    t.text "description", null: false
  end

  create_table "wmr_spells", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "needed_to_cast", null: false
    t.string "range", null: false
    t.text "description", null: false
    t.bigint "wmr_army_id"
    t.index ["wmr_army_id"], name: "index_wmr_spells_on_wmr_army_id"
  end

  create_table "wmr_units", force: :cascade do |t|
    t.string "name", null: false
    t.string "display_name", null: false
    t.string "unit_type", null: false
    t.integer "unit_type_index", null: false
    t.string "attacks", null: false
    t.string "hits", null: false
    t.string "armor", null: false
    t.string "command", null: false
    t.string "unit_size", null: false
    t.string "points_per_unit", null: false
    t.string "min_max", null: false
    t.text "special_rules"
    t.bigint "wmr_army_id"
    t.index ["wmr_army_id"], name: "index_wmr_units_on_wmr_army_id"
  end

end
