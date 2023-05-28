<script>
	import { createPopper } from '@popperjs/core';
	import { Registry } from '$lib/auth/Registry';
	let dropdownPopoverShow = false;
	// @ts-ignore
	let btnDropdownRef;
	// @ts-ignore
	let popoverDropdownRef;
	// @ts-ignore
	const toggleDropdown = (event) => {
		event.preventDefault();
		if (dropdownPopoverShow) {
			dropdownPopoverShow = false;
		} else {
			dropdownPopoverShow = true;
			// @ts-ignore
			createPopper(btnDropdownRef, popoverDropdownRef, {
				placement: 'bottom-start'
			});
		}
	};
	let logout = () => {
		Registry.auth.logout();
	};
</script>

<div>
	<a
		class="text-blueGray-500 block"
		href="#a"
		bind:this={btnDropdownRef}
		on:click={toggleDropdown}
	>
		<div class="items-center flex">
			<span
				class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
			>
				<img alt="..." class="w-full rounded-full align-middle border-none shadow-lg" src="/img/person.jpeg" />
			</span>
		</div>
	</a>
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
			? 'block'
			: 'hidden'}"
	>
		<a
			href="#a"
			on:click={(e) => e.preventDefault()}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
		>
			<div class="text-center font-bold">Ronaldo Sandoval</div>
			<div>Ronaldo.Sandoval@gmail.com</div>
		</a>
		<div class="h-0 my-2 border border-solid border-blueGray-100" />
		<a
			href="#a"
			on:click={(e) => e.preventDefault()}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
		>
			<div style="display: flex; align-items: center;">
				<img
					src="/svg/profile.svg"
					alt="userIco"
					style="max-width: 20px; max-height: 20px; margin-right: 5px;"
				/>
				<span>My Profile</span>
			</div>
		</a>
		<a
			href="#a"
			on:click={(e) => e.preventDefault()}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
		>
			<div style="display: flex; align-items: center;">
				<img
					src="/svg/contacts.svg"
					alt="ContactsIco"
					style="max-width: 20px; max-height: 20px; margin-right: 5px;"
				/>
				<span>My Contacts</span>
			</div>
		</a>
		<div class="h-0 my-2 border border-solid border-blueGray-100" />
		<a
			href="#a"
			on:click={(e) => e.preventDefault()}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
		>
			<div style="display: flex; align-items: center;">
				<img
					src="/svg/logout.svg"
					alt="logoutIco"
					style="max-width: 20px; max-height: 20px; margin-right: 5px;"
				/>
				<button on:click={logout}>Log Out</button>
			</div>
		</a>
	</div>
</div>
