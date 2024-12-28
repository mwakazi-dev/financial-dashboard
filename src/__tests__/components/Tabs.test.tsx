import { render, screen } from '@testing-library/react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../components/Tabs';

describe('Tabs Component', () => {
  test('renders tabs with correct default styles', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    const tabsList = screen.getByRole('tablist');
    expect(tabsList).toHaveClass(
      'flex',
      'flex-nowrap',
      'border-b',
      'border-input',
    );
  });

  test('applies custom className to TabsList', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList className="custom-class">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
      </Tabs>,
    );

    const tabsList = screen.getByRole('tablist');
    expect(tabsList).toHaveClass('custom-class');
  });

  test('applies desktop styles to TabsTrigger', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
      </Tabs>,
    );

    const trigger = screen.getByRole('tab');
    expect(trigger).toHaveClass('desktop:min-w-[114px]', 'desktop:text-[16px]');
  });
});
