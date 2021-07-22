class Item < ApplicationRecord
  belongs_to :store
  has_many :orders, dependent: :destroy
  has_many :users, through: :orders

  validates :item_name, presence: true
  validates :price, presence: true, numericality: { less_than_or_equal_to: 99999, greater_than_or_equal_to: 0}
end


