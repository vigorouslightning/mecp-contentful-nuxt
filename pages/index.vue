<template>
  <!-- <section>
    <span>loading...</span>
  </section> -->
  <section>
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
import Header from '@/components/Header'

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
    Promo,
    Header
  },
  data: () => {
    content: Object
  },
  async asyncData() {
    let response = await api.contentful.getHomePageContent();
    return { content: response };
  },
  computed: {
    hero() {
      return {
        text: documentToHtmlString(this.content.heroText, textOptions),
        image: this.content.heroImage.fields.file.url,
        links: [],
      }
    },
    about() {
      return {
        logo: this.content.mecpLogo.fields.file.url,
        title: this.content.pageTitle,
        text: documentToHtmlString(this.content.text, textOptions),
      }
    }
  }
};
</script>
