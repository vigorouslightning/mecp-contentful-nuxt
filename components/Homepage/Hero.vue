<template>
  <section class="bg-hero full-height home container-fluid">
    <img title="MECP" :src="hero.image" alt="MECP" />
    <div id="mission-statement" class="content sticky-item">
      <h1 class="title">
        <p v-html="hero.text"></p>
      </h1>
      <br /><br />
      <section v-if="nav.length > 0">
        <div class="buttons container" v-if="nav.length > 0">
          <div
            class="col-md-6 col-lg-4"
            v-for="item in nav"
            :key="item.slug"
          >
            <router-link
              class="btn btn-primary btn-lg outline"
              :to="{
                path: `/${item.slug}`,
                params: { slug: item.slug, id: item.id }
              }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </section>
    </div>
    <a
      class="scroll-down-button icon-down-arrow"
      href="/index.html#aboutMECP"
    ></a>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const textOptions = {
  renderMark: {
    [MARKS.BOLD]: text => `<strong>${text}</strong>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      return next(node.content);
    }
  }
};

export default {
  name: 'Hero',
  props: {
    hero: Object
  },
  data: () => ({
    nav: Array,
  }),
  computed: {
    ...mapState('nav', ['navItems']),
  },
  created() {
    this.buildNav();
  },
  methods: {
    ...mapActions({
      fetchNav: 'nav/fetch'
    }),
    async buildNav() {
      let nav = Array;
      let n = this.navItems;
      if (Array.isArray(n) && n.length) nav = n;
      else nav = await this.fetchNav();
      // only want the top 3
      this.nav = nav.slice(0, 3);
    }
  }
};
</script>
