Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create]
    resources :videos, only: [:index, :show]
    resource :session, only: [:destroy, :create]
    resources :lists, only: [:index, :create, :destroy, :update]

  end
end
