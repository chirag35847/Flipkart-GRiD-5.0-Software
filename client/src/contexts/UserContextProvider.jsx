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
  const [user, setUser] = useState({});
  const [brandFullDetails, setBrandFullDetails] = useState({});
  const [festival, setFestival] = useState(null);
  const festivalDates = {
    "2023-01-01": "New Year's Day",
    "2023-02-14": "Valentine's Day",
    "2023-03-17": "St. Patrick's Day",
    "2023-04-05": "Ram Navami", // Hindu Festival
    "2023-04-15": "Easter Sunday", // Christian Festival - This date changes every year; ensure it's correct for 2023
    "2023-05-26": "Buddha Purnima", // Buddhist Festival
    "2023-07-04": "Independence Day (USA)",
    "2023-08-10": "Raksha Bandhan", // Hindu Festival
    "2023-08-30": "Janmashtami", // Birthday of Lord Krishna - Hindu Festival
    "2023-10-21": "Dussehra", // Hindu Festival
    "2023-10-31": "Halloween",
    "2023-11-09": "Diwali", // Hindu Festival
    "2023-11-25": "Thanksgiving Day", // USA Festival - This date changes every year; ensure it's correct for 2023
    "2023-12-03": "Hanukkah Starts", // Jewish Festival - This date changes; ensure it's correct for 2023
    "2023-12-25": "Christmas Day",
    "2023-12-31": "New Year's Eve",
  };
  function isTodayFestival() {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0]; // Converts today's date to YYYY-MM-DD format
    let festive = festivalDates[formattedToday] || null;
    setFestival(festive);
  }
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
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

  const registerUserUsingNFTVerification = async (walletAddress) => {
    let id = toast.loading("⏳ Minting NFT for You ...", {
      theme: "dark",
      autoClose: true,
    });
    try {
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      toast.update(id, {
        render: "Making token URI ...!",
        type: "success",
        isLoading: true,
        theme: "dark",
        autoClose: true,
      });
      let tokenURI =
        "https://gateway.pinata.cloud/ipfs/QmUFA3vw118FeGW61xfEU7mcZEt9sm2BMfqchERbq6BKCG";
      let tx = await nftInstance.mintNFT(walletAddress, tokenURI);
      await tx.wait(1);

      await registerUser();
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 5000);
      await sleep(5000);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  const checkVerification = async (pasteAddress) => {
    let id = toast.loading("⏳ Checking for Verification... ", {
      theme: "dark",
    });
    try {
      let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
      let contract = await getContractInstance(EcommerceAddress, EcommerceAbi);

      let balance = await nftInstance.balanceOf(pasteAddress);
      balance = +balance.toString();

      let isExist = await contract.checkIsUser(pasteAddress);
      let isVerified = balance == 1 ? true : false;
      setVerified(isVerified && isExist);
      if (isVerified && isExist) {
        toast.update(id, {
          render: "Valid User !",
          type: "success",
          isLoading: false,
          theme: "dark",
          icon: " ✅ ",
          autoClose: true,
        });
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);

        await sleep(5000);
        window.location.href = "/";
      } else {
        toast.update(id, {
          render: "Not Valid User !",
          type: "info",
          isLoading: false,
          theme: "dark",
          icon: " ❌ ",
          autoClose: true,
          delay: 1000,
        });
        await sleep(3000);
        window.location.href = "/register-user";
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

  const getUserFullDteails = async () => {
    try {
      let contract = await getContractInstance(EcommerceAddress, EcommerceAbi);
      let userData = await contract.getUserDetails(address);
      let brandID = await contract.brandID();
      brandID = +brandID.toString();
      const brandBalances = [];
      for (let i = 1; i <= brandID; i++) {
        let brand = await contract.getBrandTokenBalance(address, i);
        brandBalances.push({
          id: i,
          balance: +brand.toString(),
        });
      }
      let user = {
        id: +userData["id"].toString(),
        totalEtherSpent: +userData["totalEtherSpent"].toString(),
        totalTokenRewards: +userData["totalTokenRewards"].toString(),
        numberOfRefferrels: +userData["numberOfRefferrels"].toString(),
        totalLoyalityTokenBalance:
          +userData["totalLoyalityTokenBalance"].toString(),
        products: userData["id"],
        brandBalances,
      };
      setUser(user);
    } catch (error) {
      console.log(error);
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
      const transaction = await contract.registerUser(_loyalityReward, {
        from: address,
      });
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
  function formatAddress(address) {
    let firstPart = address.substring(0, 8);
    let lastPart = address.substring(address.length - 5, address.length);
    return (firstPart + "..." + lastPart).toUpperCase();
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
      let brandDetail = {
        id: +brand["id"].toString(),
        name: brand["name"],
        symbol: brand["symbol"],
        tokenPercentage: +brand["tokenPercentage"].toString(),
        brandAddress: brand["brandAddress"],
        brandOwner: brand["brandOwner"],
        basePrice: +brand["basePrice"].toString(),
      };
      setBrandFullDetails(brandDetail);
      return brandDetail;
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
      console.log("Token Rewad", tokenReward);
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
      _price,
      { from: address, value: _price }
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
    isTodayFestival();
  }, []);

  useEffect(() => {
    if (!signer) return;
    (async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
      setProducts(data);
    })();
    getUserFullDteails();
    brandDetails(1);
  }, [signer, address]);

  return (
    <UserDataContext.Provider
      value={{
        checkVerification,
        verified,
        confetti,
        products,
        registerUserUsingNFTVerification,
        changePercentage,
        changeBasePrice,
        brandDetails,
        brandFullDetails,
        formatAddress,
        purchaseProduct,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);
