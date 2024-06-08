import { Link } from 'react-router-dom';
import './Nav.css'
import { Wrap, WrapItem, Center, Box, Flex, Spacer } from '@chakra-ui/react'

export default function Nav({ isLoggedIn, logout }) {

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:3000/api/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            logout();
            console.log("logout successfuly")
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };


    return (
        <Flex className='navbar ' >
        <Box  textAlign={'center'} margin={0} p={4}  w="100%">
            <Wrap>
                <WrapItem>
                    <Center w='180px' h='50px' >
                        <Link to="/">
                            <div>Home</div>
                        </Link>
                    </Center>
                </WrapItem>
                <Spacer />
                {!isLoggedIn && (
                    <>
                   
                        <WrapItem>
                            <Center w='180px' h='50px' >
                                <Link to="/signup">
                                    <div>Signup</div>
                                </Link>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='50px' >
                                <Link to="/login">
                                    <div>Login</div>
                                </Link>
                            </Center>
                        </WrapItem>
                    </>
                )}
                {isLoggedIn && (
                    <>
                    <WrapItem>
                            <Center w='180px' h='50px' >
                                <Link to="/search">
                                    <div>Search</div>
                                </Link>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='50px' >
                                <Link to="/saved">
                                    <div>Dashboard</div>
                                </Link>
                            </Center>
                        </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='50px' >
                            <div onClick={handleLogout}>
                                <div>Logout</div>
                            </div>
                        </Center>
                    </WrapItem>
                    </>
                )}

            </Wrap>
        </Box>
        </Flex>
    )
}