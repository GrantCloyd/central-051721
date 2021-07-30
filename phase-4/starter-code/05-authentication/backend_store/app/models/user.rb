class User < ApplicationRecord
  has_many :orders
  has_many :items, through: :orders
  validates :user_name, :password, presence: {message: "must be present"}
  validates :user_name, uniqueness: true 
  has_secure_password
end
