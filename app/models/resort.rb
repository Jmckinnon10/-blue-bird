class Resort < ApplicationRecord
  has_many :trails
  has_many :reviews
  has_many :reviews, through: :trails
end
