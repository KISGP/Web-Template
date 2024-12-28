import { memo } from 'react';
import { Outlet } from 'react-router';

const index = memo(() => {
	return <Outlet />;
});

export default index;
