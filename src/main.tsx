import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {Chessboard, UserForm} from 'components';

import 'style/index.css';

const container = document.createElement('root');
document.body.appendChild(container);

createRoot(container).render(
	<StrictMode>
		<div className='flex h-screen w-screen'>
			<Chessboard/>
			<UserForm/>
		</div>
	</StrictMode>
);
