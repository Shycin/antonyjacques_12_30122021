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
            new Promise((resole, reject) => {
                fetch(`${URL_API_STAT}/user/${user.userID}/${path}`)
                    .then((response) => response.json())
                    .then((result) => {
                        user[name] = result.data
                        resole(user)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })
            })

        user.activity = () =>
            new Promise((resolve) => {
                user.data('activityData', 'activity').then((dataLoad) =>
                    resolve(dataLoad)
                )
            })

        user.average_sessions = () =>
            new Promise((resolve) => {
                user.data('averageSessionsData', 'average-sessions').then(
                    (dataLoad) => resolve(dataLoad)
                )
            })

        user.performance = () =>
            new Promise((resolve) => {
                user.data('performanceData', 'performance').then((dataLoad) =>
                    resolve(dataLoad)
                )
            })

        return new Promise((resolve) => {
            user.data().then((dataLoad) => {
                Object.assign(user, dataLoad.data)
                resolve(user)
            })
        })
    }
}
