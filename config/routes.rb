Rails.application.routes.draw do
  get 'chat-space-proto' => 'messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
