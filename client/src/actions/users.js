import axios from'axios'

export const signupRequest=()=>{
    return(dispatch)=>{
        return axios.post('/api/users',{data})
    }
}