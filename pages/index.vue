<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <hero v-bind:hero="hero" />
    <About v-bind:about="about" />
    <Promo
      v-for="(promo, index) in content.promoZone"
      :key="index"
      v-bind:widget="promo"
    />

  </section>
</template>

<script>
import Hero from '@/components/Homepage/Hero';
import About from '@/components/Homepage/About';
import Promo from '@/components/Homepage/Promo';

import api from '@/api';
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
  name: 'Home',
  components: {
    Hero,
    About,
    Promo
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({
    content: Array,
    pageTitle: String,
    promos: Object
  }),
  computed: {
    loaded() {
      return Object.keys(this.content).length > 0;
    },
    hero() {
      return {
        text: documentToHtmlString(this.content.heroText, textOptions),
        image: this.content.heroImage.fields.file.url,
        links: this.content.heroLinks
      }
    },
    about() {
      return {
        title: this.content.pageTitle,
        logo: this.content.mecpLogo.fields.file.url,
        text: documentToHtmlString(this.content.text, textOptions),
      }
    }
  },
  mounted: function() {
    this.getContent();
  },
  methods: {
    async getContent() {
      let response = await api.contentful.bySlug('home');
      debugger;
      this.content = response.items[0].fields;
    }
  }
};
</script>
