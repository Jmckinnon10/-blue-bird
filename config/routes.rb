Rails.application.routes.draw do
  resources :favorites, only: [:show, :create]
  resources :reviews, only: [:show, :create, :index]
  resources :trails, only: [:show, :index]
  resources :resorts, only: [:show, :index]
  resources :users, only: [:show, :index, :create]

  get "./users", to: "users#index"
  get "./resorts", to: "resorts#index"
  get "./trails", to: "trails#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
