import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts'

import './index.scss'

/**
 * BarCharts
 * @module RadialBarCharts
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Array} props.data Data array
 * @example
 * return (
 *       
 *   )
*/
const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul>
        {
          payload.map((entry, index) => {
              console.log(entry)
            return (<li key={`item-${index}`}><h2>{entry.payload.value * 100}%</h2> {entry.payload.label}</li>)
          })
        }
      </ul>
    );
  }

function RadialBarCharts(props) {
    const {data} = props

    const newData = [{
        value: data.todayScore,
        fill: "#FF0000",
        label: "de votre objectif"
    }]

    return (
        <div className='RadialBarChart'>
            <ResponsiveContainer aspect={1/1}>
                <RadialBarChart data={newData} innerRadius={'100%'} barSize={10} startAngle={90} endAngle={(newData[0].value * 360 + 90)}>
                    <RadialBar dataKey="value" minAngle={15} cornerRadius={50}/>
                    <Legend verticalAlign="middle" layout="vertical" content={renderLegend} width={80}/>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default RadialBarCharts