import './RenderLegend.scss'

function RenderLegend({ payload }) {
    if (payload && payload.length) {
        return (
          <div className="custom-legend">
                <h2>Activité quotidienne</h2>
                <ul>
                {
                    payload.map( (item, key) => {
                        return (<li key={key} style={{color: item.color}}>{item.payload.label}</li>)
                    })
                }
              </ul>
          </div>
        );
      }
    
      return null;
}
export default RenderLegend