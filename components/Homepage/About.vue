<template>
  <section id="aboutMECP" class="padding-top-lg">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-offset-3 col-lg-9">
          <h2>
            <p>{{ about.title }}</p>
          </h2>
        </div>
      </div>
      <div class="row padding-vertical-lg">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="logo-wrapper padding-bottom-sm">
            <img :src="about.logo" alt />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-9" v-html="about.text"></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'About',
  props: {
    about: Object,
  },
};
</script>
