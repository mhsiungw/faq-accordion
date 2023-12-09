import { Children, cloneElement, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CollpaseItem from './item';

const propTypes = {
	children: PropTypes.node,
	defaultKey: PropTypes.number,
};

const Collpase = ({ defaultKey, children }) => {
	const [openKey, setOpenKey] = useState(null);
	const _handleOpen = useCallback(key => setOpenKey(key), [setOpenKey])
	const _handleClose = useCallback(() => setOpenKey(null), [setOpenKey])


	return (
		<div className='divide-y divide-[#F8EEFF]'>
			{Children.map(children, (child, index) => {
				return cloneElement(child, {
					index,
					isActive:  openKey === index || child.key === defaultKey,
					onOpen: _handleOpen,
					onClose: _handleClose,
				})
			})}
		</div>
	);
};

Collpase.Item = CollpaseItem

Collpase.propTypes = propTypes;

export default Collpase;