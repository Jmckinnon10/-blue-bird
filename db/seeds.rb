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
tommy = User.create(username:"tlusk", password:"12345678", first_name:"Tommy", last_name:"Lusk")
dan = User.create(username:"dferraro", password:"12345678", first_name:"Dan", last_name:"Ferraro")
chance = User.create(username:"cmarrocco", password:"12345678", first_name:"Chance", last_name:"Marrocco")
#Trails
hunky_dory = Trail.create(name:"Hunky Dory", difficulty: "🟦", resort_id: vail.id)
klickity_klack = Trail.create(name:"Klickity Klack", difficulty: "♦", resort_id: vail.id)
dragons_teeth = Trail.create(name:"Dragons Teeth", difficulty: "♦", resort_id: vail.id)
spit_fire = Trail.create(name:"Spit Fire", difficulty: "♦", resort_id: breckenridge.id)
ambush = Trail.create(name:"Ambush", difficulty: "♦", resort_id: keystone.id)
gold_digger = Trail.create(name:"Gold Digger", difficulty: "♦", resort_id: copper.id)

#Reviews
r1 = Review.create(comment: "This trail is sick", user_id: john.id, trail_id: hunky_dory.id)
r2 = Review.create(comment: "The best run at Breck", user_id: dan.id, trail_id: spit_fire.id)
r3 = Review.create(comment: "Great tree runs", user_id: dan.id, trail_id: ambush.id)
r4 = Review.create(comment: "a lot of moguls", user_id: tommy.id, trail_id: gold_digger.id)
r5 = Review.create(comment: "A ton of side hits", user_id: john.id, trail_id: dragons_teeth.id)
r6 = Review.create(comment: "Great for intermediate riders", user_id: chance.id, trail_id: hunky_dory.id)
# fav1 = Review.create(user_id: john.id, trail_id: spit_fire.id)

puts("Seeding Done!")