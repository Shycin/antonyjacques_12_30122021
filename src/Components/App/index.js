import { useEffect, useState } from 'react'
import './index.css'
import RequestAPI from '../../Services/RequestAPI'
import { userId } from '../../Services/GlobalVariables'

import Header from '../Header'
import MenuHorizontal from '../MenuHorizontal'

import Sidebar from '../Sidebar'
import MenuVertical from '../MenuVertical'

import Dashboard from '../Dashboard'

import BarCharts from '../Graph/BarCharts'

function App() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const request = new RequestAPI()
        request.CreateNewRequest(userId).then((api) => {
            setUser(api)
            api.activity().then((activity) => setUser({ ...activity }))
            api.average_sessions().then((averageSessions) =>
                setUser({ ...averageSessions })
            )
            api.performance().then((performance) => setUser({ ...performance }))
        })
    }, [])

    // useEffect(() => {
    //     console.log(user)
    // }, [user])

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
                            <div className='container-flex--row'>
                                <div className='container-flex left'>
                                    { user.activityData ? <BarCharts data={user.activityData.sessions} /> : '' }
                                </div>
                                <div className='container-flex right'>
ghfghgf
                                </div>    
                            </div>
                            
                        }
                    </Dashboard> 
                : ''}

                
            </main>   
        </div>
    )
}

export default App
