import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import BackGradients from "./BackGradients";
import { useUserDataContext } from "../contexts/UserContextProvider";

const AdminDashboard = () => {
  const [percentage, setPercentage] = useState(0);
  const [baseprice, setBasePrice] = useState(0);
  const { address } = useAccount();
  const {
    changePercentage,
    changeBasePrice,
    brandFullDetails,
    brandDetails,
    formatAddress,
  } = useUserDataContext();
  useEffect(() => {
    (async () => {
      await brandDetails(1);
      console.log(brandFullDetails);
    })();
  }, []);

  const changingPercentage = async () => {
    if (!percentage) {
      alert("Please enter percentage");
      return;
    }
    await changePercentage(percentage, 1);
    setPercentage(0);
  };
  const changingBasePrice = async () => {
    if (!baseprice) {
      alert("Please enter percentage");
      return;
    }
    await changeBasePrice(baseprice, 1);
    setBasePrice(0);
  };
  return (
    <>
      <BackGradients page="admin" />
      <div
        className="flex flex-col lg:flex-row"
 
      >
        <div className="px-4 py-2 bg-black lg:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-8 h-8 text-white lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden lg:block mt-10">
            <div className="my-2 mb-6">
              <h1 className="text-2xl font-bold text-white">Brand Dashboard</h1>
            </div>
            <ul className="mt-10">
              <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a
                  href="/"
                  className="inline-block w-full h-full px-3 py-2 font-bold text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-6 h-6 mr-2 -mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </a>
              </li>
              <li className="mb-2 bg-gray-800 rounded shadow">
                <a
             
                href="/admin-dashboard"
                  className="inline-block w-full h-full px-3 py-2 font-bold text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-6 h-6 mr-2 -mt-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a
                  
                  className="inline-block w-full h-full px-3 py-2 font-bold text-white  cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-6 h-6 mr-2 -mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Reports
                </a>
              </li>
              <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a
                 
                  className="inline-block w-full h-full px-3 py-2 font-bold text-white  cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-6 h-6 mr-2 -mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Inbox
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 py-2 bg-black">
          <div className="container mx-auto mt-12">
            <div className="grid gap-4 lg:grid-cols-3 mt-10">
              <div className="flex items-center px-4 py-6  backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    #00{brandFullDetails?.id}
                  </h4>
                  <div className="text-gray-500">Brand ID</div>
                </div>
              </div>
              <div className="flex items-center px-4 py-6 backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {brandFullDetails?.name}
                  </h4>
                  <div className="text-gray-500">Brand Name</div>
                </div>
              </div>
              <div className="flex items-center px-4 py-6 backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {brandFullDetails?.symbol}
                  </h4>
                  <div className="text-gray-500">Brand Symbol</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 mt-10">
              <div className="flex items-center px-4 py-6  backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {brandFullDetails?.tokenPercentage}
                  </h4>
                  <div className="text-gray-500">Token Percentage</div>
                </div>
              </div>
              <div className="flex items-center px-4 py-6 backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {brandFullDetails?.basePrice}
                  </h4>
                  <div className="text-gray-500">Brand Base Price</div>
                </div>
              </div>
              <div className="flex items-center px-4 py-6 backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {formatAddress(
                      brandFullDetails?.brandOwner
                        ? brandFullDetails?.brandOwner
                        : "oxabcde"
                    )}
                  </h4>
                  <div className="text-gray-500">Brand Owner</div>
                </div>
              </div>
              <div className="flex items-center px-4 py-6 backdrop-blur-lg border  rounded-md shadow-md">
                <div className="p-3 bg-indigo-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mx-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {formatAddress(
                      brandFullDetails?.brandAddress
                        ? brandFullDetails?.brandAddress
                        : "oxabcde"
                    )}
                  </h4>
                  <div className="text-gray-500">Brand Token Address</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 mt-10 w-[100%] ">
              <div className="">
                <label
                  for="basePrice"
                  className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                >
                  <input
                    onChange={(e) => setBasePrice(e.target.value)}
                    className="
              
              border 
                     w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-1 md:py-4 md:pr-1 lg:py-4 lg:pr-1 pl-4 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
                    type="number"
                    name="basePrice"
                    id="basePrice"
                    placeholder="Change base price "
                  />
                </label>
                <button
                  onClick={changingBasePrice}
                  className="form-input w-full mt-1 rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ] cursor-pointer"
                >
                  Change Price
                </button>
              </div>
              <div>
                <label
                  for="percentage"
                  className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                >
                  <input
                    onChange={(e) => setPercentage(e.target.value)}
                    className="form-input 
              
              border 
              w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-1 md:py-4 md:pr-1 lg:py-4 lg:pr-1 pl-4 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
                    type="number"
                    name="percentage"
                    id="percentage"
                    placeholder="Change percentage for tokens"
                  />
                </label>
                <button
                  onClick={changingPercentage}
                  className="form-input w-full mt-1 rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ] cursor-pointer"
                >
                  Change Percentage
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full  overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full ">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Name
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Email
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Status
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Edit
                        </th>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full"
                                src="https://source.unsplash.com/user/erondu"
                                alt="admin dashboard ui"
                              />
                            </div>

                            <div className="ml-4">
                              <div className="text-sm font-medium leading-5 text-gray-900">
                                John Doe
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-500">
                            john@example.com
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            Active
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </td>
                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
