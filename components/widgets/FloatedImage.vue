<template>
<p><img class="responsive-image" :src="src" style="float: left; margin: 10px 15px;"></p>
</template>

<script>
export default {
  name: 'FloatedImage',
  props: {
    widget: Object
  },
  computed: {
    top() {
      return this.widget.fields.top ? `${this.widget.fields.top}px` : '0px';
    },
    right() {
      return this.widget.fields.right ? `${this.widget.fields.right}px` : '0px';
    },
    bottom() {
      return this.widget.fields.bottom ? `${this.widget.fields.bottom}px` : '0px';
    },
    left() {
      return this.widget.fields.left ? `${this.widget.fields.left}px` : '0px';
    },
    src() {
      return this.widget.fields.image.fields.file.url;
    },
    float() {
      return this.widget.fields.float;
    }
  }
};
</script>
