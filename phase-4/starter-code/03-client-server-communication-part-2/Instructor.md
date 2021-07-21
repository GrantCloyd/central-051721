# Phase_4_Client_Server_Communication_2

## Objectives
- [ ] Build a full CRUD REST Rails API
- [ ] Use dependent: :delete_all

## Outline

```txt
05 min pre-test or warmup
20 min review POST
30 min PATCH 
10 min break
15 min DELETE 
10 min Check for Understanding 
05 min Exit Ticket
120 min
```

## Segment 1: PATCH
**Review POST**
Start by reviewing POST requests by adding a buy option to our items. 
Buying an item should create an order and redirect the user to the specific orders page that renders the order information. 

Students will need to add the new route and appropriate actions, strong params. 

```rb
# config/routes.rb
  resources :orders, only: [:show, :create]

# app/controllers/orders_controller.rb
class OrdersController < ApplicationController
  # ...
  def show
    order = Order.find(params[:id])
    render json:{user:order.user, item:order.item}
  end

  def create
    order = Order.create(order_params)
    render json:order
  end

  private

  def order_params
    params.require(:order).permit(:item_id, :user_id)
  end

end

```


Before diving into patch, review the restful route and action for making a patch.
We will need to configure our front end to edit and update.  

>Note: We can do this by creating an edit form all together or configuring our form to work with CREATE and UPDATE using conditionals.  

Have students navigate you through this process as a light review.
Next we will need to create a PATCH request to the backend. 

Ask students to think about what an UPDATE action might need that a CREATE action wouldn't. 

```
    const res = await fetch(`http://localhost:3000/items/${item.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        const json = await res.json()

```


## Segment 2: DELETE
Now it's time to Delete an item. We will add a delete button to our Item card that will trigger a delete request. 

>Note: Make sure there are orders in the background that depend on the item we are deleting. We want the initial request to fail.

```
    async function deletePost(){
        const res = await fetch(`http://localhost:3000/items/${item.id}`,{
            method:"DELETE",
        })
        const json = await res.json()

        //Removes the item from state. 
        setItems(items.filter(oldItems => oldItems.id !== item.id))
    }

```

While there are orders depending on our item in the backend, our Delete will fail. Ask students how we might remove the dependent orders, before deleting the item.

`dependent: :destroy` should remove our dependent items for us. 

```
class Item < ApplicationRecord
  belongs_to :store
  has_many :orders
  has_many :users, through: :orders, dependent: :destroy

```

### Check for Understanding 
Have students build out DELETE functionality for our OrderCard component

