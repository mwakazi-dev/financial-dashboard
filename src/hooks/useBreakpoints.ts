import { useMediaQuery } from 'react-responsive';

const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isDesktop = useMediaQuery({ query: '(max-width: 1024px)' });

  return {
    isMobile,
    isDesktop,
  };
};

export default useBreakpoints;
