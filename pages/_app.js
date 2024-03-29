import '../styles/globals.css';
import 'normalize.css';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
