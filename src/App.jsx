import React from 'react';
import StarIcon from './assets/images/icon-star.svg';
import Collapse from './collapse';

function App() {
	const [isClick, setIsClick] = React.useState(true);

	return (
		<div>
			<div className="h-[28vh] w-screen bg-[url('./assets/images/background-pattern-desktop.svg')]"></div>
			<div onClick={() => setIsClick(!isClick)}  className={`bg-white p-10 max-w-[600px] m-auto -translate-y-[132px] rounded-2xl`}>
				<div className='flex items-center gap-4 pb-8'>
					<img src={StarIcon} alt='star-icon' />
					<h1 className='text-dark-purple desktop:text-title text-title-sm font-semibold'>
						FAQs
					</h1>
				</div>
				<Collapse>
					<Collapse.Item title="What is Frontend Mentor, and how will it help me?">
						Frontend Mentor offers realistic coding challenges
						to help developers improve their frontend coding
						skills with projects in HTML, CSS, and JavaScript.
						It’s suitable for all levels and ideal for portfolio
						building.
					</Collapse.Item>
					<Collapse.Item title="Is Frontend Mentor free?">
						Frontend Mentor offers realistic coding challenges
						to help developers improve their frontend coding
						skills with projects in HTML, CSS, and JavaScript.
					</Collapse.Item>
					<Collapse.Item title="Can I use Frontend Mentor projects in my portfolio?">
						Yes
					</Collapse.Item>
					<Collapse.Item title="How can I get help if I'm stuck on a challenge?">
						Frontend Mentor offers realistic coding challenges
						to help developers improve their frontend coding
						skills with projects in HTML, CSS, and JavaScript.
						It’s suitable for all levels and ideal for portfolio
						building.
					</Collapse.Item>
				</Collapse>
			</div>
		</div>
	);
}

export default App;
