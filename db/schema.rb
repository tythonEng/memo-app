# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20180311073713) do

  create_table "memos", force: :cascade do |t|
    t.text     "text",          limit: 65535
    t.text     "text_sub",      limit: 65535
    t.integer  "gps_week",      limit: 4
    t.float    "gps_week_time", limit: 24
    t.float    "utc_time",      limit: 24
    t.float    "latitude",      limit: 24
    t.float    "longitude",     limit: 24
    t.integer  "message_type",  limit: 4
    t.integer  "user_id",       limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
