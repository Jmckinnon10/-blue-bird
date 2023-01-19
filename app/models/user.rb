class User < ApplicationRecord
  has_many :reviews
  has_many :favorites
  has_many :trails, through: :favorites
  has_many :resorts, through: :trails
  has_secure_password
 
end
