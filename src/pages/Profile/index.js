import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const navigate=useNavigate();
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut(()=>{
            navigate('/');
        });
    }
    return (
        <div>
            {user && (
                <div>
                    <div>
                        <Text mt={2} fontWeight="bold">Ad Soyad : </Text> {user.fullName}
                    </div>
                    <div>
                        <Text mt={3} fontWeight={"bold"}>Email : </Text> {user.email}
                    </div>
                    <Button mt={5} colorScheme={"red"} variant="solid" onClick={handleLogOut}   >Çıkış Yap</Button>
                </div>
            )
            }
        </div>
    )
}

export default Profile