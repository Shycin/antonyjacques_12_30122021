import PropTypes from 'prop-types'
import './RenderLegend.scss'

/**
 * RenderLegend
 * @module RenderLegend
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Array} props.payload Const element about parent element
*/
function RenderLegend(props) {
    const {payload} = props
    if (payload && payload.length) {
        return (
          <div className="custom-legend">
                <h2>Durée moyenne des sessions</h2>
          </div>
        );
      }
    
      return null;
}
export default RenderLegend

RenderLegend.propTypes = {
  props: PropTypes.array,
  payload: PropTypes.array.isRequired
}

RenderLegend.defaultProps = {
  payload: []
}