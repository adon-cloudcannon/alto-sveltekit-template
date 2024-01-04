import { error } from '@sveltejs/kit'


export async function load({ params }) {        
	try {        
		if(params.path === '')
			params.path = 'index'
		const pages = import.meta.glob("../../pages/**/*.md")
		const match = pages[`../../pages/${params.path}.md`]
		const page = await match()

		return {
			content: page.default,
			meta: page.metadata
		}
	} catch (e) {
        console.log(e)
		throw error(404, `Could not find ${params.path}`)
	}
}