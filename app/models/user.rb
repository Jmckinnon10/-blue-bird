class User < ApplicationRecord
  has_many :reviews
  #has_many :reviews, through: :trails
  has_many :favorites
  has_many :favorites, through: :trails

  has_secure_password
end
