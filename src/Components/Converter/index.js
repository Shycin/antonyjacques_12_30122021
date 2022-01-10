import PropTypes from 'prop-types'

/** 
 * Function to convert number over 1000 to quantity with different unit
 * 
 * @module Converter
 * @category 4 - Functions
 * @param {Array} props Array parameter of component
 * @prop {number} props.value Integer value to convert if necessary
 * @prop {string} props.unit Base unit of object
 * @returns {Object} Whether object is convert or keep same value at beginning
*/
function Converter(props) {
    var {value, unit} = props;
    if(value > 1000){
        value = (value/1000).toFixed(3)
        unit = 'K' + unit
    }
    return {value: value, unit: unit}
}
export default Converter

Converter.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired
    }))

    
}