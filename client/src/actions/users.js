import axios from'axios'

export const signupRequest=(data)=>{
    return(dispatch)=>{
        return axios.post('/users',data)
    }
}