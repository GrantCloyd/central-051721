# Phase-2-Rails-Fundamentals-&-CRUD

## Objectives
- [ ] Describe the MVC design pattern
- [ ] Create routes in Rails 
- [ ] Identify the differences between Sinatra and Rails
- [ ] Scaffold an API using rails generators

## Outline

```txt
05 min pre-test or warmup 
30 min Sinatra v. Rails 
10 min Check for Understanding migrations
10 min Break 
25 min Read and Create actions
10 min Check for Understanding index and show
25 min Update and Delete 
05 min Exit Ticket
120 min
```

## Segment 1: Sinatra v. Rails 
_Note: We will be using rails as an api and Post Man to make requests. 

Instructors like to show [this video](https://www.youtube.com/watch?v=9ML8PrP3A8E) as a way to introduce rails. You see all of the pain that goes into a Sinatra application, and then show `rails new my_blog --api` and `rails g` and everything becomes easier!

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions.

Rails heavily emphasizes _**"Convention over Configuration."**_ This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

![](https://s3-us-west-2.amazonaws.com/student-resources/uploads/lecture/Screen+Shot+2017-06-09+at+10.04.20+AM.png)

Over the years, Rails has indeed made it easier for beginners to dive into web development and build large complex applications. Some popular websites built on Rails include Twitter \(at one point\), GitHub and, of course, 37signals' very own Basecamp. Although it has often been criticized for performance and bloat, Rails continues its iterations with an ever-growing developer community and a vibrant ecosystem.

[Built With Rails](https://skillcrush.com/2015/02/02/37-rails-sites/)


### MVC Architecture

_Note: If you'd like, discuss how MVC is just_ one _of the many common programming architectural paradigms. Johann uses the analogy that these paradigms are like political parties: most everyone has one and sticks to it, but none have the perfect solution in all cases. As usual, the key words are COMPROMISE & CONTEXT._

_Note: Our view will be React going forward but for the first lecture we will be using [Postman](https://www.postman.com/) to represent our front-end requests so we can focus in on rails._

In a typical MVC application you will find code organized into these three fundamental categories or layers:

* Data \(Model\)

  Providing an interface to access and modify the data

* \(View\)

  Describing how the data will be displayed to our users

* \(Controller\)

  Configuring how our application will respond to requests

The MVC pattern, in a nutshell, is this:

* Code in the model layer represents the data, and does nothing else. The model does NOT depend on the controller or the view.
* Code in the view layer describes how the data retrieved within a controller will be displayed to the user. The view often depends on data retrieved within the controller (via the model layer), but will not interact directly with the model layer.
* Code in the controller layer takes information from our users via incoming requests, retrieves/creates model data, and interacts with the view layer to format the response sent to the user's request.

_Note: Yes, in certain cases the view and the controller are the same. Be careful when teaching this, as we want to make sure students can understand MVC as a whole without having too many choices to confuse them. Rails enforces the first example, so I recommend we teach it as well._

Rule 1 is the golden rule of MVC:

The model represents the data, and does nothing else. The model does NOT depend on the controller or the view. In other words, _THE MODEL DOES NOT INTERACT WITH THE VIEW, AND THE CONTROLLER DOES ALL THE_ WORK_!_

_Note: an easy analogy to help students with this rule is to think of your MVC app as a restaurant. The model is the food being made in the kitchen, this is the_ meat _of the experience/app. The controller is the restaurant's staff, they handle the experience, prepare the food, and are your first contact if you need anything. The view is you, and your experience. You do not see inside the kitchen, nor do you have visibility on what happens to give you the experience you get. If you want more information, you can always talk to the staff, but they have rules about how much or how little you get to do or see._

If students ask why, you can give them a variety of examples alongside which the Controller should be the common pathway. Good examples include:

* security and access control
* logging
* giving specific users specific content while making views less complex


### Demo
Now that we have our boiler plate, lets fill it out.
Lets start with our `Model` and migrations
These migrations are for our database schema
```
 rails g model user user_name:string bio:string
 # technically the type can be omitted for strings

 rails g model post user:belongs_to title content
 # the belongs_to will help us set up the relationship between post and user

 rails d model post
 rails d user post
 # we can use rails d to undo a rails generation 

 rails g model post user:belongs_to title content --no-test-framework
 rails g model user user_name bio --no-test-framework
Running via Spr
 # we don't need the testing framework right now so lets remove that for the moment

rails db:migrate
# we should see the following print in our terminal 
# double check the schema.rb to verify your migrations are correct
== 20210621175013 CreatePosts: migrating ======================================
-- create_table(:posts)
   -> 0.0030s
== 20210621175013 CreatePosts: migrated (0.0030s) =============================

== 20210621175211 CreateUsers: migrating ======================================
-- create_table(:users)
   -> 0.0016s
== 20210621175211 CreateUsers: migrated (0.0016s) =============================

# schema.rb
  create_table "posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end
```

What happened to the user:belongs_to colum?
It was translated into a foreign key, the index here helps our db query the user that belongs to this post faster. 

Lets take a look at our actual `Model` files
You'll notice our post already has the belongs_to relationship set up. This is again because of the user:belongs_to we set up during our migration. We will need to add the has_many to User manually.
```
class Post < ApplicationRecord
  belongs_to :user
end

class User < ApplicationRecord
    has_many :posts
end

```

Last step, lets create some seeds so we can test our app!
go to the seeds.rb

```

rose = User.create(user_name:'rose', bio:'is a cat')
Post.create(user_id:rose.id, title:'eat fish', content:'Fish is a low-fat high quality protein. Fish is filled with omega-3 fatty acids and vitamins such as D and B2 (riboflavin). Fish is rich in calcium and phosphorus and a great source of minerals, such as iron, zinc, iodine, magnesium, and potassium.')

puts 'done'

```

Lets make sure our seeds were created by going to the rails console

```
rails c
User.all
Post.all
Post.first.user

```

## Check for Understanding 
Create a rails app with migrations and models for a dog walking app.
dog -< walks
1. `rails new dog_walks --api`
2. Generate migrations and models for dogs, which have a name:string
3. Generate migrations and models for walks, which have week_day:string and dog:belongs_to
4. Migrate your tables 
6. Add your relationships in the Models file
7. Add seeds and review the content in your rails console to verify it's working

## Segment 2: Read and Create actions 
Give an introduction of RESTful Routing and how it connects to CRUD. This diagram will prove helpful:

![rest and crud](https://github.com/flatiron-school/education-team-wiki/blob/master/software-engineering/lessons/assets/sinatra-crud.jpg?raw=true)


Talk about how each route specifically maps to a particular resource/model, and can also represent a "method" being passed to that resource's controller. This allows each action on each resource to be unique. Just like CRUD offers both structure and consistency through its rules, REST does the same. Let the students see how `GET`, `PUT`, `POST`/`PATCH`, and `DELETE` map to "Read", "Create", "Update", and "Delete" respectively.


_Note: One thing that helps justify why things are the way they are, is that REST methods try their best to minimize the number of URLs but maximizing functionality. This is why we overload on the same URLs._

It's not necessary that all of this functionality exists, we just choose to expose which things we find important/want our users to be able to do. Reiterate that web requests are stateless, which means that at the default, there is no relationship between any two requests to the server.

### Demo
Introduce rails routes. 
Activation: How did we do routes in sinatra?

```

Rails.application.routes.draw do
  resources :user
end

# In terminal 
rails routes 

```
Note all the default routes we have.
We want to control and limit our routes to the specific routes we want to use.

```
  resources :user, only: [:index, :show, :create]
  # In terminal 
  rails routes 
```

It's time for us to build our controller.
Lets review, the controller is our connection between our view and our model. 
Our view is going to be our front-end (postman today) and we just made our model. 

Each of our routes tie to a specific action.
We will need to render all of our posts in json for our index route. 

```
 rails g controller users
 rails g controller posts

# posts_controller
class PostsController < ApplicationController
    def index
        posts = Post.all
        render json:posts
    end
end

```

Lets test out our first route!
fire up our rails server `rails s`

Open postman and lets test our `http://localhost:3000/posts` route 

Lets see what happens when we try our show route.
`http://localhost:3000/posts/1`
We have an error here, what is it trying to tell us?
Its pointing out that we don't have a show action in our controller. Lets head there and fix that.

```
"#<AbstractController::ActionNotFound: The action 'show' could not be found for PostsController\nDid you mean?  index>"
```

We can add our show in...but how will we grab the id. 
Now is a great time to throw in a byebug and see.
Our id is going to come from the pram hash.
```
    def show
        byebug
    end

  # in terminal 
  params 
  #<ActionController::Parameters {"controller"=>"posts", "action"=>"show", "id"=>"1"} permitted: false>

    def show
        post = Post.find(params[:id])
    end

```

Now that we know how to get an id, lets talk about how to get params from our body.

```
  def create
      byebug
  end

# in postman
{
    "user_id":1,
    "title": "Plants the forbidden treat",
    "content": "House plants can be dangerous for cats, even if they are not poisonous they can cause GI issues and induce vomiting. Despite that, I feel it is every cats right to eat their owners house plants. My owner prevents me from enjoying this forbidden fruit. RUDE! "
}

# in terminal 
  params 

 #<ActionController::Parameters {"user_id"=>1, "title"=>"Plants the forbidden treat", "content"=>"House plants can be dangerous for cats, even if they are not poisonous they can cause GI issues and induce vomiting. Despite that, I feel it is every cats right to eat their owners house plants. My owner prevents me from enjoying this forbidden fruit. RUDE! ", "controller"=>"posts", "action"=>"create", "post"=>{"user_id"=>1, "title"=>"Plants the forbidden treat", "content"=>"House plants can be dangerous for cats, even if they are not poisonous they can cause GI issues and induce vomiting. Despite that, I feel it is every cats right to eat their owners house plants. My owner prevents me from enjoying this forbidden fruit. RUDE! "}} permitted: false>

   def create
        post = Post.create(user_id:params[:user_id], title:params[:title], content:params[:content])
        render json:post
    end
```
### Check for Understanding index and show
1. Add the index and show route to your dog walking app.
2. Create a controller and add the actions for index and show.
3. run your rails server and test the routes using your browser or postman.

## Segment 3: Update and Delete actions

Lets finish up with adding the update and delete actions. Students should have a general idea of how this works now so let them guide you through the last two actions. Encourage testing and debugging along the way.

```
    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json:post
    end 

    def destroy
        post = Post.find(params[:id])
        post.delete
        render json: {message: 'post removed'}
    end 

```