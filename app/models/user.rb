class User < ApplicationRecord
  validates :username, presence: true,
                      length: {minimum: 3, maximum: 15},
                      uniqueness: {case_sensetive: false}
  
  has_many :messages
  has_secure_password
end
