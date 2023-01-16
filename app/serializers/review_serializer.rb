class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :trail
  has_one :user
end
