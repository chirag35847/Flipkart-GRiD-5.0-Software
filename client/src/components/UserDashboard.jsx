import React from "react";

const Icons = {
  market: () => (
    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  dashboard: () => (
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  ),
  favourites: () => (
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  ),
  trending: () => (
    <path
      fillRule="evenodd"
      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
      clipRule="evenodd"
    />
  ),
  collection: () => (
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
  ),
  wallet: () => (
    <>
      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
      <path
        fillRule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        clipRule="evenodd"
      />
    </>
  ),
  settings: () => (
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  ),
  logout: () => (
    <path
      fillRule="evenodd"
      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
      clipRule="evenodd"
    />
  ),
};
const items = [
  {
    key: "1",
    artist: 4,
    image: "https://assets.codepen.io/3685267/nft-dashboard-art-0.jpg",
    price: "3.8",
    title: "People Abstract Painting",
    timeLeft: 84670923,
  },
];
const artists = [
  {
    name: "Tyler Doyle",
    handler: "@d0yl3",
    image:
      "https://mir-s3-cdn-cf.behance.net/user/230/5ee6e01040915097.6114013e6128a.jpg",
  },
  {
    name: "Uriah Gardner",
    handler: "@uriah",
    image: "https://assets.codepen.io/3685267/nft-dashboard-pro-2.jpg",
  },
  {
    name: "Colin Mitchell",
    handler: "@colin",
    image: "https://assets.codepen.io/3685267/nft-dashboard-pro-4.jpg",
  },
  {
    name: "Emely Hall",
    handler: "@emely",
    image: "https://assets.codepen.io/3685267/nft-dashboard-pro-3.jpg",
  },
  {
    name: "Raphael Scott",
    handler: "@raphael",
    image: "https://assets.codepen.io/3685267/nft-dashboard-pro-5.jpg",
  },
];


function ArtworkSelector({ text, index }) {
  return (
    <li className="">
      <button
        className={` ${
          index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"
        }`}
      >
        {text}
      </button>
    </li>
  );
}

function Content() {
  return (
    <div className="">
      <h1 className="text-4xl  px-3 mt-3">Dashboard</h1>
      <h2 className="text-zinc-500 px-3 mt-2">
        Buy and sell digital artwork, NFT collection
      </h2>
      <div className="p-3">
        <div
          className="w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4"
          style={{
            backgroundImage:
              "url(https://assets.codepen.io/3685267/nft-dashboard-art-6.jpg)",
          }}
        >
          <h2 className="font-bold text-3xl max-w-sm">
            Find a collection of best artwork here
          </h2>
          <button className="py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3">
            Explore Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
        <ul className="inline-flex space-x-3 ">
          {["Art", "Collectables", "Music", "Sport"].map((text, index) => (
            <ArtworkSelector key={text} text={text} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Header() {
    return (
      <div className="flex flex-wrap p-3 items-center text-white sticky top-0 bg-black h-fit  md:h-20 z-30">
        <div className="flex items-center grow md:grow-0 w-fit md:w-48">
          <div className="w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 grid place-items-center rounded-full font-bold text-white  text-2xl">
            D
          </div>
          <div className="ml-2 font-bold text-xl">Flipkart Grid 5.0</div>
        </div>
  
        <div className="flex items-center order-3 md:order-3 pl-0 md:pl-3">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <div className="absolute right-0 top-0 w-3 h-3 bg-zinc-900 rounded-full p-0.5">
              <div className="bg-red-500 w-full h-full  rounded-full" />
            </div>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/230/5ee6e01040915097.6114013e6128a.jpg"
            alt="user"
            className="w-10 h-10 rounded-full ml-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
  
        <div className="flex mt-4 md:mt-0 order-2 md:order-2 w-full grow md:w-fit ">
          <button className="w-10 h-10 rounded-md bg-zinc-700 grid place-items-center mr-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <form className="relative grow md:max-w-lg">
            <input
              type="text"
              className="bg-zinc-700 pl-3 pr-10 h-10 rounded-md w-full "
              placeholder="search for collection"
            />
            <span className="absolute right-0 top-0 bottom-0 w-10 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </form>
        </div>
      </div>
    );
  }
function SidebarItem({ text, index }) {
  return (
    <li className="relative">
      {index === 1 ? (
        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full" />
      ) : null}
      <a
        href="#"
        className={`pl-4 flex items-center capitalize   ${
          index === 1 ? "text-white" : "text-zinc-500"
        }`}
      >
        <span
          className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
            index === 1 ? "bg-fuchsia-600" : "bg-zinc-800"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {Icons[text]()}
          </svg>
        </span>
        {text}
      </a>
    </li>
  );
}

function SidebarLeft() {
  return (
    <div className="hidden lg:flex bg-black h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
      <ul className="space-y-8">
        {[
          "market",
          "dashboard",
          "favourites",
          "trending",
          "collection",
          "wallet",
          "settings",
        ].map((key, index) => (
          <SidebarItem key={key} text={key} index={index} />
        ))}
      </ul>
      <div className="pb-5  px-4">
        <hr className="mb-5 text-zinc-700" />
        <a href="#" className="py-2 flex items-center  text-zinc-500">
          <span className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {Icons.logout()}
            </svg>
          </span>
          Logout
        </a>
      </div>
    </div>
  );
}

const UserDashboard = () => {
  return (
    <>
      <SidebarLeft />
      <Header />
      <div className="flex bg-black flex-col height-[100%] md:flex-row border border-red-500 px-2 text-white">
        <div className="w-48 hidden lg:block shrink-0" />
        <div className=" grow  ">
          <Content />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
