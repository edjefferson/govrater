class AddGovernmentToRating < ActiveRecord::Migration[6.1]
  def change
    add_column :ratings, :government_id, :integer
  end
end
