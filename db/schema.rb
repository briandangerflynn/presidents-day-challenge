# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_09_231609) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "presidents", force: :cascade do |t|
    t.string "name"
    t.string "presidency"
    t.string "years_active"
    t.string "specific_drink"
    t.string "drink_type"
    t.string "alt_one"
    t.string "alt_two"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
  end

  create_table "team_presidents", force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "president_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["president_id"], name: "index_team_presidents_on_president_id"
    t.index ["team_id"], name: "index_team_presidents_on_team_id"
    t.index ["user_id"], name: "index_team_presidents_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "teamname"
    t.bigint "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["creator_id"], name: "index_teams_on_creator_id"
  end

  create_table "teams_users", id: false, force: :cascade do |t|
    t.bigint "team_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "team_presidents", "presidents"
  add_foreign_key "team_presidents", "teams"
  add_foreign_key "team_presidents", "users"
end
