Rails.application.routes.draw do
  get  '/automata' => redirect('static_pages/automata')
  get  'static_pages/automata'
  get  'static_pages/help'
  get  'static_pages/pdf'
  get  'static_pages/nothing-poem'

  root 'static_pages#home'
end

