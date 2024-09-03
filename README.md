# React + Vite

# TanStack React Router						   
						   
npm create vite@latest
napisati ime projekta
odabrati tehnologiju, npr React
odabrati sa kojim jezikom, npr JavaScript

otvoriti sa npr vs codom:
komanda: code ./ime-projekta

komande:
cd vite-project
npm install
npm run dev

posto je podrazumevani port za Vite 5173 to mozemo da promenimo u koji hocemo
otvorimo vite.config.js i u njemu pise:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

da bi smo izmenuli port pisemo:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});


za podrsku svg fajlova (slika) instaliramo:
npm i -D vite-plugin-svgr 
zatim u vite.config.js dodajemo:
import svgr from "vite-plugin-svgr";

export default {
  // ...
  plugins: [svgr()],
};

Ako hocemo da imamo ENV file u root folderu kreiramo:
.env file i u njemu upisujemo redovno varijable: VITE_API_URL=http://localhost:3000 itd...

u komponenti gde pozivamo ovaj podatak pisemo: <div>{import.meta.env.VITE_API_URL}</div>

Da bi instalirali SASS u konzoli pisemo:
npm i -D sass
zatim u src folderu kreiramo folder scss i u njemu main.scss file
u komponenti uvezemo sa import './scss/main.scss';

na kraju za produkciju kucamo komandu:
npm run build

Dobijamo dist  folder za hostovanje

da bi pregledali bas taj dist file u komandi pisemo:
npm run preview  tada nam pokazuje bas reprodukciju kad da je hostovano.

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






