# Movie Project

This is a React-based movie project that allows users to search for movies, view popular movies, and mark movies as favorites. The project uses the Vite build tool and is deployed to GitHub Pages. It is integrated with the IMDb API and utilizes React concepts such as context and hooks.

## Features

- Search for movies
- View popular movies
- Mark movies as favorites
- Responsive design

## Technologies Used

- React
- Vite
- IMDb API
- Context API & Hooks
- GitHub Pages for deployment

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/gadisayusuf/movie-project.git
   ```

2. Navigate to the project directory:

   ```sh
   cd movie-project
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Project

To run the project locally, use the following command:

```sh
npm run dev
```

This will start the development server, and you can view the project in your browser at `http://localhost:5173/` (or the port specified by Vite).

### Building the Project

To build the project for production, use the following command:

```sh
npm run build
```

This will generate the production build files in the `dist` directory.

### Deploying to GitHub Pages

To deploy the project to GitHub Pages, use the following command:

```sh
npm run deploy
```

This will build the project and deploy the `dist` directory to the `gh-pages` branch of your repository.

## Project Structure

```
movie-project/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── node_modules/
├── public/
├── src/
│   ├── components/   # Reusable UI components
│   │   └── MovieCard.jsx
│   ├── css/          # Stylesheets
│   │   └── Home.css
│   ├── pages/        # Page components
│   │   └── Home.jsx
│   ├── services/     # API services
│   │   └── api.js
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Entry point
│   └── vite.config.js # Vite configuration
├── .gitignore        # Git ignore file
├── package.json      # Project dependencies and scripts
├── README.md         # Project documentation
└── vite.config.js    # Vite configuration
```

## API

The project uses the following API functions from the `services/api.js` file:

- `searchMovies(query)`: Searches for movies based on the provided query.
- `getPopularMovies()`: Retrieves a list of popular movies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
- [IMDb API](https://www.imdb.com/)

