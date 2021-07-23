class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :image_url, :price, :secret, :users
  belongs_to :store

  def secret
    "message"
  end

  def orders_with_users
    object.orders.map{|o| {order: o, user: o.user}}
  end
end
