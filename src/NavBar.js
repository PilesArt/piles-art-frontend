import React from 'react';
import { Button, Flex, Image, Link } from '@chakra-ui/react'; 
import OpenSea from "./assets/social-media-icons/opensea.png"
import Twitter from "./assets/social-media-icons/twitter.png"
import Discord from "./assets/social-media-icons/discord.png"
// import Etherscan from "./assets/social-media-icons/etherscan.png"

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px" >
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-between" width="20%" padding="0 30px" >
                <Link href="https://opensea.io/collection/sinusoid-piles">
                    <Image src={OpenSea} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="https://www.twitter.com/pilesart">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="http://discord.gg/nfCY5pNRvr">
                    <Image src={Discord} boxSize="42px" margin="0 15px"  />
                </Link>
                {/* <Link href="http://discord.gg/nfCY5pNRvr">
                    <Image src={Etherscan} boxSize="42px" margin="0 15px"  />
                </Link> */}
            </Flex>

            {/* Right Side - Sections and Connect */}
            <Flex
                justify="space-around"
                align="center"
                width="20%"
                padding="30px"
            >
                {/* <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer /> */}


                {/* Connect */}
                {isConnected ? (
                    <Button 
                    backgroundColor="#1b6d1b"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #000000"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    // onClick={connectAccount}
                    >
                    Connected
                    </Button>
                ) : (
                <Button 
                    backgroundColor="#1b6d1b"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #000000"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={connectAccount}
                    >
                    Connect
                    </Button>
                )}
            </Flex>     
        </Flex>   
    );
};

export default NavBar;