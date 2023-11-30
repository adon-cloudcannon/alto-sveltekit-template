<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Docnavlist from './Docnavlist.svelte';

    let logo = {};
    let nav_links = [];
    let side_nav_title;
    let project_name;

    onMount(async () => {
        if (browser) {
            const nav_response = await fetch(`/nav.json`);
            const nav = await nav_response.json();
            ({ logo, nav_links, side_nav_title } = nav)    
            const meta_response = await fetch(`/meta.json`);
            const meta = await meta_response.json();
            ({ project_name } = meta)           
        }
    });	
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
                <button id="js-dark-mode" class="theme-btn" aria-label="dark mode toggle">                    
                    <!-- TODO svg -->
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