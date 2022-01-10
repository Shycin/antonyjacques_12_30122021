import PropTypes from 'prop-types'
import './index.scss'

/**
 * Build Header
 * @module Header
 * @category 2 - Navigation
 * @param {React} children React child for header component
 * @example
 * return (
 *   <Header>{children}</Header>
 * )
*/
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
