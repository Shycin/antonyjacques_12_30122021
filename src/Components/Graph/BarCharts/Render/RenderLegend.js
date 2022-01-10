import './RenderLegend.scss'

/**
 * RenderLegend
 * @module RenderLegend
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Array} props.payload Const element about parent element
 * @example
 * return (
 * <div className="custom-legend">
 *              <h2>Activité quotidienne</h2>
 *              <ul>
 *              {
 *                  payload.map( (item, key) => {
 *                      return (<li key={key} style={{color: item.color}}>{item.payload.label}</li>)
 *                  })
 *              }
 *            </ul>
 *        </div>
 *      );       
*/
function RenderLegend(props) {
    const {payload} = props
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