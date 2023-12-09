import { memo, useRef } from 'react';
import PropTypes from 'prop-types';
import MinusIcon from '../assets/images/icon-minus.svg';
import PlusIcon from '../assets/images/icon-plus.svg';

const propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	index: PropTypes.string,
	isActive: PropTypes.bool,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
};

const CollapseItem = ({ title, children, index, isActive, onOpen, onClose }) => {
	const pRef = useRef(null);

	return (
		<div className='py-4 first:pt-0 last:pb-0'>
			<div className='flex items-center justify-between mb-6'>
				<span className='text-lg'>{title}</span>
				{
					isActive ?
					<img src={MinusIcon} onClick={onClose} alt='shrink-content-icon' /> :
					<img src={PlusIcon}  onClick={() => onOpen(index)} alt='grow-content-icon' />
				}
			</div>
			<div style={{ height: isActive ? `${pRef.current.offsetHeight}px`: 0 }} className={`transition-[height] duration-500 ease-in overflow-hidden`}>
				<p ref={pRef} className='text-[#8B6990]'>{children}</p>
			</div>
		</div>
	);
};

CollapseItem.propTypes = propTypes;

const MemoCollapseItem = memo(CollapseItem);

export default MemoCollapseItem;
