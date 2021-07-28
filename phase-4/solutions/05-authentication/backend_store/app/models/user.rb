class User < ApplicationRecord
  has_many :orders
  has_many :items, through: :orders
  validates :user_name, :password, presence: {message: "must be present"}
  validates :user_name, uniqueness: true 
  has_secure_password
  #def password=(value)
  # self.password_digest = BCrypt::Password.create(value)
  #end
  #def authenticate(password)
  # BCrypt::Password.new(self.password_digest) == password
  #end
end
