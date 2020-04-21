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
import api from '@/api';

export default {
  name: 'Logo',
  data: () => ({
     logo: String
   }),
   created: async function() {
     var id = "1kXoWuRfkHuil2lv3XMmIo";
     this.logo = await api.contentful.getAsset(id)
   }
};
</script>
