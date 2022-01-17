import { ResponsiveContainer, RadarChart , PolarGrid, PolarAngleAxis, Radar } from 'recharts'

import './index.scss'

function RadarCharts(props) {
    const {data, tags} = props

    /**
     * Set the day tick
     * @function newtick
     * @param {number} tags number in tag type
     * @returns {string} The name of sport
     */
    const newtick = (tag) => {
        return tags[tag] ? tags[tag] : ''
    }

    return (
        <div className='RadarChart'>
            <ResponsiveContainer aspect={1/1} /*width={180}*/>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={newtick}/>
                    <Radar name="value" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default RadarCharts