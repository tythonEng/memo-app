class AddHeadingToMemos < ActiveRecord::Migration
  def change
    add_column :memos, :heading, :float
    add_column :memos, :altitude, :float
    add_column :memos, :accuracy, :float
  end
end
