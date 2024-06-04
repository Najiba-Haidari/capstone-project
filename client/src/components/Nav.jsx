import { Link } from 'react-router-dom';
import { Wrap, WrapItem, Center, Box, Flex } from '@chakra-ui/react'

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
        <Flex>
        <Box bg="gray" p={2} boxShadow="md" w="100%">
            <Wrap>
                <WrapItem>
                    <Center w='180px' h='80px' >
                        <Link to="/">
                            <div>Home</div>
                        </Link>
                    </Center>
                </WrapItem>
                {!isLoggedIn && (
                    <>
                        <WrapItem>
                            <Center w='180px' h='80px' bg='red.200'>
                                <Link to="/signup">
                                    <div>Signup</div>
                                </Link>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='80px' >
                                <Link to="/login">
                                    <div>login</div>
                                </Link>
                            </Center>
                        </WrapItem>
                    </>
                )}
                {isLoggedIn && (
                    <WrapItem>
                        <Center w='180px' h='80px' >
                            <div onClick={handleLogout}>
                                <div>Logout</div>
                            </div>
                        </Center>
                    </WrapItem>
                )}

            </Wrap>
        </Box>
        </Flex>
    )
}