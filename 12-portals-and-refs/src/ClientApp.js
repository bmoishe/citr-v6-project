import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

// Other stuff that should only happen in the browser e.g. analytics

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

