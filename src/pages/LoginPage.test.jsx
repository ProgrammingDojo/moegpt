import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import customRender from '../mocks/ultils';
import LoginPage from './LoginPage';

describe('Login page component tests:', () => {
	it(' pops error when no info is typed', () => {
		customRender(<LoginPage />, { providerProps: null });
		expect(screen.getByTestId('login')).toBeInTheDocument();
	});
});
