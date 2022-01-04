import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import RenderLegend from './Render/RenderLegend'
import RenderTooltip from './Render/RenderTooltip'
import RenderBarChar from './Render/RenderBar'

import './BarCharts.scss'

function BarCharts({ data }) {
    return (
        <div className='BarChart'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false}/>
                    <XAxis tickLine={false} tickSize={15}/>
                    <YAxis yAxisId={1} orientation="right" domain={['dataMin - 1', 'dataMax']} tickCount={3} allowDecimals={false} axisLine={false} tickLine={false} tickSize={40}/>
                    <YAxis yAxisId={2} hide={true} padding={{left: 50}}/>
                    <Tooltip formatter={(value, name, props) => [value]} label="sdfsdeféé" />
                    {/* <Tooltip content={<RenderTooltip />} coordinate={{ x: 1000, y: 1040 }}/> */}
                    <Legend verticalAlign="top" align="right" height={36} margin={{ top: 50, left: 50, right: 50, bottom: 50 }} content={<RenderLegend />} />
                    <Bar yAxisId={1} dataKey="kilogram" fill="#282D30" barSize={7} shape={<RenderBarChar />} unit="kg" label="Poids (kg)" />
                    <Bar yAxisId={2} dataKey="calories" fill="#E60000" barSize={7} shape={<RenderBarChar />} unit="Kcal" label="Calories brûlées (kCal)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default BarCharts