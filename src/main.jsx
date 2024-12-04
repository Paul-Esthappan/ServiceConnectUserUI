/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID


// This should be set here


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<GoogleOAuthProvider clientId={clientId}>
					<App />
				</GoogleOAuthProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
