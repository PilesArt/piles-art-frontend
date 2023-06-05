import { useState } from 'react';
import { ethers, providers, BigNumber} from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'; 

const { abi } = require('./SinusoidPiles.json')
const sinusoidPilesAddress = "0x08AaD58e2572CB1DB5d8c6721f86d3e0B657F5d8";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                sinusoidPilesAddress,
                abi,
                signer
            );
            try {
                const reponse = await contract.mintPile(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
                });
                console.log('response: ', reponse);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 100) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
             <div>
                {/* <Text fontSize='64px' textShadow="0 5px #000000">Piles Art</Text>
                <Text fontSize='48' textShadow="0 5px #000000">Sinusoid Piles</Text> */}
            </div> 
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button 
                        backgroundColor="#1b6d1b"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #000000"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick={handleDecrement}
                        >
                            -
                        </Button>
                        <Input 
                        readOnly
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number"
                        value={mintAmount} 
                        />
                        <Button 
                        backgroundColor="#1b6d1b"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #000000"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick={handleIncrement}
                        >
                            +
                        </Button>
                    </Flex>  
                    <Button 
                        backgroundColor="#1b6d1b"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #000000"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick={handleMint}
                        >
                            Mint Piles
                        </Button>
                </div>
            ) : (
                <Text 
                fontSize='36px' 
                textShadow="0 4px #000000">
                {/* Connect to Mint */}
            </Text>
            )}
            </Box>
        </Flex>
    );
};

export default MainMint;