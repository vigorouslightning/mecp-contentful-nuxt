<template>
  <section
    class="padding-top-sm padding-bottom-sm"
    :style="promo.backgroundImage"
    style="background-size: cover;"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-3 col-lg-9">
          <h2>
            <p>{{ promo.title }}</p>
          </h2>
        </div>
      </div>
      <div class="row padding-vertical-lg">
        <div class="col-lg-offset-3 col-lg-9" v-html="promo.description"></div>
      </div>
      <div v-if="promo.showLearnMoreLink" class="row">
        <div class="col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4">
          <router-link
            :to="{
              name: 'page',
              params: {
                slug: promo.relatedContent.slug,
                id: promo.relatedContent.entryId
              }
            }"
            class="link-button"
          >
            Learn More
            <span>&gt;</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import helpers from '@/helpers';

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<strong>${text}</strong>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      if (
        node.content.length === 1 &&
        node.content[0].nodeType === 'text' &&
        node.content[0].value.match(/^ *$/) !== null
      )
        return '';
      else {
        return `<p>${next(node.content)}</p>`;
      }
    },
    [INLINES.ENTRY_HYPERLINK]: (node, next) => {
      return helpers.resolvers.inlines_entry_hyperlink(
        node,
        next(node.content)
      );
    }
  }
};

export default {
  name: 'Promo',
  props: {
    widget: Object
  },
  data: () => ({
    promo: Object
  }),
  mounted: function() {
    this.promo = this.widget.fields;
    this.promo.showBackgroundImage = this.promo.backgroundImage !== undefined;
    this.promo.backgroundImage = this.promo.showBackgroundImage
      ? {
          'background-image': `url(${this.promo.backgroundImage.fields.file.url})`
        }
      : undefined;
    this.promo.showLearnMoreLink = this.promo.linkedPage !== undefined;
    this.promo.relatedContent = {
      slug: this.promo.showLearnMoreLink
        ? this.promo.linkedPage.fields.slug
        : undefined,
      entryId: this.promo.showLearnMoreLink
        ? this.promo.linkedPage.sys.id
        : undefined
    };
    this.promo.description = documentToHtmlString(
      this.promo.description,
      options
    );

  }
};
</script>
<style lang="scss">
p {
  padding-bottom: 25px;
}
li p {
  padding-bottom: 0px;
}
</style>
