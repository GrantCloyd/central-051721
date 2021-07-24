class Order < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validate :three_per_customer
  # custom validator
  def three_per_customer
    # did this user already order this item 3 times?
    if Order.where(user: self.user, item: self.item).count >= 3
      errors.add(:only, "3 purchases of #{self.item.item_name} are allowed per customer")
    end
  end
end
