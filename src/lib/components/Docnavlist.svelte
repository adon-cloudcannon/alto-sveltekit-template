<script>
    const paths = import.meta.glob('/src/pages/**/*.md', { eager: true })
    let navigation = []
    let homepage = {}
    for(const path in paths)
    {
        const file = paths[path]
        if(path == "/src/pages/index.md")
            homepage = file.metadata
        else
            navigation.push(file.metadata)
    }
    const root_pages = navigation.filter(x => x.nav_section === "Root").sort((a,b) => a.weight - b.weight)
    const _non_root_pages = navigation.filter(x => x.nav_section !== "Root").sort((a,b) => a.weight - b.weight)
    let non_root_pages = {}
    _non_root_pages.forEach(page => {
        if(non_root_pages[page.nav_section] == null)
            non_root_pages[page.nav_section] = [page]
        else
            non_root_pages[page.nav_section].push(page)
    })

    console.log(non_root_pages)
</script>

<ol class="docnav-list">
    <li class="active"> <!-- TODO make the right one active -->
        <a href="/">{ homepage.nav_title }</a>
    </li>
    {#each root_pages as nav}
        <li>
            {nav.title}
        </li>
    {/each}

    {#each Object.entries(non_root_pages) as [key,items]}
        <p class="docnav-title">{key}</p>
        <ol class="docnav-list">
        {#each items as nav}
            <li>
                {nav.title}
            </li>
        {/each}
        </ol>
    {/each}
</ol>