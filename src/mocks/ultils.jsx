import ContextProvider from '../context';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const customRender = (ui, { ...renderOptions }) => {
	return render(
		<ContextProvider>
			<BrowserRouter>{ui}</BrowserRouter>
		</ContextProvider>,
		renderOptions
	);
};

export default customRender;
