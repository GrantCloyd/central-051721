class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :admin, :user_items
  def user_items
      object.orders.map do |order|
        order.item
      end 
  end 
end
