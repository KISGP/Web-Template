import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { NextUIProvider } from '@nextui-org/react';

import App from './App.tsx';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
	<NextUIProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</NextUIProvider>
);
