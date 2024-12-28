import { useRoutes } from 'react-router';

import Page1 from '@/page/page1.tsx';

import Page2 from '@/page/page2/index.tsx';
import Page2view1 from '@/page/page2/view/page2-view1';
import Page2view2 from '@/page/page2/view/page2-view2';

export default function Router() {
	return useRoutes([
		{ path: '/Dashboard', element: <Page1 /> },
		{
			path: '/Page2',
			element: <Page2 />,
			children: [
				{ path: '/view1', element: <Page2view1 /> },
				{ path: '/view2', element: <Page2view2 /> }
			]
		}
	]);
}
