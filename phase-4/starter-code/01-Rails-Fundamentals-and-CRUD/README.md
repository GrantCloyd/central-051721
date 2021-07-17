# Lecture Objectives

- Explain convention over configuration and why it’s important in Rails
- Describe the MVC design pattern
- Identify the differences between Sinatra and Rails
- Create routes in Rails 
- Write routes using RESTful convention
- Scaffold an API using rails generators

## MVC Discussion

[MVC Discussion](https://hackmd.io/7o2CsWGGSAmvWjeuFApnjA)

## Blog Post Demo

- create models
- create migrations
- add relationships
- create seeds and run them
- run `rails console` to test out the models

## Exercise 1

Create a rails app with migrations and models for a dog walking app.
dog -< walks
1. `rails new dog_walks --api`
2. Generate migrations and models for dogs, which have a name:string
3. Generate migrations and models for walks, which have week_day:string and dog:belongs_to
4. Migrate your tables 
6. Add your relationships in the Models file
7. Add seeds and review the content in your rails console to verify it's working

## Routes Demo

- create controllers
- add routes
- add index action
- add show action and use `byebug` to explore params
- add create action 
- use [postman](https://www.postman.com/downloads/) to send request and use `byebug` to explore params

## Exercise 2

1. Add the index and show route to your dog walking app.
2. Create a controller and add the actions for index and show.
3. run your rails server and test the routes using your browser or postman.

## Student Led Activity

1. Add an update action to the walks controller
2. Add a delete action to the walks controller



