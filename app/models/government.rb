require 'open-uri'
class Government < ApplicationRecord

  def self.import_list
    url = "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json"
  
    json = JSON.parse(URI.open(url).read)

    json.each do |c|
      country = self.where(country_code: c["Code"]).first_or_create
      country.update(name: c["Name"])
    end
  end
end
