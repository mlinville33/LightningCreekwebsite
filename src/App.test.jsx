import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import ServicesPage from './pages/ServicesPage';

test('renders site header with Lightning Creek branding', () => {
  render(<App />);
  const heading = screen.getByText('Lightning Creek');
  expect(heading).toBeInTheDocument();
});

test('renders the carousel region', () => {
  render(<App />);
  const carousel = screen.getByRole('region', { name: /carousel/i });
  expect(carousel).toBeInTheDocument();
});

test('renders header nav with Services link', () => {
  render(<App />);
  const nav = screen.getByRole('banner').querySelector('nav');
  const servicesLink = nav.querySelector('a[href="/services"]');
  expect(servicesLink).toBeTruthy();
  expect(servicesLink.textContent).toBe('Services');
});

test('services page renders hero and three service cards', () => {
  render(
    <MemoryRouter>
      <ServicesPage />
    </MemoryRouter>
  );
  expect(screen.getByText('Our Services')).toBeInTheDocument();
  expect(screen.getByText('Custom Software Solutions')).toBeInTheDocument();
  expect(screen.getByText('Website Creation')).toBeInTheDocument();
  expect(screen.getByText('AWS Resource Management')).toBeInTheDocument();

  const buttons = screen.getAllByRole('button', { name: /get in touch/i });
  expect(buttons).toHaveLength(3);
});
