# Portfolio Template

This repository provides a template for creating a modern, responsive portfolio website built with **Vite** and **React**. It includes pre-configured tools and libraries to help you quickly set up and deploy your portfolio.
You can check the demo at [Sarthak Raut](https://sarthak-raut.github.io)

## Features

- **Vite**: Fast build and development server.
- **React**: Component-based UI for a dynamic portfolio.
- **Tailwind CSS**: Utility-first CSS framework with custom typography.
- **React Router**: For seamless navigation.
- **Framer Motion**: Smooth animations and transitions.
- **Markdown Support**: Write content using `react-markdown` with `rehype-slug` and `rehype-toc`.
- **ESLint**: Code linting for cleaner and more maintainable code.
- **GitHub Pages**: Pre-configured for easy deployment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sarthak-Raut/Sarthak-Raut.github.io
   cd portfolio-template
   ```
   
2. Install dependencies:
  ```bash
  npm install
  ```

### Development
To start the development server, run:
  ```bash
  npm run dev
  ```
This will start a local development server. The website will be available at http://localhost:5173.

### Build and Deployment
1. To build the project for production:
  ```bash
  npm run build
  ```

2. Deploy to GitHub Pages:
  ```
  npm run build
  npm run deploy
  ```

Make sure to update the `homepage` field in `package.json` with your GitHub Pages URL.

### Additional Scripts
- **Linting**: Run npm run lint to check your code for issues.
- **Preview**: Use npm run preview to locally preview the production build.
- **404 Handling**: Automatically copies index.html to 404.html for proper routing on GitHub Pages.


## Customization

- Update content in the React components to reflect your personal or professional details.
- Modify Tailwind CSS configuration to match your design preferences.
- Customize animations using Framer Motion for a unique user experience.

## Dependencies Overview

### Key Dependencies
- `@tailwindcss/typography`: For beautiful typography styles.
- `framer-motion`: For animations and transitions.
- `react-markdown`: Render markdown content in your portfolio.
- `react-router-dom`: For navigation.
- `gh-pages`: Simplifies GitHub Pages deployment.

### Development Dependencies
- `eslint`: For linting JavaScript and React code.
- `vite`: For fast builds and hot module replacement.
- `tailwindcss`: For utility-first styling.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or suggestions. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding! 🎉
