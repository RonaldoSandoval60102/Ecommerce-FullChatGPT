<script>
	// @ts-ignore
	import UserDropdown from '/src/lib/components/dropdowns/UserDropdown.svelte';
	// @ts-ignore
	import NotificationDropdown from '/src/lib/components/dropdowns/NotificationDropdown.svelte';
</script>

<nav class="p-5">
	<div
		class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
	>
		<div class="w-6/12">
				<img
					src="/img/Logo.png"
					alt="notificactionIcon"
					class="float-left mr-2"
					style="width: 30px;"
				/>
				<span style="color: black;" class="font-bold">Bienvenido </span><span style="color: #2765A5;" class="font-bold">Ronaldo</span>
		</div>

		<form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
			<div class="relative flex w-full flex-wrap items-stretch">
				<span
					class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
				>
					<i>
						<img src="/svg/search.svg" alt="searchIco" />
					</i>
				</span>
				<input
					type="text"
					placeholder="Search here..."
					class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
				/>
			</div>
		</form>
		<ul class="flex-col md:flex-row list-none items-center hidden md:flex">
			<NotificationDropdown />
		</ul>
		<ul class="flex-col md:flex-row list-none items-center hidden md:flex">
			<UserDropdown />
		</ul>
	</div>
</nav>
<div class="h-0 my-2 border border-solid border-blueGray-250" />
