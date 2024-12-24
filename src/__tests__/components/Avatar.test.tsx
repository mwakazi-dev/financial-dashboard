import { render } from '@testing-library/react';

import { Avatar, AvatarFallback } from '../../components/Avatar';

describe('Avatar Components', () => {
  test('renders Avatar with custom className', () => {
    render(<Avatar className="custom-class" />);
    const avatar = document.querySelector('.custom-class');
    expect(avatar).toBeInTheDocument();
  });

  test('renders AvatarFallback with correct default classes', () => {
    render(
      <Avatar>
        <AvatarFallback>TB</AvatarFallback>
      </Avatar>,
    );
    const fallback = document.querySelector(
      '[class*="flex h-full w-full items-center justify-center"]',
    );
    expect(fallback).toBeInTheDocument();
  });

  test('renders AvatarFallback with custom className', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback">TB</AvatarFallback>
      </Avatar>,
    );
    const fallback = document.querySelector('.custom-fallback');
    expect(fallback).toBeInTheDocument();
  });
});
