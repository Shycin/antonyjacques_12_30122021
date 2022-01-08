function RenderTooltip({ active, payload, label }) {
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