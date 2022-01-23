import './index.scss'
import PropTypes from 'prop-types'

/**
 * Categories card
 * @module Component
 * @category 3 - Composant
 * @example
 * return (
 *   <Header>{children}</Header>
 * )
*/
function Loader(props) {
    const {error} = props
    return (
        <div className='Loader'>
            { error ? <div className='error'>{error}</div> : '' }
            <div className='spinner'></div>
        </div>
    )
}
export default Loader

Loader.propTypes = {
    props: PropTypes.array,
    error: PropTypes.string
}