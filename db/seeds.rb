
puts("Seeding")

#Resorts
vail = Resort.create(name: "https://imgur.com/1r06XI2.jpg", map: "https://cdn.ski/fSnxSfpdLWx33KYc.jpeg")
breckenridge = Resort.create(name: "https://i.imgur.com/3kYQrCK.jpg", map: "https://www.skicentral.com/images/trailmaps/303007-2400.jpg")
keystone = Resort.create(name: "https://i.imgur.com/AEU5hd0.jpg", map: "https://skimap.org/data/519/4070/1608579537jpg_render.jpg")
copper = Resort.create(name: "https://i.imgur.com/Pbok6pV.jpg", map: "https://skimap.org/data/509/2200/1637367968.png")
loon = Resort.create(name: "https://i.imgur.com/Su6NkPI.jpg", map: "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/Loon_TrailMap18.19_58ab850f3eefdcc76b5e16f6ebbe52ba")
telluride = Resort.create(name: "https://i.imgur.com/iaAoCD6.jpg", map: "https://s3.onthesnow.com/images/trailmaps/colorado/telluride/20181004155715/large.jpg")
stowe = Resort.create(name: "https://i.imgur.com/NV0LYjq.jpg", map: "https://skimap.org/data/212/3535/1635228546jpg_render.jpg")
killington = Resort.create(name: "https://i.imgur.com/pDG978B.jpg", map: "https://www.newenglandskihistory.com/maps/Vermont/killington/killingtonmap-2000-0000a.jpg")

#Users
john = User.create(username:"jmckinnon10", password: "12345678", first_name:"John", last_name:"McKinnon")
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

#favorites
fav1 = Favorite.create(favorited: true, user_id: john.id, trail_id: hunky_dory.id)
fav2 = Favorite.create(favorited: true, user_id: john.id, trail_id: dragons_teeth.id)
fav3 = Favorite.create(favorited: true, user_id: dan.id, trail_id: spit_fire.id)
fav4 = Favorite.create(favorited: true, user_id: tommy.id, trail_id: ambush.id)
fav5 = Favorite.create(favorited: true, user_id: chance.id, trail_id: gold_digger.id)

puts("Seeding Done!")