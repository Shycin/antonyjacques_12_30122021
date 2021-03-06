import PropTypes from 'prop-types'
/**
 * RenderTooltip
 * @module RenderTooltip
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Boolean} props.active Tooltip is enable or not
 * @prop {Array} props.payload Const element about parent element
 * @prop {Array} props.label Const element contains all string to describe his parent
*/
function RenderTooltip(props) {
    const {active, payload} = props
    if (active && payload && payload.length) {
        return (
          	<div className="custom-tooltip">
                {
                    payload.map((item,key)=>{
                        return <p key={key} className="custom-tooltip__label">{item.value}{item.unit}</p>
                    })
                }
          	</div>
        );
    }
    
    return null;
}
export default RenderTooltip

RenderTooltip.propTypes = {
    props: PropTypes.array,
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array.isRequired
}

RenderTooltip.defaultProps = {
    active: false,
    payload: []
}