import PropTypes from 'prop-types'
import './Header.scss'

function Header({ children }) {
    return <header>{children}</header>
}
export default Header

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
}

Header.defaultProps = {
    children: '',
}
