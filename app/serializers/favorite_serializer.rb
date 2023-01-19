class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :favorited
  has_one :user
  has_one :trail

  

end
