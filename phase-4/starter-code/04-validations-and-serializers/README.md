# Validations and Serializers

## Objectives
- [ ] Explain what validations do
- [ ] Use built in rails validations
- [ ] Build custom rails validations 
- [ ] Validate different data types i.e. string, numericality, boolean
- [ ] Use active_model_serializers to format our response data


## Segment 1: Validations
**Why Use Validations?**
- This is your typical user:
  ![Your users on your site](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)

We want to make sure our app is being used the right way:

Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.

- We want to protect against unwanted, unexpected data. We should be programming defensively

- For example, would it make sense for our app to allow a bagel with an empty name to be created?

- ActiveRecord provides us _several_ built in validations and I **highly recommend reading the docs** [Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)

### DEMO
Lets add some validations to our item model!

Our first validation will be used to check for the presence of a specific attribute. 



```rb
validates :item_name, presence: true
validates :image_url, presence: true
```

There are other types of validations like numericality and length.
#### What validations could we add to the price and description?



To test validations, we can open up a console and try to create a new Item:

```rb
item = Item.new
item.valid?
```

If we get `false`, then we can check `item.errors`

> **IMPORTANT NOTE:** validations will attach error messages to an object if it fails validation. We can render a json response including these errors from our controller and display them within our react application

```rb
item.errors
=> #<ActiveModel::Errors:0x00007fc389ba46c8 @base=#<Item id: nil, item_name: nil, description: nil, image_url: nil, price: nil, store_id: nil, created_at: nil, updated_at: nil>, @errors=[#<ActiveModel::Error attribute=store, type=blank, options={:message=>:required}>, #<ActiveModel::Error attribute=item_name, type=blank, options={}>, #<ActiveModel::Error attribute=price, type=blank, options={}>, #<ActiveModel::Error attribute=price, type=not_a_number, options={:value=>nil}>]> 
```

We can choose to interact with these ActiveModel errors in multiple ways. If we wanted, we could convert them to an array of messages:

```rb
item.errors.full_messages
```

If we wanted to convert that to a sentence, we could also invoke `to_sentence`

```rb
item.errors.full_messages.to_sentence
```

If we wanted to attach error messages in a form to individual form fields, we can also just render the `item.errors` as json:

```rb
item.errors.to_json
 => "{\"store\":[\"must exist\"],\"item_name\":[\"can't be blank\"],\"price\":[\"can't be blank\",\"is not a number\"]}" 
JSON.parse(item.errors.to_json)
 => {"store"=>["must exist"], "item_name"=>["can't be blank"], "price"=>["can't be blank", "is not a number"]} 
```

To make sure our validations are useful to our frontend, we will need to hop over to our `ItemsController`. 
calling `.valid` on our instance will return a boolean based on whether our validations have all passed. If our create passed our validations, we can pass the item on to the front end. Otherwise we can send an error message. `.errors` will hold the error message related with the failed validation(s).

```rb
    item = Item.create(item_params)
    if item.valid?
        render json:item
    else 
        render json: {errors: item.errors, message: item.errors.full_messages.to_sentence}, status: 422
    end 

```

With our validations done, on the front end, we can check our response for errors and save them to state. If our response is not ok, set the errors to state. else continue the redirect as normal. 

We can use conditional rendering to display our errors to the user under the form. We don't want to redirect the user to another component if the validation fails so be sure to re-render the form specifically. 

```js
const [errors, setErrors] = useState(false)

        
if(res.ok){
  const item = await res.json()
  setItem([...items, item)
  history.push("/");
} else {
  const error = await res.json()
  setErrors(error.message)
}


//In render 
 <Errors>{errors}</Errors>

```
### Tasks 
In breakout rooms, practice adding validations to your `Item` form (new and edit) and displaying them to the user. Use the [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html) rails guides for reference. If you finish early, start thinking about what validations you could add to the other models.

## Segment 2: Custom Validations 
Sometimes we need to validate something outside of the scope of the built in validators. For example, we might want to limit the number of orders a customer can make of a particular item. For that, we will have to build our own validation method and call it with validate.  


```rb
  validate :three_per_customer
  
  def three_per_customer
    # how can we make sure the same customer doesn't place an order for the same item more than 3 times
  end


```


## Segment 3: Serializers
Serialization will help us format our JSON for our responses
We will be using the active model serializers gem.

```bash
bundle add active_model_serializers
```

If we do rails g we will now notice a new generator 
`serializer`. 

```bash
rails g serializer items
```

This will create a new serializers folder with an item_serializer.rb
We can now add attributes to our serializer to control what's sent in the responses. Here we can remove the created_at attribute and add the full store object to the response.

```rb
class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :price, :image_url, :store
  has_one :store
end

```

### Final Task
Have students build out the Serializer for Order. The response should contain the full user and item object. 