class CreateGovernments < ActiveRecord::Migration[6.1]
  def change
    create_table :governments do |t|
      t.text :name
      t.text :url_string
      t.text :country_code

      t.timestamps
    end
  end
end
