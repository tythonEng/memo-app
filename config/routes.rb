Rails.application.routes.draw do
  root 'memos#index'
  resources :memos, only: [:create, :destroy]
  # post 'memos' => 'memos#create'
  # delete 'memos/:id' => 'memos#destroy'
end
