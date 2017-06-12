Rails.application.routes.draw do
  get  '/automata' => redirect('static_pages/automata')
  get  'static_pages/automata'
  get  'static_pages/help'
  get  'static_pages/functional_prog'
  get  'static_pages/nothing-poem'
  get  'static_pages/thesis'
  get  'static_pages/proton'

  root 'static_pages#home'
end

