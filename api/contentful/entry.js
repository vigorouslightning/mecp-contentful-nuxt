import { client } from './client';

export default {
  async getMainNav() {
    try {
      // if (getLocalStorage('nav'))
      //   return getLocalStorage('nav');
      const response = await client.getEntries({
        content_type: 'homepage',
        'sys.id': 'process.env.VUE_APP_HOME_PAGE_ENTRY_ID',
        select: 'fields.children',
        include: 5
      });
      let children = response.items[0].fields.children;
      return children;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.err;
    }
  },

  async getHomePageContent() {
    const id =  'kwdTT7oIo0nIBfUps7FQS';
    return this.byId(id);
  },
  async getFooterContent() {
    const id =  process.env.VUE_APP_FOOTER_ID;
    return this.byId(id);
  },
  async getAsset(id) {
    const response = await client.getAsset(id);
    //setLocalStorage(id, response);
    return response;
  },
  async byId(id) {
    // if (getLocalStorage(id))
    //   return getLocalStorage(id);

      // const response = await client.getEntry(id);
      debugger;
      const response = await client.getEntries({'sys.id': id, limit: 1, include: 10});
      //setLocalStorage(id, response);
    return response;
  },

  async bySlug(slug) {
    // if (getLocalStorage(slug))
    // return getLocalStorage(slug);
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
        // setLocalStorage(slug, response.items[0]);
      return response.items[0];
    } catch (err) {
      // eslint-disable-next-line no-console
      console.err;
    }
  }
}