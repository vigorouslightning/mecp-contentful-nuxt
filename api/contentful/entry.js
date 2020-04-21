import { client } from './client';

export default {
  async getMainNav() {
    try {
      // if (getLocalStorage('nav'))
      //   return getLocalStorage('nav');
      const response = await client.getEntries({
        content_type: 'homepage',
        'sys.id': 'kwdTT7oIo0nIBfUps7FQS',
        select: 'fields.children',
        include: 5
      });
      let children = response.items[0].fields.children;
      return children;
    } catch (err) {
      console.err;
    }
  },

  async getHomePageContent() {
    const id =  'kwdTT7oIo0nIBfUps7FQS';
    return this.byId(id);
  },
  async getFooterContent() {
    const id =  '4TPwz5iDzYRcdT15uLesgR';
    return this.byId(id);
  },
  async getAsset(id) {
    const response = await client.getAsset(id);
    return response;
  },
  async byId(id) {
      const response = await client.getEntries({'sys.id': id, limit: 1, include: 10});
      console.log("HOME RESPONSE: " + response);
    return response.items[0].fields;
  },

  async bySlug(slug) {
    try {
      let response = await client.getEntries({
        content_type: 'page',
        'fields.slug[in]': slug,
        limit: 1,
        include: 5
      });
      if (response === undefined || response.items === undefined || response.items.length === 0)
        response = await client.getEntries({
          content_type: 'page',
          'fields.altSlugs[in]': slug,
          limit: 1,
          include: 5
        });
        
        console.log("HELLO " + response.items[0].fields)
      return response.items[0].fields;
    } catch (err) {
      console.err;
    }
  }
}