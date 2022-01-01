import { useEffect, useState } from 'react'
import './App.css'
import RequestAPI from '../../Services/RequestAPI'
import { userId } from '../../Services/GlobalVariables'

import Header from '../Header/Header'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal'

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

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='App'>
            <Header>
                <MenuHorizontal />
            </Header>
        </div>
    )
}

export default App
