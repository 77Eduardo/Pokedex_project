# Projeto Pokedex 
Desenvolvido com React + TypeScrip + vite + Axios + Tailwind

## Sobre

E um projeto que tem como objetivo consumir a Api pokemon https://pokeapi.co/ 
onde possui a landing page, pokedex onde irao aparecer os pokemons, os pokemons lendarios e 
a documentação

## Instalação

A istalacao do vite com react

npm create vite@latest my-vue-app -- --template react.ts

https://vitejs.dev/guide/

intalacao do axios
npm install axios 

istalacao do tailwaind css no vite

npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;

https://tailwindcss.com/docs/guides/vite

