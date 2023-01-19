class Trail < ApplicationRecord
  belongs_to :resort
  has_many :reviews
  has_one :favorite

end
