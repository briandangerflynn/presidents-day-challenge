# frozen_string_literal: true

Rails.application.routes.draw do
  resources :presidents
  resources :team_members
  resources :teams
  resources :users
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
