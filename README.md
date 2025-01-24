# Pokemon Display

A simple website to display Pokemon data from API.

## Tech Stack

- **Programming Language**: TypeScript
- **JS Framework**: Next.js, React.js
- **CSS Framework**: Tailwind CSS
- **Data Fetching**: Axios, `useFetch` custom hook
- **State Management**: Zustand, Zustand Persist Middleware
- **Form Library**: React Hook Form

## Features

### 1. Login Page

Dummy login page using React Hook Form for form control and required field validation. Credentials stored in browser's local storage using Zustand Persist Middleware, so **always be careful inputing sensitive data**.

User can input any username and password to login into the web since it doesn't have any backend.

### 2. Pokemon Card List Page

Data fetched from PokeAPI using Axios and `useFetch` custom hook then rendered as card list on the home page. The list displays the pokemon name and its sprite.

### 3. Pokemon Detail Page

If user clicked on a pokemon in the home page (Card List), it will be redirected to the pokemon detail page. The data is fetched from PokeAPI using Axios and custom hook. It will show the pokemon name, type, abilities, stats, and all moves it could learn.
