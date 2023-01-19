class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :map, :favorite_count
  has_many :trails
  # has_many :reviews

end

