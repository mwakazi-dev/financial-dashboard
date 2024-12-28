import React from 'react';

import CardLoading from '../components/CardLoading';

const withLoading = (WrappedComponent: React.ComponentType<any>) => {
  return ({
    isLoading,
    ...props
  }: {
    isLoading: boolean;
    [key: string]: any;
  }) => {
    if (isLoading) {
      return <CardLoading />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
