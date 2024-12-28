# Financial Dashboard - React js, Typescript, Tailwind

## Project Overview

This project is a financial dashboard built with React js, Typescript, Tailwind. It provides users with a comprehensive view of their financial activities, card details, transactions, statistics, and user settings.

## Setup Instructions

1. Clone the repository:

` git clone [https://github.com/mwakazi-dev/financial-dashboard] cd [financial-dashboard]`

2. Install dependencies:
   `yarn install`
3. Start the local server:
   `json-server --watch db.json --port 8000`
4. Start the app:
   `yarn run start`
5. Run unit test:
   `yarn run test`
6. Run lint:
   `yarn run lint`

## Project Structure

- `src/__tests__/`: All Unit tests
- `src/pages/`: All pages
- `src/assets/`: Images and icons
- `src/components/`: Reusable React components
- `src/constants/`: For code clarity and consistency
- `lib/`: reusable functions and utilities
- `services/`: Services for API calls
- `styles/`: Handle all application styles
- `types/`: TypeScript type definitions
- `context/`: Context API for state management

## Key Features

- **Responsive Design**: Ensures a seamless experience across devices.
- **User-Friendly Interface**: Intuitive and easy-to-use interface.
- **Data Visualization**: Charts and graphs for better data understanding.
- **Interactive Elements**: Buttons and dropdowns for user interaction.
- **Form Validations**: Ensures data accuracy and user experience.
- **User Experience**: Focus on user experience and feedback.
- **Performance**: Optimized for speed and performance.
- **Accessibility**: Ensures accessibility for all users.
- **Browser Compatibility**: Supports modern browsers.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Typescript**: Adds static typing to JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Router**: For routing within the application.
- **React Query**: For data fetching and caching.
- **React Toast**: For displaying toast notifications.

## Design Patterns

- **Component-Based Architecture**: Reusable components for modularity.
- **Context API**: State management for efficient data flow.
- **React Query**: Efficient data fetching and caching.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Testing Library**: For unit testing React components.
- **Eslint and Prettier**: Ensures code quality and consistency.
- **Husky pre-commit hooks**: Enforces code quality and consistency.
- **Container and presentation pattern**: Enhances code reusability and maintainability.
- **The HOC(Higher Order Component)Pattern**: Enhances code reusability and maintainability.
- **Provider Pattern(Data management with Providers)**: manages data flow and state management.
- **Lazy loading**: Enhances performance and improves user experience.

## Approach and Rationale

1. **TypeScript**: Implemented for improved code quality and maintainability.

2. **Modular Component Structure**: Enhances reusability and maintainability.

3. **Eslint and Prettier**: Ensures consistent code style and readability

4. **Tailwind CSS**: For rapid UI development and responsiveness.

5. **Husky pre-commit hooks**: Enforces code quality and consistency

6. **Documentation**: Added comments and documentation to enhance code readability and collaboration.

## Future Improvements

- finish the implementation of the remaining section of the dashboard
- Improve responsiveness and performance
- Implement Storybook for component documentation, testing and team collaboration
- Refactor the codebase to follow best practices and improve code quality
- Improve testing coverage and add more unit tests
- Implement a CI/CD pipeline for automated testing and deployment
- Implement a user authentication system to allow users to log in and access their financial data
