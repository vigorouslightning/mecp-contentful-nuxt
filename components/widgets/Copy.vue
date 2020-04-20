<template>
  <section>
    <h3>{{ title }}</h3>
    <div v-html="text"></div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import helpers from '@/helpers';

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<strong>${text}</strong>`
  },
  renderNode: {
    // ['paragraph']: (node, next) => {
    //   debugger;
    //   return `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`;
    // },
    [INLINES.EMBEDDED_ENTRY]: (node, next) => {
      let obj = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'floatedImage':
          return `<img alt="" max-width="100%" src="${obj.image.fields.file.url}" style="float: ${obj.floatDirection}; margin: 10px 15px;">`;
      }
    },
    [INLINES.ENTRY_HYPERLINK]: (node, next) => {
      return helpers.resolvers.inlines_entry_hyperlink(
        node,
        next(node.content)
      );
    },
    [INLINES.ASSET_HYPERLINK]: (node, next) => {
      return `<a href="${node.data.target.fields.file.url}">${next(node.content)}</a>`;
    }
  }
};

export default {
  name: 'Copy',
  props: {
    widget: Object
  },
  computed: {
    title() {
      return this.widget.fields.title;
    },
    text() {
      return documentToHtmlString(this.widget.fields.text, options);
    }
  }
};
</script>

// contentful strips out <br /> tags when documentToHtmlString is called. This handles that.
<style lang="scss">
p {
  white-space: pre-wrap;
}
</style>
