<script>
    const paths = import.meta.glob('/src/pages/**/*.md', { eager: true })
    let navigation = []
    let homepage = {}
    for(const path in paths)
    {
        const file = paths[path]
        if(path == "/src/pages/index.md")
            homepage = file.metadata
        else{
            let permalink = path.replace("/src/pages", "")
            permalink = permalink.replace(".md", "")
            file.metadata.permalink = permalink
            navigation.push(file.metadata)
        }
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
</script>

<ol class="docnav-list">
    <li class="active"> <!-- TODO make the right one active -->
        <a href="/">{ homepage.nav_title }</a>
    </li>
    {#each root_pages as nav}
        <li>
            <a href="{nav.permalink}">{nav.title}</a>
        </li>
    {/each}

    {#each Object.entries(non_root_pages) as [key,items]}
        <p class="docnav-title">{key}</p>
        <ol class="docnav-list">
        {#each items as nav}
            <li>
                <a href="{nav.permalink}">{nav.title}</a>
            </li>
        {/each}
        </ol>
    {/each}
</ol>