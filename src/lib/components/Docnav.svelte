<script>
    import Docnavlist from "./Docnavlist.svelte";

    import {side_nav_title} from '@data/nav.json';
    
</script>

<nav class="docnav" aria-label="{side_nav_title}">
    <span class="docnav-title">{side_nav_title}</span>
    <div id="docnav-inner" class="docnav-inner">
        <Docnavlist />
    </div>
</nav>