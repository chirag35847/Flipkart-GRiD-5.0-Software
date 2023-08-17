import React, { createContext, useContext, useState, useEffect } from "react";
import {
  NFTAddress,
  NFTAbi,
  EcommerceAbi,
  EcommerceAddress,
  LoyalityTokenABI,
  LoyalityTokenAddress,
} from "../web3-services/constants";
import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
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
    let id = toast.loading("⏳ Register Brand... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    try {
      const transaction = await contract.registerBrand(
        brandName,
        brandSymbol,
        tokenPercentage,
        basePrice
      );
      await transaction.wait(2);
      toast.update(id, {
        render: "Brand Registered !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      console.error("Error registering brand:", error);
    }
  }

  async function registerUser(_loyalityReward = 20) {
    let id = toast.loading("⏳ Register User... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    const tokenContract = await getContractInstance(
      LoyalityTokenAddress,
      LoyalityTokenABI
    );
    try {
      let approveTx = await tokenContract.approve(
        EcommerceAddress,
        _loyalityReward
      );
      await approveTx.wait(2);
      const transaction = await contract.registerUser(_loyalityReward);
      await transaction.wait(2);
      toast.update(id, {
        render: "User Registered !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      toast.update(id, {
        render: "User Registered Already !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  }

  async function changeBasePrice(_baseAmount, _brandId) {
    let id = toast.loading("⏳ Changing base price ... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    try {
      const transaction = await contract.changeBasePrice(_baseAmount, _brandId);
      await transaction.wait(2);
      toast.update(id, {
        render: "Base price changed !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      toast.update(id, {
        render: "Base price Not changed !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  }

  async function changePercentage(_basePercentage, _brandId) {
    let id = toast.loading("⏳ Changing base percentage ... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    try {
      const transaction = await contract.changePercentage(
        _basePercentage,
        _brandId
      );
      await transaction.wait(2);
      toast.update(id, {
        render: "Base percentage changed !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      toast.update(id, {
        render: "Base percentage Not changed !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  }

  async function brandDetails(_brandId) {
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    try {
      const brand = await contract.getBrandDetails(_brandId);
      return {
        id: +brand["id"].toString(),
        name: brand["name"],
        symbol: brand["symbol"],
        tokenPercentage: +brand["tokenPercentage"].toString(),
        brandAddress: brand["brandAddress"],
        brandOwner: brand["brandOwner"],
        basePrice: +brand["basePrice"].toString(),
      };
    } catch (error) {
      console.log(error);
    }
  }
  async function purchaseProduct(_brandid, _productID, _price) {
    let id = toast.loading("⏳ Preparing your product... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);

    const brand = await brandDetails(_brandid);
    let tokenReward = 0;
    if (_price > brand?.basePrice) {
      let percentage = brand?.tokenPercentage;
      tokenReward = (_price * percentage) / 1000;
    }
    toast.update(id, {
      render: "Approving Transaction ...",
      type: "success",
      isLoading: true,
      theme: "dark",
      icon: "⏳",
      autoClose: true,
    });
    const tokenContract = await getContractInstance(
      brand?.brandAddress,
      LoyalityTokenABI
    );

    let approveTx = await tokenContract.approve(EcommerceAddress, tokenReward);
    await approveTx.wait(2);
    const transaction = await contract.purchase(
      _brandid,
      tokenReward,
      _productID,
      _price
    );
    await transaction.wait(2);
    toast.update(id, {
      render: tokenReward
        ? `You Got rewards on your purchase item ${tokenReward}`
        : "Product Purchased !",
      type: "success",
      isLoading: false,
      theme: "dark",
      icon: "✅",
      autoClose: true,
    });
    try {
    } catch (error) {
      console.log(error);
    }
  }

  const claimLoyalityTokens = async () => {
    let id = toast.loading("⏳ Claiming tokens... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);

    try {
      let transaction = await contract.claimLoyalityTokens(
        LoyalityTokenAddress,
        { from: address }
      );
      await transaction.wait(2);
      toast.update(id, {
        render: "Claimed !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      toast.update(id, {
        render: "Claimed Failed !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  };

  const claimBrandTokens = async (brandID) => {
    let id = toast.loading("⏳ Claiming tokens... ", {
      theme: "dark",
    });
    const contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
    try {
      const brand = await brandDetails(brandID);

      let transaction = await contract.claimBrandTokens(
        brand?.brandAddress,
        brandID,
        { from: address }
      );
      await transaction.wait(2);
      toast.update(id, {
        render: "Claimed !",
        type: "success",
        isLoading: false,
        theme: "dark",
        icon: "✅",
        autoClose: true,
      });
    } catch (error) {
      toast.update(id, {
        render: "Claimed Failed !",
        type: "error",
        isLoading: false,
        theme: "dark",
        icon: "❌",
        autoClose: true,
      });
    }
  };

  useEffect(() => {
    if (!signer) return;
    (async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
      setProducts(data);
    })();
    brandDetails(1);
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
