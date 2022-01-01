import PropTypes from 'prop-types'
import './Dashboard.scss'

function Dashboard({ children, userProfile }) {
    return (
        <div className='Dashboard'>
            <div className='Dashboard__header'>
                <h1>Bonjour <span className='Dashboard__header__firstname'>{userProfile.userInfos.firstName}</span></h1>
                <div className='Dashboard__description'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
            </div>
            {children}
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