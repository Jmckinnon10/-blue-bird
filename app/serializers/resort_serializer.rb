class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :map
  has_many :trails
end
