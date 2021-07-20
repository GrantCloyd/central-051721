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
