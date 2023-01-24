class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :favorite_resort
  # has_many :reviews
    # has_many :favorites
  def favorite_resort
    if object.trails.empty?
      nil
    else
      fav = object.trails.group_by(&:resort_id).values.sort_by(&:size).last
      fav.present? ? object.resorts.find(fav.first.resort_id) : nil
    end
  end
end
