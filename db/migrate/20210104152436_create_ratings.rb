class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :rating_no
      t.integer :votes, default: 0

      t.timestamps
    end
  end
end
