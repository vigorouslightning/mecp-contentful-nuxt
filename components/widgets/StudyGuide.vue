<template>
  <div class="col-sm-6 col-lg-3 padding-bottom-sm text-xs-center text-sm-left">
    <div class="image-wrapper">
      <img
        class="img-fluid"
        :src="guide.fields.coverImage.fields.file.url"
        :alt="guide.fields.title"
      />
    </div>
    <div class="guide-title">
      {{ guide.fields.title }}
    </div>
    <div class="price">
      <a :href="href">Member Price: ${{ guide.fields.memberPrice }}.00</a>
    </div>
    <div class="price">
      <a :href="href">Nonmember Price: ${{ guide.fields.nonmemberPrice }}.00</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyGuide',
  props: {
    guide: Object
  },
  computed: {
    href() {
      return `https://members.cta.tech/ctaMerchandiseDetail/?id=${this.guide.fields.link}`;
    }
  }
};
</script>
