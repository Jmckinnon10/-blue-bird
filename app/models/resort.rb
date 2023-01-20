class Resort < ApplicationRecord
  has_many :trails
  has_many :favorites, through: :trails
  has_many :users
end
