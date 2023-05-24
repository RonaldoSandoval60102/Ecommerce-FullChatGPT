<script>
	// @ts-ignore
	import Sidebar from '/src/lib/components/Sidebar/siderbar.svelte';
	// @ts-ignore
	import Footer from '/src/lib/components/footers/footer.svelte';
	// @ts-ignore
	import Header from '/src/lib/components/headers/header.svelte';
    // @ts-ignore
    import AddProductForms from '/src/lib/components/forms/formAddProduct.svelte';
</script>

<div>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-100">
		<Header />
		<div class="px-4 md:px-10 mx-auto w-full">
            <AddProductForms />
			<Footer />
		</div>
	</div>
</div>
