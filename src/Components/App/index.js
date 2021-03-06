import { useEffect, useState } from 'react'
import './index.css'
import RequestAPI from '../../Services/RequestAPI'
import { userId } from '../../Services/GlobalVariables'
import Picto from '../Picto/Picto'

import Header from '../Header'
import MenuHorizontal from '../MenuHorizontal'

import Sidebar from '../Sidebar'
import MenuVertical from '../MenuVertical'

import Dashboard from '../Dashboard'

import BarCharts from '../Graph/BarCharts'
import LineCharts from '../Graph/LineCharts'
import RadarCharts from '../Graph/RadarCharts'
import RadialBarCharts from '../Graph/RadialBarCharts'

import Categories from '../Categories'

import Loader from '../Loader'

import Converter from '../Converter'

/**
 * App
 * @module App
 * @example
 * return (
 *   <App/>
 * )
*/
function App() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const request = new RequestAPI()
        request.CreateNewRequest(userId).then((api) => {
            setUser(api)
            api.activity()
                .then((activity) => setUser({ ...activity })
                , (error) => {
                    setError(errors => ({ ...errors, activity: 'erreur' }))
                })

            api.average_sessions()
                .then((averageSessions) => setUser({ ...averageSessions })
                , (error) => {
                    setError(errors => ({ ...errors, averageSessions: 'erreur' }))
                })

            api.performance()
                .then((performance) => setUser({ ...performance })
                , (error) => {
                    setError(errors => ({ ...errors, performance: 'erreur' }))
                })

        }, (error) => {
            setError({...error, main: 'La récupération des données est indisponible'})
        })

    }, [])

    return (
        <div className='App'>
            <Header>
                <MenuHorizontal />
            </Header>
            <main>
                <Sidebar>
                    <MenuVertical />
                </Sidebar>
                {user ? 
                    <Dashboard userProfile={user.profile}>
                        {
                            <div className='container-flex row'>
                                <div className='container-flex left'>
                                    <div>
                                        { user.activityData ? <BarCharts data={user.activityData.sessions} /> : <Loader error={error.activity}/> }
                                    </div>
                                    <div className='container-flex--three row widgets'>
                                        { user.averageSessionsData ? <LineCharts data={user.averageSessionsData.sessions} /> : <Loader error={error.averageSessions}/> }
                                        { user.performanceData ? <RadarCharts tags={user.performanceData.kind} data={user.performanceData.data} /> : <Loader error={error.performance}/> }
                                        { user.profile ? <RadialBarCharts data={user.profile} /> : <Loader error={error.main}/> }
                                    </div> 
                                </div>
                                <div className='container-flex right'>
                                    {
                                        <Categories 
                                            userData={{data: Converter({value: user.profile.keyData.calorieCount, unit: 'Cal'}), type: 'Calories'}} 
                                            icon={<Picto type='calories'/>} 
                                        />
                                    }
                                    {
                                        <Categories 
                                            userData={{data: Converter({value: user.profile.keyData.proteinCount, unit: 'g'}), type: 'Proteines'}} 
                                            icon={<Picto type='proteines' color={'#4AB8FF'} />} 
                                        />
                                    }
                                    {
                                        <Categories 
                                            userData={{data: Converter({value: user.profile.keyData.carbohydrateCount, unit: 'g'}), type: 'Glucides'}} 
                                            icon={<Picto type='glucides' color={'#F9CE23'} />} 
                                        />
                                    }
                                    {
                                        <Categories 
                                            userData={{data: Converter({value: user.profile.keyData.lipidCount, unit: 'g'}), type: 'Lipides'}} 
                                            icon={<Picto type='lipides' color={'#FD5181'} />} 
                                        />
                                    }
                                </div>    
                            </div>
                            
                        }
                    </Dashboard> 
                : <Loader error={error.main}/>}

                
            </main>   
        </div>
    )
}

export default App
