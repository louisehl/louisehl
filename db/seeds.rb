# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

author1 = Author.create(
  name: 'Charles Duhigg',
  description: 'Born in 1974 in New  Mexico. He works at the New York Times.',
  image: 'https://pbs.twimg.com/profile_images/809226411122839552/tXt1ifbu_400x400.jpg'
)

author1.books.create(
  title: 'The Power of Habit',
  description: 'In The Power of Habit, award-winning business reporter Charles Duhigg takes us to the
  thrilling edge of scientific discoveries that explain why habits exist and how they can be changed.
  Distilling vast amounts of information into engrossing narratives that take us from the boardrooms
  of Procter & Gamble to the sidelines of the NFL to the front lines of the civil rights movement, Duhigg
  presents a whole new understanding of human nature and its potential. At its core, The Power of Habit
  contains an exhilarating argument: The key to exercising regularly, losing weight, being more
  productive, and achieving success is understanding how habits work. As Duhigg shows, by harnessing
  this new science, we can transform our businesses, our communities, and our lives. (Taken from
  Saxo.com)',
  stars: 0,
  comment: "None yet, since i haven't finished it"
)
