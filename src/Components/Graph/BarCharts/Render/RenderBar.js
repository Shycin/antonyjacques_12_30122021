import PropTypes from 'prop-types'

/**
 * RenderBarChars
 * @module RenderBarChars
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {string} props.fill Color element
 * @prop {number} props.x Starter point in x axis
 * @prop {number} props.y Starter point in y axis
 * @prop {number} props.width Width of BarChart
 * @prop {number} props.height height of BarChart
*/
function RenderBarChar(props) {
    const { fill, x, y, width, height } = props;

        return (
            <g fill={fill}>
                <rect y={y} x={x} width={width} height={height} />
                    <circle cx={x + width / 2} cy={y} r={width / 2} />
            </g>
        )

}
export default RenderBarChar

RenderBarChar.propTypes = {
    props: PropTypes.array,
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
}