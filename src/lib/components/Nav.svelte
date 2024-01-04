<script>
    import Docnavlist from '$lib/components/Docnavlist.svelte';

    import { project_name } from '@data/meta'
    import { logo, nav_links, side_nav_title } from '@data/nav'

    import mode from '$lib/shared/stores/mode';

    function toggleMode() {
        const isDark = $mode === 'dark';
        isDark ? mode.set('light') : mode.set('dark');
    }    
</script>

<!--<div class="header" x-data="{ isOpen: false }">-->
<div class="header">
    <nav class="row" aria-label="Project Navigation">
        <a class="logo-link" href="/">          
            {#if logo.logo_image }
                <img class="logo logo-light" src="{logo.logo_image}" alt="{project_name} Logo">
                {#if logo.logo_image_dark }
                    <img class="logo logo-dark" src="{logo.logo_image_dark}" alt="{project_name} Logo">
                {/if}
            {:else}
                <span class="logo-heading">{ logo.logo_heading ? logo.logo_heading : "logo"}</span>
            {/if}          
        </a>
          <span class="editor-link"><a href="cloudcannon:collections/data/nav.yml" data-cms-bind-style="sidebar" class="btn"><strong>&#9998;</strong>Edit Navigation</a></span>
      <div class="nav-content">
            <ul>
                {#each nav_links as link}
                    {@const sanitized_url = link.link_url.startsWith("http") ? link.link_url : "/"+encodeURI(link.link_url) }
                <li>
                    <a target="{ link.link_icon_path ? "_blank" : "_self" }" href="{ sanitized_url }">                   
                        {link.link_label}                     
                        {#if link.link_icon_path}
                            <img class="nav-links" src="{ link.link_icon_path }" alt="{project_name} on { link.link_title }" width="32" height="32">
                        {/if}
                    </a>
                </li>
                {/each}
            </ul>
               
            
            <div class="dark-mode-toggle">
                <button id="js-dark-mode" class="theme-btn" aria-label="dark mode toggle" on:click="{toggleMode}">                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/></svg>
                </button>
            </div>
            <div class="ham">
                <button :aria-expanded="isOpen"
                        aria-controls="docnav-inner docnav-inner-mobile"
                        x-cloak>
                    <p>{side_nav_title} Menu</p>
                    <span></span>
               </button>
            </div>
      </div>
    </nav>

    <nav class="docnav-mob" aria-label="{side_nav_title} Navigation" :aria-expanded="isOpen">
        <div id="docnav-inner-mobile" class="docnav-inner" :hidden="!isOpen" x-cloak>
            <Docnavlist />
        </div>
    </nav>
</div>