<script>
    // @ts-ignore
    import Home from '/src/routes/home/+page.svelte';
    // @ts-ignore
    import BlueApe from '/src/routes/blueape/+page.svelte';
    // @ts-ignore
	import AuthGuard from '$lib/auth/AuthGuard.svelte'; 
</script>

<AuthGuard manual={true}>
	<div slot="authed" let:user>
		<BlueApe />
	</div>
	<div slot="not_authed">
        <Home />
    </div>
</AuthGuard>