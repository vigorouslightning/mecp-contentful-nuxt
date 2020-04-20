<template>
  <span>
    <strong>
      <a :href="href" :target="target">{{title}}</a>
    </strong>
    <span v-show="!isLast">&nbsp;|&nbsp;</span>
  </span>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    link: Object,
    isLast: Boolean
  },
  computed: {
    title() {
      return this.link.fields.title;
    },
    href() {
      return this.link.fields.target;
    },
    target() {
        return this.link.fields.newTab ? '_blank' : '';
    },
  }
};
</script>
