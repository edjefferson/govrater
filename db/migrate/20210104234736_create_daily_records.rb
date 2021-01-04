class CreateDailyRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_records do |t|
      t.text :record_text

      t.timestamps
    end
  end
end
