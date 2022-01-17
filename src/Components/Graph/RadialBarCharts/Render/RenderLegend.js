import PropTypes from 'prop-types'

/**
 * RenderLegend
 * @module RenderLegend
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Array} props.payload Const element about parent element
*/
const RenderLegend = (props) => {
  const { payload } = props;
  return (
    <ul>
      {
        payload.map((entry, index) => {
          return (<li key={`item-${index}`}><h2>{entry.payload.value * 100}%</h2> {entry.payload.label}</li>)
        })
      }
    </ul>
  );
}
export default RenderLegend

RenderLegend.propTypes = {
  props: PropTypes.array,
  payload: PropTypes.array.isRequired
}

RenderLegend.defaultProps = {
  payload: []
}