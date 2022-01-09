import PropTypes from 'prop-types'

function Converter({ value, unit }) {
    if(value > 1000){
        value = (value/1000).toFixed(3)
        unit = 'K' + unit
    }
    return {value: value, unit: unit}
}
export default Converter

Converter.propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string
}