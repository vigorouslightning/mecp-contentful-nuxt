<template>
<div>
  <div class="row subnav">
    <div class="scrollable">
      <!-- <ul>
        <li v-if="hideOverview" :class="isCurrent($route.params.slug)">
          <router-link :to="{ name: 'page', params: { slug: $route.params.slug } }">
            Overview
          </router-link>
        </li>
        <li
          v-for="item in subNav"
          :key="item.slug"
          :class="isCurrent(item.slug)"
        >
          <router-link
            :to="{
              path: buildLink(item),
              params: { slug: item.slug, id: item.id }
            }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>  -->
    </div>
  </div>
  </div>
</template>

<script>
import api from '@/api';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SubNav',
  // data: () => ({
  //   subNav: Array,
  //   hideOverview: Boolean,
  // }),
  // computed: {
  //   ...mapState('nav', ['navItems']),
  //   slug() {
  //     return this.$route.params.slug;
  //   },
  //   display() {
  //     return Array.isArray(this.subNav) && this.subNav.length > 0
  //   }
  // },
  // watch: {
  //   $route() {
  //     this.buildSubNav();
  //   }
  // },
  // created() {
  //   this.buildSubNav();
  // },
  // methods: {
  //   ...mapActions({
  //     fetchNav: 'nav/fetch'
  //   }),
  //   buildLink(item) {
  //     let parents = getParent(item.parent.fields);
  //     return `/${parents.join('/')}/${item.slug}`;
  //   },
  //   async buildSubNav() {
  //     this.hideOverview = true;
  //     let route = this.$route;
  //     let n = this.navItems;
  //     let nav =
  //       n === undefined || n.length === 0 || n[0] === undefined
  //         ? await this.fetchNav()
  //         : n;
  //     let slug = route.params.slug;
  //     let subNav = nav.find(n => n.slug === slug);
  //     if (subNav === undefined) {
  //       let response = await api.contentful.bySlug(slug);
  //       let a = [];
  //       this.hideOverview = false;
  //       for (let child of response.fields.parent.fields.children) a.push(child.fields);
  //       this.subNav = a;
  //     } else this.subNav = subNav.children;
  //   },
  //   isCurrent(item) {
  //     let route = this.$route;
  //     if (
  //       (item === route.params.slug && route.params.subPage === undefined) ||
  //       route.params.subPage === item
  //     )
  //       return 'current-page';
  //   }
  // }
};

const getParent = child => {
  let parent = [];
  let slug = child.slug;
  if (slug !== undefined && child.parent !== undefined) {
    parent.push(slug);
    parent.concat(getParent(child.parent.fields));
  }
  return parent;
};
</script>
