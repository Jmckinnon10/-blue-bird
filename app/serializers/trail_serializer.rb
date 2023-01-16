class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty
  has_many :reviews

  def to_json(options = {})
    options[:include] = [:reviews]
    super(options)
  end
  # has_one :favorite
end
