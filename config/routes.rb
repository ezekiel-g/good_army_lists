Rails.application.routes.draw do
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	root 'pages#index'

  	namespace :api do
		namespace :v1 do
			resources :users, only: [:index, :show, :destroy]
			resources :armies, only: [:index, :show]
			resources :units, only: [:index, :show]
			resources :artefacts, only: [:index, :show]
			resources :unit_options, only: [:index, :show]
		end
	end
end
