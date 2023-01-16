class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :map
  has_many :trails, serializer: TrailSerializer

  def to_json(options = {})
    options[:include] = [:trails]
    super(options)
  end

end
