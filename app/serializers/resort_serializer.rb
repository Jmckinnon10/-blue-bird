class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :map
  has_many :trails
  has_many :reviews
  has_many :reviews, through: :trails
end
