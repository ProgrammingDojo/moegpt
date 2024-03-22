import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import customRender from '../mocks/ultils';
import LoginPage from './LoginPage';

describe('Login page component tests:', () => {
	beforeEach(() => customRender(<LoginPage />, { providerProps: null }));
	it('should render login page', () => {
		expect(screen.getByTestId('login')).toBeInTheDocument();
	});
	it('should show error message after typing inappropriate email', async () => {
		await userEvent.type(screen.queryByTestId('email'), '123');
		expect(screen.getByText('Please input valid email address!')).toBeInTheDocument();
	});
});
