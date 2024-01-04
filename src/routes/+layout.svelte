<script>
    import '$lib/styles/site.scss';

    import Banner from '$lib/components/Banner.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Docnav from '$lib/components/Docnav.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import {favicon, project_name, default_og_image} from '@data/meta.json';

    import mode from '$lib/shared/stores/mode';
    import { onMount } from 'svelte';
    let root;

    onMount( () => {
        root = document.body;        
    })

    $: if(root)
        if($mode == 'dark'){
            root.classList.remove('light')
            root.classList.add('dark')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
    
    //shortcodes
    //import Diffcode from '$lib/shortcodes/diffcode.svelte';

</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.cloudcannon.com/css/TT-Norms-Pro_400_500_800.css" rel="stylesheet" type="text/css">

    <link rel="apple-touch-icon" sizes="180x180" href="{ favicon.apple_touch_icon }">
    <link rel="icon" type="image/png" sizes="32x32" href="{ favicon.large_icon }">
    <link rel="icon" type="image/png" sizes="16x16" href="{ favicon.small_icon }">
    <link rel="shortcut icon" href="{ favicon.shortcut_icon }">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta content="{project_name}" property="og:site_name">
    <meta data-pagefind-meta="image[content]" content="{default_og_image}" property="og:image">
    <meta content="article" property="og:type">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="{default_og_image}" property="twitter:image">
</svelte:head>

<Banner />
<Nav />
<div class="search">
    <!--<script src="/_pagefind/pagefind-ui.js" type="text/javascript"></script>
    <div id="search"></div>-->
</div>
<div class="column">
    <aside>
        <Docnav />
    </aside>
    <main>
        <slot/>
    </main>
</div>
<Footer />