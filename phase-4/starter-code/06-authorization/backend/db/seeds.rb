
Order.destroy_all
User.destroy_all
Item.destroy_all


#User

u1 = User.create(username:'ix', bio: "is admin", password:'1234' , admin:'true')
5.times do |i|
    User.create(username: Faker::Name.name, bio: "is very very cool", password:'1234' , admin:false)
end 


#itmes 
50.times do |i|
    Item.create(item_name: Faker::Commerce.product_name, price: Faker::Commerce.price, description:Faker::Commerce.material, image_url: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
end 

#orders
100.times do |i|
    Order.create(user_id:User.all.sample.id, item_id: Item.all.sample.id)
end 

puts 'done'

