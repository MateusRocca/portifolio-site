import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

// Get or create the root element for React hydration
function getRootElement() {
  let root = document.getElementById('app')
  if (!root) {
    root = document.getElementById('root')
  }
  if (!root) {
    // If no explicit root element, create one as fallback
    root = document.createElement('div')
    root.id = 'app'
    document.body.appendChild(root)
  }
  return root
}

// Hydrate the client-side React application
const router = getRouter()
const rootElement = getRootElement()

ReactDOM.hydrateRoot(
  rootElement,
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
