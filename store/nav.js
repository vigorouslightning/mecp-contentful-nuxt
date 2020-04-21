import api from '@/api';

const state = {
  navItems: Array
};

const getters = {
  navItems: state => (state.navItems !== undefined ? state.navItems : [])
};

const mutations = {
  SET_NAV_ITEMS(state, navItems) {
    state.navItems = navItems;
  }
};

const actions = {
  async fetch({ commit }) {
    let parent = await api.contentful.getMainNav();
    let nav = mapChild(parent);
    commit('SET_NAV_ITEMS', nav);
    return nav;
  }
};

const mapChild = parent => {
  return parent.map(item => {
    const children = item.fields.children;
    return {
      id: item.sys.id,
      slug: item.fields.slug,
      name: item.fields.name,
      parent: item.fields.parent,
      children:
        children !== undefined && children.length > 0 ? mapChild(children) : []
    };
  });
};

const navModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default navModule;
