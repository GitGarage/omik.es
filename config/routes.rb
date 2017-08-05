Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  get 'characters' => 'application#characters'
  get 'combine' => 'application#combine'
  get 'coordinates' => 'application#coordinates'
  get 'draw' => 'application#draw'
  get 'editor' => 'application#editor'
end
