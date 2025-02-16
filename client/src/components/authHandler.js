export const get_user = async (email,password)=>{
    let headerOptions = {
        email,
        password
    }

    let res = await fetch("http://localhost:2000/api/auth/login",{
        headers: headerOptions,
        credentials: 'include' // This sends the cookie along with the request
    })

    let token = await res.json()
    return token.success
}

export const add_user = async (name,email,password) => {
    let headerOptions ={
        name,
        email,
        password
    }
    let res = await fetch("http://localhost:2000/api/auth/signup",
        {
            method: "post",
            headers: headerOptions,
            credentials: 'include'
        }
    )
    let token = await res.json()
    return token.success
}

export const isUserValid = async () => {
    let res = await fetch("http://localhost:2000/api/auth/validateUser",
        {
            method: "get",
            credentials: 'include'
        }
    )
    let data = await res.json()
    return data
}