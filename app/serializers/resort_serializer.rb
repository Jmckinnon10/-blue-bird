class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :map
  has_many :trails
  # has_many :reviews
end

