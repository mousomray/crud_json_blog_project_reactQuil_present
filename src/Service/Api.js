import axios from "axios"
const url = 'http://localhost:3003/blog'

// For all blogs
export const myBlogs = async () => {
        try {
            return await axios.get(url)
        }
        catch (error) {
            console.log('Error while calling getUsers API', error.message)
        }
    }

// For post blog 
export const postBlogs = async(data) =>{
    try{
        return await axios.post(url,data)
    }
    catch (error){
        console.log('Error fetching data')
    }
}

// For delete blog 
export const deleteblog = async (id) => {
        try {
            return await axios.delete(`${url}/${id}`)
        }
        catch (error) {
            console.log('Error while calling deleteUser API', error.message)
        }
    }
