import PropTypes from 'prop-types'
import './index.scss'

function Categories({ icon, userData }) {
    console.log(icon, userData)
    return (
        <div className='Categories'>
            <div className='Categories__icon'>
                {icon}
            </div>
            <div className='Categories__value'>
                <p className='Categories__value__data'>{userData.value}{userData.unit}</p>
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