<script>
	// @ts-ignore
	import HeaderHome from '/src/lib/components/headers/HeaderHome.svelte';
	// @ts-ignore
	import About from '/src/routes/home/about/about.svelte';
	// @ts-ignore
	import Footer from '/src/lib/components/footers/Footer.svelte';
	// @ts-ignore
	import Feature from '/src/routes/home/feature/feature.svelte';
	// @ts-ignore
	import BannerHome from '/src/lib/components/banners/BannerHome.svelte';
	// @ts-ignore
	import CarouselHome from '/src/lib/components/carousel/CarouselHome.svelte';
</script>

<HeaderHome />
<div>
	<CarouselHome />
	<BannerHome />
	<About />
	<Feature />
</div>
<Footer />
