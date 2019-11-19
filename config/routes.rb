Rails.application.routes.draw do
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	root 'pages#index'

  	namespace :api do
		namespace :v1 do
			resources :users, only: [:index, :show, :destroy]
			resources :armies
			resources :units
			resources :artefacts
			resources :unit_options
		end
	end
end
