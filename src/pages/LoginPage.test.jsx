import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import customRender from '../mocks/ultils';
import LoginPage from './LoginPage';

const mock = new MockAdapter(axios);

describe('Login page component tests:', () => {
	beforeEach(async () => {
		customRender(<LoginPage />, { providerProps: null });
		await userEvent.clear(screen.queryByTestId('email'));
		await userEvent.clear(screen.queryByTestId('password'));
		mock.reset();
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
	it('should send correct payload', async () => {
		const mockUsedNavigate = jest.fn();
		jest.mock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
			useNavigate: () => mockUsedNavigate,
		}));
		mock.onPost('/login').reply(200);
		await userEvent.type(screen.queryByTestId('email'), '1@test.com');
		await userEvent.type(screen.queryByTestId('password'), '1@test.com');
		await userEvent.click(screen.queryByTestId('submit'));
		expect(mock.history.post[0].data).toBe(
			JSON.stringify({ email: '1@test.com', password: '1@test.com' })
		);
		expect(mockUsedNavigate).toHaveBeenCalledWith('/123');
	});
});
