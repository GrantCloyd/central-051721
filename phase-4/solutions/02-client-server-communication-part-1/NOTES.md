Lead students to create state for our items with useState and build a fetch request inside a useEffect. We will need state at this level because eventually both of our react routes will need access to it.

> Note: if students aren’t familiar with async and await, this is a good time to review it but a .then can be used in its place. 

> Note: add a byebug to the index action to further demonstrate how our fetch hits our route and triggers our action in our controller


```js
// front_end_store/src/App.js
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
```

```rb
# flatiron_store/app/controllers/items_controller

    def index
        byebug
        items = Items.all
        render json:items
    end
    
```


GET "/items" => "items#index" 
GET "/items/:id" => "items#show"
POST "/items" => "items#create"
PATCH/PUT "/items/:id" => "items#update"
DELETE "/items/:id" => "items#destroy"

What if we wanted to list all of the items in a particular store?

what would a RESTful route for that look like?

GET "/stores/:store_id/items" => "items#index"

If I'm managing a store and I want to mark an item as on sale, what would my restful route look like?

what would a RESTful route for that look like?

If we are just updating the price of an item, it would be:
- PATCH "items/:id" (Update)

If we had a sale model that could keep track of sales and when they start and end.
- POST "/sales" => "sales#create" (we would need to pass the item_id within the body)
- POST "/items/:item_id/sales" => "sales#create"