import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';

import App from './App.tsx';

import './styles/index.css';


createRoot(document.getElementById('root')!).render(
	<NextUIProvider>
		<App />
	</NextUIProvider>
);