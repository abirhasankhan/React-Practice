# React Practice Project

This project showcases my journey of learning React by building a basic counter app, exploring Tailwind CSS, creating custom React applications, and developing interactive projects like a background change app, a password generator app, a currency converter app using custom hooks, a React Router app, a React Context app, a Todo App with Context and local storage, a Redux Toolkit Todo App, and a Theme Switcher app. I used **Vite** as the build tool to enhance performance and streamline the development process.

## Features

- **Basic Counter App**: A simple app where users can increment, decrement, and reset a counter. This project helped me understand React fundamentals, including state management and event handling.

- **Tailwind CSS**: Integrated Tailwind CSS for fast, responsive UI design.

- **Custom React App**: Created a more advanced React app to practice concepts like component reusability, props, hooks, and state management.

- **Background Change App**: An interactive app that allows users to change the background color dynamically by clicking on different color buttons, reinforcing state management and event handling in React.

- **Password Generator App**: A useful tool that generates strong, random passwords based on user preferences (length, inclusion of special characters, numbers, etc.). This app highlights how React can handle form inputs and dynamically update content based on user interaction.

- **Currency Converter App**: Built a currency converter app using a custom React hook to manage currency conversions. This project helped me understand how custom hooks work and how they can be used to encapsulate reusable logic for state and side effects.

- **React Router App**: Developed an app using **React Router** to practice client-side routing and navigation between different pages or views without reloading the page. This helped me understand how to implement dynamic routing, nested routes, and create a multi-page user experience in a single-page React application.

- **React Context App**: Implemented a React Context app to learn how to manage global state across multiple components. This project helped me understand how to use the `useContext` and `useReducer` hooks to create a more scalable state management solution for applications with multiple components that need to share data.

- **Todo App with Context and Local Storage**: Built a Todo app that uses React Context for managing global state and local storage for persisting tasks. This project helped me practice building a scalable to-do list that retains tasks even after a page reload.

- **Redux Toolkit Todo App**: Developed a Todo app using **Redux Toolkit** to manage state globally, practice efficient state handling, and simplify the development process. This app showcases how to implement Redux for more complex state management and action dispatching.

- **Theme Switcher App**: Created a Theme Switcher app to allow users to toggle between light and dark modes. This project helped me understand how to manage state for theming purposes and how to dynamically apply styles based on the current theme, improving the user experience by offering customization options.

## Tech Stack

- **React.js**: Core framework for building dynamic and interactive UIs.
- **Vite**: Used for faster builds and a smoother development experience.
- **Tailwind CSS**: Used for fast, responsive styling.
- **React Router**: Implemented for client-side routing and navigation.
- **React Context**: Used for global state management across multiple components.
- **Redux Toolkit**: Utilized for managing global state more efficiently in larger applications.
- **Local Storage**: Integrated for data persistence in the Todo app.

## Getting Started

To run the project locally with Vite, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd react-practice-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server using Vite:
   ```bash
   npm run dev
   ```

## Lessons Learned

- Understanding React's component structure and managing state with hooks like `useState`, `useEffect`, `useCallback`, `useId`, and `useContext`.
- Styling efficiently with Tailwind CSS.
- Using **Vite** for faster builds and a smoother development experience.
- Building reusable and maintainable React components.
- Implementing state-based background color changes to enhance UI interactivity.
- Creating a dynamic password generator with form input handling and state updates.
- Learning to build and use **custom hooks** for reusable functionality, like managing state and effects in the currency converter app.
- Gaining hands-on experience with **React Router** to implement routing in single-page applications, including dynamic and nested routes.
- Understanding and implementing **React Context** for global state management across multiple components, making it easier to manage complex data flows in larger applications.
- Building a **Todo App** with **Context and Local Storage** to practice global state management and persistent data storage.
- Building a **Redux Toolkit Todo App** to explore more complex state management patterns and see how Redux simplifies global state handling in larger apps.
- Building a **Theme Switcher App** that provides light/dark mode toggle functionality, enhancing user experience with customizable UI themes.
- **Learning Redux Toolkit** to handle more complex state management efficiently in larger applications and how it simplifies the state management process compared to traditional Redux.

---

# For dark mode remember to change config in tailwind
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
```

