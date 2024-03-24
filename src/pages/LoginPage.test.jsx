import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import customRender from '../mocks/ultils';
import LoginPage from './LoginPage';

describe('Login page component tests:', () => {
	beforeEach(async () => {
		customRender(<LoginPage />, { providerProps: null });
		await userEvent.clear(screen.queryByTestId('email'));
		await userEvent.clear(screen.queryByTestId('password'));
	});
	it('should render login page', () => {
		expect(screen.getByTestId('login')).toBeInTheDocument();
	});
	it('should show error message after typing inappropriate email', async () => {
		await userEvent.type(screen.queryByTestId('email'), '123');
		expect(screen.getByText('Please input valid email address!')).toBeInTheDocument();
	});
	it('should show error message after typing inappropriate password', async () => {
		await userEvent.type(screen.queryByTestId('password'), '123456');
		expect(
			screen.getByText('Password must contain at least 8 characters, 1 letter and 1 number!')
		).toBeInTheDocument();
	});
});
