Rails.application.routes.draw do
<<<<<<< Updated upstream
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
=======
  devise_for :users
  root "messages#index"
end
>>>>>>> Stashed changes
