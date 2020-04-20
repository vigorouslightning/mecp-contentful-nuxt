<template>
  <section>
  <iframe frameborder="0" :height="height"  :width="width" :src="src" :title="name"></iframe>
  </section>
</template>

<script>
export default {
  name: 'FormStack',
  props: {
    widget: Object
  },
  computed: {
    width() {
      return this.widget.fields.width ? `${this.widget.fields.width}px` : '100%';
    },
    height() {
      return this.widget.fields.height ? `${this.widget.fields.height}px` : '100%';
    },
    src() {
      return `https://cea.formstack.com/forms/${this.widget.fields.slug}`;
    },
    name() {
      return this.widget.fields.name;
    }
  }
};
</script>
