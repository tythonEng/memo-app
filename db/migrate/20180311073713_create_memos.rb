class CreateMemos < ActiveRecord::Migration
  def change
    create_table :memos do |t|
      t.text    :text
      t.text    :text_sub
      t.integer :gps_week
      t.float   :gps_week_time
      t.float   :utc_time
      t.float   :latitude
      t.float   :longitude
      t.integer :message_type
      t.integer :user_id

      t.timestamps
    end
  end
end
