<template>
  <section>
    <div style="position: relative; display: block; max-width: 600px;">
      <div style="padding-top: 56.25%;">
        <iframe
          frameborder="0"
          :height="height"
          :src="widget.fields.link"
          :title="widget.fields.name"
          :width="width"
          :allow="fullscreen"
          :mozallowfullscreen="allowFullscreen"
          :webkitallowfullscreen="allowFullscreen"
          style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EmbeddedVido',
  props: {
    widget: Object
  },
  computed: {
    width() {
      return this.widget.fields.width
        ? `${this.widget.fields.width}px`
        : '100%';
    },
    height() {
      return this.widget.fields.height
        ? `${this.widget.fields.height}px`
        : '100%';
    },
    fullscreen() {
      return this.widget.fields.allowFullScreen ? 'allowfullscreen' : '';
    },
    allowFullscreen() {
      return this.widget.fields.allowFullScreen;
    },
  }
};
</script>
