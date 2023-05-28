<script>
	// @ts-ignore
	import CardLineChart from '/src/lib/components/cards/CardLineChart.svelte';
	// @ts-ignore
	import CardBarChart from '/src/lib/components/cards/CardBarChart.svelte';
	// @ts-ignore
	import CardTopProduct from '/src/lib/components/cards/CardTopProduct.svelte';
	// @ts-ignore
	import CardTopTraffic from '/src/lib/components/cards/CardTopTraffic.svelte';
	// @ts-ignore
	import AdminNavbar from '/src/lib/components/headers/AdminNavbar.svelte';
	// @ts-ignore
	import SidebarAdmin from '/src/lib/components/sidebar/SidebarAdmin.svelte';
	// @ts-ignore
	import HeaderStats from '/src/lib/components/headers/HeaderStats.svelte';
	// @ts-ignore
	import Footer from '/src/lib/components/footers/FooterAdmin.svelte';
</script>

<div>
	<SidebarAdmin />
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
		<HeaderStats />
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<div>
				<div class="flex flex-wrap">
					<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						<CardLineChart />
					</div>
					<div class="w-full xl:w-4/12 px-4">
						<CardBarChart />
					</div>
				</div>
				<div class="flex flex-wrap mt-4">
					<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						<CardTopProduct />
					</div>
					<div class="w-full xl:w-4/12 px-4">
						<CardTopTraffic />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</div>
</div>
