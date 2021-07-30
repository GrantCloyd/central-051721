Rails.application.routes.draw do
  resources :items
  resources :orders, only: [:show, :create]
  resources :users, only: [:show]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
