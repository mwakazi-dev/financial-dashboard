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
- `conteext/`: Context API for state management

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

## Approach and Rationale

1. **TypeScript**: Implemented for improved code quality and maintainability.

2. **Modular Component Structure**: Enhances reusability and maintainability.

3. **Eslint and Prettier**: Ensures consistent code style and readability

4. **Tailwind CSS**: For rapid UI development and responsiveness.

5. **Husky pre-commit hooks**: Enforces code quality and consistency

6. **Documentation**: Added comments and documentation to enhance code readability and collaboration.

## Future Improvements

- Implement Storybook for component documentation, testing and team collaboration
- Refactor the codebase to follow best practices and improve code quality
- Improve testing coverage
