class Trail < ApplicationRecord
  belongs_to :resort
  has_many :reviews
end
