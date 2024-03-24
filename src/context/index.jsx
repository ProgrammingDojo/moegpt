import { AuthProvider } from './auth';
import { ChatProvider } from './chat';
import PropTypes from 'prop-types';

const ContextProvider = ({ children }) => {
	return (
		<AuthProvider>
			<ChatProvider>{children}</ChatProvider>
		</AuthProvider>
	);
};

export default ContextProvider;

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
