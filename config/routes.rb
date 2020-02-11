# frozen_string_literal: true

Rails.application.routes.draw do
  post '/user_token', to: 'user_token#create'
  get '/users/verify', to: 'users#verify'
  resources :users
  
  get '/presidents/:id', to: 'presidents#show'
  put '/teams/:team_id/presidents/:id/defeat', to: 'team_presidents#defeat'
  put '/teams/:team_id/presidents/:id/revive', to: 'team_presidents#revive'
  put '/teams/join', to: 'teams#join'
  get '/teams/:team_id/leave', to: 'teams#leave'
  resources :teams
  
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
