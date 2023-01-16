# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts("Seeding")

#Resorts
vail = Resort.create(name: "Vail", map: "https://cdn.ski/fSnxSfpdLWx33KYc.jpeg")
breckenridge = Resort.create(name: "Breckenridge", map: "https://www.skicentral.com/images/trailmaps/303007-2400.jpg")
keystone = Resort.create(name: "Keystone", map: "https://skimap.org/data/519/4070/1608579537jpg_render.jpg")
copper = Resort.create(name: "Copper", map: "https://skimap.org/data/509/2200/1637367968.png")

#Users
john = User.create(username:"jmckinnon10", password: "12345678", first_name:"John", last_name:"McKinnon" )

#Trails
hunky_dory = Trail.create(name:"Hunky Dory", difficulty: "🟦", resort_id: vail.id)

#Reviews
r1 = Review.create(comment: "This trail is sick", user_id: john.id, trail_id: hunky_dory.id)


puts("Seeding Done!")