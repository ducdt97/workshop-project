
import axios from 'axios';

export default async function getUserById(userId) {
    try {
        const response = await axios.get(`http://localhost:1337/api/accounts/${userId}`)
        const user = response.data
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}
