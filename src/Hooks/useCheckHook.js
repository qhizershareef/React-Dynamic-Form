import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useCheckHook = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userLoginData = useSelector(state => state.userLogin);
    const {userInfo, error} = userLoginData
    ;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    const redirect = location.search ? location.search.split('=')[1]: '/';

    useEffect(() => {
        if(!userInfo){
            navigate('/login')
        }
    }, [navigate,userInfo]);

    return [userInfo,isAuthenticated,error];
}
export default useCheckHook;