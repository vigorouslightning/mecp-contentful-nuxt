<template>
  <div class="col-xs-6 col-sm-4 col-lg-3 logo">
    <a class="sticky-logo" href="/">
      <img
        class="pull-left"
        :src="logo"
        alt
      />
    </a>
  </div>
</template>

<script>

//import api from '@/api';
export default {
  // name: 'Logo',
  // props: {},
  // data: () => ({
  //   logo: Object
  // }),
  // computed: {},
  // watch: {
  //   $route() {
  //     this.init();
  //   }
  // },
  // created: function() {
  //   this.init();
  // },
  // mounted: function() {},
  //   methods: {
  //   async byId(id) {
  //     this.logo = (await api.contentful.getAsset(id)).fields.file.url;
  //   },
  //   init() {
  //     let id = process.env.VUE_APP_HOMEPAGE_LOGO;
  //     this.byId(id);
  //   }
  // }
};
</script>
