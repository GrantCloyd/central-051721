class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :image_url, :price
end
