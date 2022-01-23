import { URL_API_STAT } from './GlobalVariables'

/**
 * Request API to perform call on another server
 * @category 6 - API
 * @module API
 * @example
 * const request = new RequestAPI()
    request.CreateNewRequest(userId).then((api) => {
        setUser(api)
        api.activity().then((activity) => setUser({ ...activity }))
        api.average_sessions().then((averageSessions) => setUser({ ...averageSessions }))
        api.performance().then((performance) => setUser({ ...performance }))
    })
 */
export default function RequestAPI() {
    this.CreateNewRequest = function (userID) {
        const user = { userID }

        user.data = (name = 'profile', path = '') =>
            new Promise((resolve, reject) => {
                fetch(`${URL_API_STAT}/user/${user.userID}/${path}`)
                .catch((error) => {
                    reject(error)
                })
                    .then((response) => response.json())
                    .catch((error) => {
                        reject(error)
                    })
                        .then((result) => {
                            user[name] = result.data

                            // simulate delay time between 2 servers
                            setTimeout(function(){
                                resolve(user)
                            }, 2000)
                        })
                        .catch((error) => {
                            reject(error)
                        })
            })

        user.activity = () =>
            new Promise((resolve, reject) => {
                user.data('activityData', 'activity').then((dataLoad) =>
                    resolve(dataLoad)
                ).catch((error) => {
                    reject(error)
                })
            })

        user.average_sessions = () =>
            new Promise((resolve, reject) => {
                user.data('averageSessionsData', 'average-sessions').then(
                    (dataLoad) => resolve(dataLoad)
                ).catch((error) => {
                    reject(error)
                })
            })

        user.performance = () =>
            new Promise((resolve, reject) => {
                user.data('performanceData', 'performance').then((dataLoad) =>
                    resolve(dataLoad)
                ).catch((error) => {
                    reject(error)
                })
            })

        return new Promise((resolve, reject) => {
            user.data().then((dataLoad) => {
                Object.assign(user, dataLoad.data)
                resolve(user)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}
