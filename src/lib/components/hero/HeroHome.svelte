<script>
	import { Registry } from '$lib/auth/Registry';

	let login = () => {
		Registry.auth.login({ redirectUri: location.href });
	};
</script>
<div class="pt-32 lg:flex items-center relative z-10 container mx-auto">
    <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <img tabindex="0" aria-label="people smiling" class="mx-auto w-1000 h-1000" src="/img/Home.png" alt="people smiling" />
    </div>
    <div role="contentinfo" class="w-full lg:w-1/2 h-full">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <p tabindex="0" class="text-black-800 uppercase text-2xl mb-4">Marketplace</p>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <h1 tabindex="0" class="text-black-800 text-4xl lg:text-6xl font-black mb-8">BlueApe</h1>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <p tabindex="0" class="text-gray-800 dark:text-white font-regular mb-8">
            Explore a world of possibilities! Log in to discover exclusive offers and a personalized shopping experience.
        </p>
        <div class="text-right bg-white lg:mt-16 py-4 px-4 justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
            <button class="mx-2 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                Sign up
            </button>
            <button
                class="mx-2 my-2 ml-auto bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                on:click="{login}"
            >
                Sign in
            </button>
        </div>
    </div>
</div>
