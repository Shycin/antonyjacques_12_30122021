function RenderTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{payload[0].value}{payload[0].unit}</p>
            <p className="label">{payload[1].value}{payload[1].unit}</p>
          </div>
        );
    }
    
    return null;
}
export default RenderTooltip