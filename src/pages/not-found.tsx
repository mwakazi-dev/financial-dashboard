import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const NotFound: FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray">404 - Page Not Found</h1>
    <p className="text-gray-500 mt-2">
      The page you are looking for does not exist or is not yet implemented.
    </p>
    <Link to="/" className="mt-4  bg-blue-500 text-white rounded ">
      <Button variant="link">Go Back to Dashboard</Button>
    </Link>
  </div>
);

export default NotFound;
