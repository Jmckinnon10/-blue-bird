class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty
  has_many :reviews

end

# 