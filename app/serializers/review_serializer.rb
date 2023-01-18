class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :review_name
  has_one :trail
  has_one :user
  
end
