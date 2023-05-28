<div class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
    <div class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
        <div class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">
                Products
            </h2>
        </div>
        <div class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
            <div class="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6">
                <p class="text-base text-gray-600 dark:text-gray-400" id="page-view">
                    Viewing 1 - 20 of 60
                </p>
                <button
                    class="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Goto previous page "
                    role="button"
                >
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg6.svg" alt="" />
                    <img class="dark:block hidden" src="../svgs/svg6dark.svg" alt="" />
                </button>
                <button class="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer" aria-label="goto next page" role="button" >
                    <img class="transform rotate-180 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg6.svg" alt="" />
                    <img class="transform rotate-180 dark:block hidden" src="../svgs/svg6dark.svg" alt="" />
                </button>
            </div>
            <div class="lg:ml-6 flex items-center">
                <button
                    role="button"
                    aria-label="add table"
                    class="text-white ml-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border border-transparent bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                >
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg7.svg" alt="plus" />
                </button>
            </div>
        </div>
    </div>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
        <table class="min-w-full bg-white dark:bg-gray-800">
            <thead>
                <tr class="w-full h-16 border-gray-300 border-b py-8">
                    <th class="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </th>
                    <th role="columnheader" class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Image Product</th>
                    <th role="columnheader" class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">ID Product</th>
                    <th role="columnheader" class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Name Product</th>
                    <th role="columnheader" class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Amount</th>
                    <th role="columnheader" class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <div class="relative w-10">
                            <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                        </div>
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr class="h-24 border-gray-300 border-b">
                    <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                            placeholder="check box"
                            type="checkbox"
                            class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <img src="/img/Product.jpg" alt="..." class="w-12 rounded-full border-5" />
                    </td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pants</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                    <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                    <td class="pr-8 relative">
                        <button
                            aria-label="dropdown"
                            role="button"
                            class="dropbtn text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/compact_table_with_actions_and_select-svg9.svg" alt="dropdown" />
                        </button>
                        <div class="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                            <ul class="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Edit
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Duplicate
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
