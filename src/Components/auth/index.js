// isLoggedIn 

export const isLoggedIn = () => {
    const user_data = JSON.parse(sessionStorage.getItem("user_data"));
    return user_data !== null;
  };


//doLogin = data =>set to localstorage

export const doLogin = (user_data) => {
        sessionStorage.setItem("user_data",JSON.stringify(user_data));
  };


//doLogout =>remove from localstorage

export const doLogout = ()=>{
    sessionStorage.removeItem("user_data");
};