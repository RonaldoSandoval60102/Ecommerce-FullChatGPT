<script>
	// @ts-ignore
	import AdminNavbar from '/src/lib/components/headers/AdminNavbar.svelte';
	// @ts-ignore
	import Sidebar from '/src/lib/components/sidebar/SidebarAdmin.svelte';
	// @ts-ignore
	import HeaderStats from '/src/lib/components/headers/HeaderStats.svelte';
	// @ts-ignore
	import FooterAdmin from '/src/lib/components/footers/FooterAdmin.svelte';
	// @ts-ignore
	import ListProduct from '/src/lib/components/listProduct/ListProduct.svelte';
</script>

<div>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
		<HeaderStats />
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<ListProduct />
			<FooterAdmin />
		</div>
	</div>
</div>
