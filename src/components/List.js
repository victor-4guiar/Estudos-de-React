import Item from './Item';
import PropTypes from 'prop-types';

function List(){
	return(
		<>
			<h1>Mi diario</h1>
			<ul>
				<Item mark="ferrari" lanz={1999} />
				<Item mark="feat" lanz={2000} />
				<Item mark="jijijij" lanz={2902} />
			</ul>
		</>
	);
};

Item.propTypes = {
	mark: PropTypes.string.isRequired,
	lanz: PropTypes.number.isRequired,
}

Item.defaultProps = {
	mark: 'No puedo encontrar el nombre de marka :(',
	lanz: 0,
}

export default List