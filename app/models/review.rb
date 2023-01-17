class Review < ApplicationRecord
  belongs_to :trail
  belongs_to :user
  
  def review_name
    self.user.username
  end

end
