<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let footer_width;
    let footer_links = [];

    onMount(async () => {
        if (browser) {
            const response = await fetch(`/footer.json`);
            const footer = await response.json();
            ({ footer_width, footer_links } = footer)            
        }
    });	
</script>

<footer style="{ footer_width === "contain" ? "max-width:1000px" : ""}">
    <span class="editor-link"><a href="cloudcannon:collections/data/footer.yml" data-cms-bind-style="sidebar" class="btn"><strong>&#9998;</strong>Edit Footer</a></span>
    {#each footer_links as link}
        {#if link.link_title }
            {#if link.url_path.startsWith("http")}
                <a href="{ link.url_path }" target="_self">{ link.link_title }</a>
            {:else}
                <a href="/{ encodeURI(link.url_path) }" target="_self">{ link.link_title}</a>
            {/if}
        {/if}
        {#if link.image_path }
            {#if link.url_path.startsWith("http")}
                <a href="{ link.url_path }" target="_blank">
                    <img class="cloudcannon" src="{ link.image_path }" alt="{ link.image_alt_text }" >
                </a>
            {:else}
                <a href="/{ encodeURI(link.url_path) }" target="_blank">
                    <img class="cloudcannon" src="{ link.image_path }" alt="{ link.image_alt_text }" >
                </a>
            {/if}
        {/if}
    {/each}
</footer>