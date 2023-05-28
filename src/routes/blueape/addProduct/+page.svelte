<script>
	// @ts-ignore
	import Sidebar from '/src/lib/components/sidebar/Sidebar.svelte';
	// @ts-ignore
	import Footer from '/src/lib/components/footers/Footer.svelte';
	// @ts-ignore
	import Header from '/src/lib/components/headers/Header.svelte';
	// @ts-ignore
	import AddProductForms from '/src/lib/components/forms/FormAddProduct.svelte';
</script>

<Sidebar />
<div class="relative md:ml-64 bg-blueGray-100">
	<Header />
	<div class="px-4 md:px-10 mx-auto w-full">
		<AddProductForms />
		<Footer />
	</div>
</div>
