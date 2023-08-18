import React, { useEffect, useState } from "react";

import { useUserDataContext } from "../../contexts/UserContextProvider";
const Transactions = () => {
  const { user } = useUserDataContext();
  console.log(user);
  return (
    <>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow-md rounded-lg">
          <table class="w-full leading-normal">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  Brand Name
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  Amount Paid
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  Timestamp
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  Loyality Tokens
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  Brand Tokens
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-normal text-gray-700 uppercase tracking-wider">
                  View Trx
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Molly Sanders
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000004</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                  <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-center">
                  10
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-center">
                  10
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-right">
                  <a href="/">View</a>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Molly Sanders
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000004</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                  <p class="text-gray-600 whitespace-no-wrap">USD</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-center">
                  10
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-center">
                  10
                </td>
                <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm text-right">
                  <a href="/">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transactions;
