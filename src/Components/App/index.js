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

import Categories from '../Categories'

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
                                    {<Categories icon={<Picto type='calories'/>} userData={{value: (user.profile.keyData.calorieCount/1000).toFixed(3), unit: 'kcal', type: 'Calories'}} />}
                                    {<Categories icon={<Picto type='proteines' color={'#4AB8FF'} />} userData={{value: user.profile.keyData.proteinCount, unit: 'g', type: 'Proteines'}} />}
                                    {<Categories icon={<Picto type='glucides' color={'#F9CE23'} />} userData={{value: user.profile.keyData.calorieCount, unit: 'g', type: 'Glucides'}} />}
                                    {<Categories icon={<Picto type='lipides' color={'#FD5181'} />} userData={{value: user.profile.keyData.calorieCount, unit: 'g', type: 'Lipides'}} />}
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
