import { Box, Text, Link, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box as="footer" width="100%" py={4} backgroundColor="gray.100" >
            <VStack spacing={4}>
                {/* <Text fontSize="lg" fontWeight="bold">Footer</Text> */}
                <HStack spacing={6}>
                    <Link href="https://www.linkedin.com/in/najiba-haidari-m/" color="teal.500" display="flex" alignItems="center" isExternal>
                        <Icon as={FaLinkedin} mr={2} />
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/Najiba-Haidari" color="teal.500" display="flex" alignItems="center" isExternal>
                        <Icon as={FaGithub} mr={2} />
                        GitHub
                    </Link>
                    <Link href="mailto:nhaidari089@gmail.com" color="teal.500" display="flex" alignItems="center">
                        <Icon as={FaEnvelope} mr={2} />
                        Gmail
                    </Link>
                </HStack>
                <Text fontSize="sm">&copy; {new Date().getFullYear()} Made by Najiba H . All rights reserved.</Text>
            </VStack>
        </Box>
    );
}
