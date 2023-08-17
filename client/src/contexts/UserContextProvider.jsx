import React, { createContext, useContext, useState, useEffect } from "react";
import { NFTAddress, NFTAbi } from "../web3-services/constants";
import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
// import { supportedChains } from "../utils/chainConfig.ts";
import { usePublicClient, useAccount, useNetwork } from "wagmi";
import { useEthersSigner } from "../utils/signer.ts";
const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChainId] = useState(chain?.id);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);
  const { address } = useAccount();
  const signer = useEthersSigner(activeChain);
  const [verified, setVerified] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [products, setProducts] = useState([]); // [1
  const getContractInstance = async (contractAddress, contractAbi) => {
    try {
      let contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract");
    }
  };

  const mintNFT = async (walletAddress) => {
    try {
      let id = toast.loading("⏳ Minting...", {
        theme: "dark",
        autoClose: true,
      });
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      let balance = await nftInstance.balanceOf(walletAddress);
      balance = +balance.toString();
      if (balance == 1) {
        toast.update(id, {
          render: "Already Minted !",
          type: "info",
          isLoading: false,
          theme: "dark",
          icon: " ✅ ",
          autoClose: true,
        });
        return;
      }
      let tokenURI =
        "https://gateway.pinata.cloud/ipfs/QmUFA3vw118FeGW61xfEU7mcZEt9sm2BMfqchERbq6BKCG";
      let tx = await nftInstance.mintNFT(walletAddress, tokenURI);
      await tx.wait(1);
      setConfetti(true);
      setTimeout(() => {
        if (confetti) {
          setConfetti(false);
        }
      }, 5000);
      toast.update(id, {
        render: "Minted Successfully  !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: " ✅ ",
        autoClose: true,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error in Minting !");
    }
  };
  const checkVerification = async (pasteAddress) => {
    let id = toast.loading("⏳ Checking for Verification... ", {
      theme: "dark",
    });
    try {
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      let balance = await nftInstance.balanceOf(pasteAddress);
      balance = +balance.toString();
      let isVerified = balance == 1 ? true : false;
      setVerified(isVerified);
      if (isVerified) {
        setConfetti(true);
        setTimeout(() => {
          if (confetti) {
            setConfetti(false);
          }
        }, 5000);
        toast.update(id, {
          render: "Verified !",
          type: "info",
          isLoading: false,
          theme: "dark",
          icon: " ✅ ",
          autoClose: true,
        });
      } else {
        toast.update(id, {
          render: "Not Verified !",
          type: "info",
          isLoading: false,
          theme: "dark",
          icon: " ❌ ",
          autoClose: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: "Try Again !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  };
  async function registerBrand(
    brandName,
    brandSymbol,
    tokenPercentage,
    basePrice
  ) {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );
    try {
      const transaction = await contract.registerBrand(
        brandName,
        brandSymbol,
        tokenPercentage,
        basePrice
      );
      await transaction.wait(2);
      console.log("Brand registered successfully!");
    } catch (error) {
      console.error("Error registering brand:", error);
    }
  }
  useEffect(() => {
    if (!signer) return;
    (async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
      setProducts(data);
    })();
  }, [signer, address]);

  return (
    <UserDataContext.Provider
      value={{ checkVerification, verified, mintNFT, confetti, products }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);
