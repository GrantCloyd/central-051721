Rails.application.routes.draw do
  resources :stores
  resources :items
  resources :orders
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
