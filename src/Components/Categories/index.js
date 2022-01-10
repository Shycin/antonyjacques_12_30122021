import PropTypes from 'prop-types'
import './index.scss'

/**
 * Categories card
 * @module Component
 * @category 3 - Composant
 * @param {Array} props Array parameter of component
 * @prop {react} props.icon Dom element
 * @prop {string} props.userData Data of current user
*/
function Categories(props) {
    var {icon, userData} = props;
    return (
        <div className='Categories'>
            <div className='Categories__icon'>
                {icon}
            </div>
            <div className='Categories__value'>
                <p className='Categories__value__data'>{userData.data.value} {userData.data.unit}</p>
                <p className='Categories__value__type'>{userData.type}</p>
            </div>
        </div>
    )
}
export default Categories

Categories.propTypes = {
    icon: PropTypes.element,
    userData: PropTypes.object
}