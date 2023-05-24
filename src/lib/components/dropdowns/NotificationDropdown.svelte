<script>
	import { createPopper } from '@popperjs/core';
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
</script>

<div>
	<div>
		<a
			class="text-blueGray-500 block py-1 px-3"
			href="#home"
			bind:this={btnDropdownRef}
			on:click={toggleDropdown}
		>
			<i>
				<img src="/svg/notification.svg" alt="notificactionIcon" style="width: 15px;" />
			</i>
		</a>
	</div>
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
			? 'block'
			: 'hidden'}">
		<a
			href="#pablo"
			on:click={(e) => e.preventDefault()}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
			>Notification 1</a
		>
        <div class="h-0 my-2 border border-solid border-blueGray-100" />
	</div>
</div>
