import PropTypes from 'prop-types'
import './Sidebar.scss'

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