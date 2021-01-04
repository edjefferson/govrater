Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get '/vote', to: 'pages#vote'
  get '/load_country', to: 'pages#load_country'
  get ':cc', to: 'pages#index', as: 'government'
end
