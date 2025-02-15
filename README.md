# React Context & Reducer Demo

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://use-context-use-reducer-demo.vercel.app/)

A demonstration of React's `useContext` and `useReducer` hooks with TypeScript, featuring a theme switcher and counter application.


<img width="1728" alt="Screenshot 2025-02-15 at 21 45 32" src="https://github.com/user-attachments/assets/e624a3bb-02f9-4899-af88-4721d3b62a21" />
<img width="1728" alt="Screenshot 2025-02-15 at 21 45 20" src="https://github.com/user-attachments/assets/831b3cf9-af0f-4bca-8487-92974399abb3" />

## Live Demo

Test the deployed application:  
https://use-context-use-reducer-demo.vercel.app/

## Features

- Counter with increment/decrement/reset functionality
- Light/dark theme toggle
- Type-safe implementation with TypeScript
- Global state management using React Context API
- Vercel deployment with automatic CI/CD

## Installation

1. Clone the repository
```bash
git clone https://github.com/Ikromjon1998/useContext-useReducer-demo.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

## Usage

### Local Development
```bash
npm run dev
```
Open http://localhost:5173 in your browser

### Production Build
```bash
npm run build
npm run preview
```

### Deployment
The project is configured for automatic deployment to Vercel on git push:
```bash
git push origin main
```

## Code Structure

```
/src
├── contexts
│   └── AppContext.tsx    # Context provider and types
│   └── AppProvider.tsx   # Context provider component
│   └── appReducer.ts     # Reducer function
├── components
│   ├── Counter.tsx       # Counter component
│   └── ThemeSwitcher.tsx # Theme toggle component
├── App.tsx               # Main application component
└── main.tsx              # Entry point
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Vercel Hosting
- React Hooks (`useContext`, `useReducer`)

## Learning Resources

This project demonstrates:
- How to create and consume React Context
- Managing complex state with useReducer
- Type-safe context implementation
- Global state management patterns
- Component composition with Context API

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/) *(Include your license file if needed)*

---

**Created with ❤️ by Ikromjon1998**  
*Educational purpose project - React hooks demonstration*
