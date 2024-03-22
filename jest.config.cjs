module.exports = {
	testEnvironment: 'jsdom',
	verbose: true,
	collectCoverage: true,
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],
};
