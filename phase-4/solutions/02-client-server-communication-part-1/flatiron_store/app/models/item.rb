class Item < ApplicationRecord
    belongs_to :store
    has_many :orders
    has_many :users, through: :orders

    validates :item_name, presence: true
end
