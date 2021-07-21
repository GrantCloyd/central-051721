Rails.application.routes.draw do
  resources :orders, only: [:show, :create]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :stores
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
