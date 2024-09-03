# React + Vite

# TanStack React Router						   

**************************** ТанСтацк Роутер ****************************

* Instaliramo Vite: npm create vite@latest
* Upisujemo ime projekta
* Biramo React
* Biramo JavaScript
* odlazimo u napravljeno direktorijum: cd .\ime-projekta
* Otvaramo sa VS kodom: code .
* Instaliramo dependensi: npm install
* Instaliramo router: npm i @tanstack/react-router
* Instaliramo dodatke za router: npm i -D @tanstack/router-plugin @tanstack/router-devtools
* U vite.config.js dodajemo:

// vite.config.ts
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
})

* Prepravljamo main.jsx:

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Render the app
const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

* u src folderu kreiramo folder : routes
* Zatim u njemu kreiramo novi file __root.jsx
* Takodje kreiramo file index.jsx koja ce biti Home page






