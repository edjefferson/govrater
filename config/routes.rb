Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: redirect('/UK')
  get 'vote', to: 'pages#vote'
  get ':cc', to: 'pages#index', as: 'government'
end
