<template>
  <ul class="main-nav hidden-sm-down">
    <li
      v-for="item in navItems"
      :key="item.slug"
      :class="isCurrent(item.slug)"
    >
      <router-link
        :to="{
          path: `/${item.slug}`,
          params: { slug: item.slug, id: item.id }
        }"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  // name: 'Main',
  // computed: {
  //   ...mapState('nav', ['navItems']),
  //   slug() {
  //     return this.$route.params.slug;
  //   },
  // },
  // // watch: {
  // //   $route() {
  // //   this.buildNav(this.slug);
  // //   }
  // // },
  // created() {
  //   this.buildNav();
  // },
  // methods: {
  //   ...mapActions({
  //     fetchNav: 'nav/fetch'
  //   }),
  //   buildLink(item) {
  //     let slug = this.$route.params.slug;
  //     let subNav = this.$route.params.subNav;
  //     if (subNav === undefined || item.slug !== subNav)
  //       return `${this.$route.path}/${item.slug}`;

  //     return `/${slug}/${subNav}`;
  //   },
  //   buildNav() {
  //     let n = this.navItems;
  //     if (n === undefined || n.length === 0 || n[0] === undefined)
  //       this.fetchNav();
  //   },
  //   isCurrent(item) {
  //     let route = this.$route;
  //     if (
  //       (item === route.params.slug && route.params.subNav === undefined) ||
  //       route.params.subNav === item
  //     )
  //       return 'current-page';
  //   }
  // }
};
</script>
