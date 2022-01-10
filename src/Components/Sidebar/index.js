import PropTypes from 'prop-types'
import './index.scss'

/**
 * Build Header
 * @module Header
 * @category 2 - Navigation
 * @param {React} children React child for header component
 * @example
 * return (
 *   <Sidebar>{children}</Sidebar>
 * )
*/
function Sidebar({ children }) {
    return <aside>{children}</aside>
}
export default Sidebar

Sidebar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]),
}

Sidebar.defaultProps = {
    children: '',
}