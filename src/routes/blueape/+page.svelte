<script>
	// @ts-ignore
	import AdminNavbar from '/src/lib/components/headers/Header.svelte';
	// @ts-ignore
	import Sidebar from '/src/lib/components/sidebar/Sidebar.svelte';
	// @ts-ignore
	import HeaderStats from '/src/lib/components/headers/HeaderStats.svelte';
	// @ts-ignore
	import SidebarAdmin from '/src/lib/components/sidebar/SidebarAdmin.svelte';
	// @ts-ignore
	import Footer from '/src/lib/components/footers/FooterAdmin.svelte';
	// @ts-ignore
	import Header from '/src/lib/components/headers/Header.svelte';
	// @ts-ignore
	import CardLineChart from '/src/lib/components/cards/CardLineChart.svelte';
	// @ts-ignore
	import CardBarChart from '/src/lib/components/cards/CardBarChart.svelte';
	// @ts-ignore
	import CardTopProduct from '/src/lib/components/cards/CardTopProduct.svelte';
	// @ts-ignore
	import CardTopTraffic from '/src/lib/components/cards/CardTopTraffic.svelte';
	// @ts-ignore
	import FooterAdmin from '/src/lib/components/footers/FooterAdmin.svelte';
	// @ts-ignore
	import ListProduct from '/src/lib/components/products/ListProducts.svelte';
	import RoleGuard from '$lib/auth/RoleGuard.svelte';
	import AuthGuard from '$lib/auth/AuthGuard.svelte';
</script>

<AuthGuard manual={true} forceLogin={true}>
	<div slot="authed" let:user>
		<RoleGuard roles={['admin']} manual={true}>
			<div slot="role">
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
							<FooterAdmin />
						</div>
					</div>
				</div>
				
			</div>
			<div slot="no_role">
				<Sidebar />
				<div class="relative md:ml-64 bg-blueGray-100">
					<Header />
					<div class="px-4 md:px-10 mx-auto w-full">
						<ListProduct />
						<Footer />
					</div>
				</div>
			</div>
		</RoleGuard>
	</div>
</AuthGuard>
