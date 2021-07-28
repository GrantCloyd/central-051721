Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]
  resources :stores
  resources :orders, only: [:show, :create]
  resources :log_in, only: [:create]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
