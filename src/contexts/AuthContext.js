import { Spinner, Flex } from "@chakra-ui/react";
import { useState, createContext, useContext, useEffect } from "react";
import { fetchMe } from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const me = await fetchMe()
                setLoggedIn(true);
                setUser(me)
                setLoading(false)
            } catch (e) {
                setLoading(false)
            }
        })()
    }, []);

    const login = (data) => {
        setLoggedIn(true)
        setUser(data);
        localStorage.setItem("token", data.token);
    };

    const logOut = (callback) => {
        setLoggedIn(false);
        setUser(null);
        localStorage.removeItem("token");
        callback();
    }

    const values = {
        loggedIn,
        user,
        login,
        logOut,
    };

    if (loading) {
        return (
            <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size={"xl"} color="red" />
            </Flex>
        )
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };