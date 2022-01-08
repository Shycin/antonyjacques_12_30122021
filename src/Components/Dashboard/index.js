import PropTypes from 'prop-types'
import './index.scss'

function Dashboard({ children, userProfile }) {
    return (
        <div className='Dashboard'>
            <div className='Dashboard__header'>
                <h1>Bonjour <span className='Dashboard__header__firstname'>{userProfile.userInfos.firstName}</span></h1>
                <div className='Dashboard__description'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
            </div>
            <div className='Dashboard__body'>
                {children}
            </div>
        </div>
    )
}
export default Dashboard

Dashboard.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
    userProfile: PropTypes.object.isRequired
}

Dashboard.defaultProps = {
    children: '',
}