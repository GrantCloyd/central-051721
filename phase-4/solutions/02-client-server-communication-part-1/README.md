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

## Segment 1: Read action and GET 
**Migrate and Seed**
**Cross-Origin Resource Sharing (CORS)**
CORS allows our rails server to permit http request from specific domains.

When we host our applications we can configure our app to only take requests from our react front-end.

![CORS from mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

For now, we will accept all request to make the development process easier as we are learning. Navigate to config, initializers and cors.rb. 

Uncomment the following and set origins to '*'


```
//cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

```
We will also need to uncomment rack-cors in our gemfile and re-bundle.

```
//gemfile
gem 'rack-cors'

```

**Project set up**
Show students a wireframe and domain model of our store application so they have an idea of the project goal.
![wire](/assets/wire.png)



Walk through your react application. In index.js review BrowserRouter and what it’s doing for our application.

In App review the switch and the current routes. 
```
      <Switch>
        <Route path="/items/new" component={() =><ItemForm items={items} setItems={setItems}/>} />
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems}/>
        </Route>
      </Switch>
  
```

Compare and contrast our routes from rails and our routes from react. How are they similar and how do they differ? 

**GET**
It’s important to take a moment and review the request response cycle. 
What is the Server in this case?
What is the client? 
How will we get data from our backend to our front end?
Take a look at our routes and controller, what routes and actions are serving up JSON? 
What hook will we need to invoke the request when our app component mounts? 

Lead students to create state for our items with useState and build a fetch request inside a useEffect. We will need stat at this level because eventually both of our react routes will need access to it.

> Note: if students aren’t familiar with async and await, this is a good time to review it but a .then can be used in its place. 

> Note: add a byebug to the index action to further demonstrate how our fetch hits our route and triggers our action in our controller

```
//App.js
  useEffect(() => {
    async function fetchItems(){
      let res = await fetch(API_PATH)
      let json = await res.json()
      console.log('wat')
      console.log(json)
      setItems(json)
    }
    fetchItems();
  },[]);


//Post controller

    def index
        byebug
        items = Items.all
        render json:items
    end
    
```


Now that we have our data, how do we get it to our ItemContainer and on to our ItemCard

Students should be familiar with container and presentational components so let them navigate you through this portion as a review. 


### Check for Understanding 
- What route would fetch a item post?
- What action would that route trigger in our controller?
- Write a fetch call that will retrieve a single item. 

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

