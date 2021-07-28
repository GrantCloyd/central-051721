Order.destroy_all
User.destroy_all
Item.destroy_all
Store.destroy_all

#User

u1 = User.create(user_name: Faker::Name.name, address: "#{Faker::Address.street_address} #{Faker::Address.city} #{Faker::Address.state} #{Faker::Address.zip}", password_digest:1234    )

#Store

s1 =  Store.create(store_name:Faker::Company.name, owner: Faker::Name.name, mission:Faker::Company.catch_phrase )


#itmes 
50.times do |i|
    Item.create(item_name: Faker::Commerce.product_name, price: Faker::Commerce.price, description:Faker::Commerce.material, image_url: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png', store_id: Store.all.sample.id)
end 

#orders
100.times do |i|
    Order.create(user_id:User.all.sample.id, item_id: Item.all.sample.id)
end 

puts 'done'

