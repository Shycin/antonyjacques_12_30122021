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