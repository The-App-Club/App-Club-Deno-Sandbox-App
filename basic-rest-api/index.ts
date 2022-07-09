export default {
  async fetch(request: Request, env: any) {
      const url = new URL(request.url)
      const search = new URLSearchParams(url.search)
      const name = search.get('name') || 'Somebody'

      try {
          return new Response(`${name} ${env.SUFFIX}`)
      } catch (e) {
          return new Response(e.message)
      }
  },
}