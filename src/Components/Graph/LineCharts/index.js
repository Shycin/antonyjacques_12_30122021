import { useRef, useState } from "react"
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ReferenceArea } from 'recharts'
import RenderLegend from './Render/RenderLegend'
import RenderTooltip from './Render/RenderTooltip'

import './index.scss'

/**
 * BarCharts
 * @module LineCharts
 * @category 5 - Chart
 * @param {Array} props Array parameter of component
 * @prop {Array} props.data Data array
 * @example
 * return (
 *       <div className='LineChart' ref={graphRef}>
 *           <ResponsiveContainer aspect={1/1}>
 *               <LineChart>
 *                   <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
 *                   <XAxis 
 *                       dataKey="day" 
 *                       tickLine={false} 
 *                       tick={true} 
 *                       axisLine={false} 
 *                       tickFormatter={newtick}
 *                       type="number"
 *                       domain={['dataMin - 1', 'dataMax + 1']}
 *                       tickCount={9}
 *                   />
 *                   <YAxis 
 *                       hide={true} 
 *                       domain={['dataMin - 10', 'dataMax + 10']}
 *                   />
 *                   <Tooltip 
 *                       content={<RenderTooltip />} 
 *                       cursor={false}
 *                   />
 *                   <Legend 
 *                       margin={{
 *                           left: 10,
 *                           right: 10
 *                           }}
 *                       verticalAlign="top" 
 *                       align="right" 
 *                       height={36} 
 *                       content={<RenderLegend />} 
 *                   />
 *                   <Line 
 *                       type="natural" 
 *                       dataKey="sessionLength" 
 *                       stroke="#ffffff"
 *                       strokeWidth={2} 
 *                       dot={false} 
 *                       activeDot={{ r: 8 }} 
 *                       connectNulls={true} 
 *                       unit="min"
 *                   />
 *                   {hover && <ReferenceArea
 *                           x1={hover.x}
 *                           x2={7}
 *                           y1={-20}
 *                           y2={100}
 *                           fill="#000"
 *                           fillOpacity="0.1"
 *                           shape={<ReferenceBands />}
 *                   />}
 *              </LineChart>
 *          </ResponsiveContainer>
 *      </div>
 *   )
*/
function LineCharts(props) {
    const week = ['L','M','M','J','V','S','D']
    const {data} = props
    const graphRef = useRef(null)
    const [hover, setHover] = useState(null)

    const ReferenceBands = (props) => {
        const { x1 } = props
        const { offsetWidth } = graphRef.current
        const startPosition = x1
        return (
            <path fillOpacity={.1} d={`M ${startPosition}, 0 h ${offsetWidth} v ${offsetWidth*2} h -${offsetWidth} Z`}></path>
        )
    }
    /**
     * Set x1 of ReferenceArea when the mouse enter in the component
     * @function onMouseMoveLineChart
     * @param {object} e send by LineChart
     */
     const onMouseMoveLineChart = (e) => {
        setHover(e.activeCoordinate)
    }

    /**
     * Reset x1 of ReferenceArea when the mouse leave the component
     * @function onMouseLeaveLineChart
     * @param {object} e send by LineChart
     */
    const onMouseLeaveLineChart = (e) => {
        setHover(null)
    }


     /**
     * Set the day tick
     * @function newtick
     * @param {number} day number a the weekday
     * @returns {string} The letter of the week
     */
      const newtick = (day) => {
        return week[day - 1] ? week[day - 1] : ''
    }

    return (
        <div className='LineChart' ref={graphRef}>
            <ResponsiveContainer aspect={1/1}>
                <LineChart 
                    data={data}
                    onMouseMove={onMouseMoveLineChart}
                    onMouseLeave={onMouseLeaveLineChart}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                    <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        tick={true} 
                        axisLine={false} 
                        tickFormatter={newtick}
                        type="number"
                        domain={['dataMin - 1', 'dataMax + 1']}
                        tickCount={9}
                    />
                    <YAxis 
                        hide={true} 
                        domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Tooltip 
                        content={<RenderTooltip />} 
                        cursor={false}
                    />
                    <Legend 
                        margin={{
                            left: 10,
                            right: 10
                            }}
                        verticalAlign="top" 
                        align="right" 
                        height={36} 
                        content={<RenderLegend />} 
                    />
                    <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="#ffffff"
                        strokeWidth={2} 
                        dot={false} 
                        activeDot={{ r: 8 }} 
                        connectNulls={true} 
                        unit="min"
                    />
                    {hover && <ReferenceArea
                            x1={hover.x}
                            x2={7}
                            y1={-20}
                            y2={100}
                            fill="#000"
                            fillOpacity="0.1"
                            shape={<ReferenceBands />}
                    />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default LineCharts