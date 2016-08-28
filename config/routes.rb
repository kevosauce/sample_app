Rails.application.routes.draw do
  get  '/automata' => redirect('static_pages/automata')
  get  'static_pages/automata'
  get  'static_pages/help'

  root 'static_pages#home'
end

