function RenderLegend({ payload }) {
    if (payload && payload.length) {
        return (
          <div className="custom-tooltip">
              <ul>
              {
                  payload.map( (item, key) => {
                      return (<li key={key}>{item.payload.label}</li>)
                  })
              }
              </ul>
          </div>
        );
      }
    
      return null;
}
export default RenderLegend