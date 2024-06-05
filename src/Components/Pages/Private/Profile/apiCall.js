import axios from "axios";

export const getUserProfile = async(id) => {
    const res = await axios.get("/user/user-by-email?email=" + id); 
    
    if (res.status === 200)
    {
        const { data, status } = res?.data
        if (status === "Success")
            return data
    }
}

 