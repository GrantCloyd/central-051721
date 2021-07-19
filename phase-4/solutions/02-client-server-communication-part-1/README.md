# Phase_4_Client_Server_Communication_1

## Objectives
- [ ] Explain the client-server relationship
- [ ] Build a CR REST Rails API with one to many and many to many relationships 
- [ ] Configure CORS
- [ ] Create server side validations using Active record
- [ ] Validate different data types i.e. string, numericality, boolean

## Outline

```txt
05 min pre-test or warmup
10 min REST 
10 min CORS
05 min Project set up
10 min GET data 
10 min render data 
10 min Check for Understanding 
25 min POST data
10 min Check for Understanding build a post
10 min render data
05 min Exit Ticket
120 min
```

## Part 1: Setup and Configuration

- CORS
- Puma server port
- db migrations

### CORS Configuration

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Cross Origin Resource Sharing) allows our rails server to permit http requests from specific domains.

When we host our applications we can configure our app to only take requests from our react front-end.

![CORS from mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

For now, we will accept all requests to make the development process easier as we are learning.  Navigate to config, initializers and cors.rb. 

Uncomment the following and set origins to '*'


```rb
# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

>*Note for later:* If we wanted to allow limited access from all origins, but only create update and delete access to a particular domain, we can actually call `allow` twice within this configuration to do so. We could allow get requests from everywhere, but restrict :post, :put, :patch, and :delete requests to a particular origin domain.

We will also need to uncomment rack-cors in our gemfile and re-bundle.

```rb
# gemfile
gem 'rack-cors'
```

### Puma server port

Because we're going to be running both a frontend and backend development server simultaneously, and the default port for both rails and react is 3000, things can get a bit tricky.

There are 2 possible scenarios here:

1. We run the `rails server` for the backend first and then do `npm start` for the frontend
2. We run the `npm start` first for the frontend and then do `rails server` for the backend

If you happen to be in the first scenario, React is nice enough to ask you if you'd like to run your app on another port (usually 3001) and then you have the servers running on 3000 for rails and 3001 for react and it works fine.

In the second scenario, however, rails will also boot up on port 3000 and it will take precedence over the react dev server. If you visit http://localhost:3000, you'll see something like this:

![Welcome to Rails](https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_6th_edition/images/figures/riding_rails.png)

To avoid this situation, we can switch the default port on the rails side so that we can run both servers without passing flags to specify a port and we don't accidentally get ourselves into scenario 2.  To do this, on the rails side we'll open up `config/puma.rb` and find the following lines:

```rb
# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port ENV.fetch("PORT") { 3000 }
```

And then update the port from 3000 to 3001:

```rb
port ENV.fetch("PORT") { 3001 }
```

> You can update the port number to whatever you like, I just picked 3001 because it's the next available port. Local dev server ports are usually above 1000, but the particular number is not important as long as the port is available. Make sure your frontend is making requests to the port you configure here.

### Migrations

Within rails, you can run migrations exactly the same way as you did previously. In this case, 

```bash
rake db:migrate
```

works exactly as it did with ActiveRecord before. But, in documentation, you'll often see something like this:

```bash
rails db:migrate
```

This works because, as of Rails 5, [the `rails` command will proxy any tasks that it doesn't natively support to `rake`](https://stackoverflow.com/questions/38403533/rails-dbmigrate-vs-rake-dbmigrate). The rails community has moved in this direction of executing rails related tasks via the `rails` command instead of using `rake` but `rake` will still work if you prefer.

For this codebase, we already have migrations and seeds provided, so we can pull them into our database by running:

```bash
rails db:migrate
rails db:seed
```

## Project Overview

**Project set up**
Here's a basic ERD and wireframe to get an idea of what this project will look like.
![wire](/assets/wire.png)

Let's start taking a look at the react application. In `index.js` review `BrowserRouter` and what it’s doing for our application.

In `App.js` review the switch and the current routes. 
```js
<Switch>
  <Route path="/items/new"> 
    <ItemForm items={items} setItems={setItems}/>
  </Route>
  <Route exact path="/">
    <ItemContainer items={items} setItems={setItems}/>
  </Route>
</Switch>
```

Compare and contrast our routes from rails and our routes from react. How are they similar and how do they differ? 

## Reviewing the Request Response Cycle

### What is the Server in this case?

...
### What is the client? 

...
### How will we get data from our backend to our frontend?
...
### Take a look at our routes and controller, what routes and actions are serving up JSON that is relevant to our application? 
...
### What hook will we need to invoke the request when our app component mounts? 
...

## Breakout to Discuss questions above for 7 minutes.

Please add your group's responses to [this document](https://hackmd.io/@dlm/phase4-lec2-client-server-communication-discussion)

### Help me build this out.

How do we set up our react application to consume data from our rails API?


### Check for Understanding 

Please take a moment on your own to consider the following questions and submit your answers to the form linked below. We'll be taking a short break after you complete this
- What route would fetch an individual item?
- What action would that route trigger in our controller?
- Write a fetch call that will retrieve a single item. (you can try it in the browser console before pasting here)

Please submit your answers to [this form](https://forms.gle/bwFpZcssiRzhogTFA).

## Segment 2: Create action and POST
It’s time to work with our form, it has been a while for students so it may be a good opportunity to review react form and data flow. Have students navigate you through building out a control form that renders a new item optimistically.

We are going to build a request using a POST.
Every request outside of our GET methods will require a second argument. An object with the key of method, headers and body.


The Method is the http verb HTTP, in this case we are making a POST.

The headers contain more information about our request, we can use it to send things like authentication tokens. We are going to use the header of Content-Type to indicate that the request we are sending contains JSON.

Lastly is our body. This is the data we are actually sending, but we can’t send a POJO, we will need to convert our object to JSON with the method JSON.stringify.

```
   async function handleSubmit(e){
        e.preventDefault()
        const itemData = {
        //We will hard code the store id for now
            store_id:1,
            item_name: itemName,
            description,
            image_url: image,
            price
        }
        const res = await fetch('http://localhost:3000/items',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        const json = await res.json()
        //Set items in state and redirect to home
        setItems([...items, json])
        history.push("/");
    }

```

If we hop into our rails app we can add a byebug to check out our params to confirm our route is being hit.

