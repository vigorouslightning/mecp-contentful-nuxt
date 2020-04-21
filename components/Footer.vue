<template>
  <footer v-if="loaded" class="page-section-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <p>
            <strong>
              <span class="glyphicon glyphicon-copyright-mark"></span>
              © {{year}}
              MECP All rights reserved.
            </strong>
            <br />
            <FooterLink
              v-for="(link, index) in content.links"
              :key="link.slug"
              v-bind:link="link"
              v-bind:isLast="index === Object.keys(content.links).length - 1"
            />

            <br />
            <ExternalLink
              v-for="(link, index) in content.externalLinks"
              :key="index"
              v-bind:link="link"
              v-bind:isLast="index === Object.keys(content.externalLinks).length - 1"
            />
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3">
          <p>
            <strong>CONTACT US</strong>
            <br />
            <strong>T</strong>
            &nbsp;{{content.phone}}
            <br />
            <strong>
              E&nbsp;
              <a :href="mailto">{{content.email}}</a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLink from './Widgets/FooterLink';
import ExternalLink from './Widgets/ExternalLink';
import api from '@/api';

export default {
  name: 'siteFooter',
  components: {
    FooterLink,
    ExternalLink
  },
  data: () => ({
    content: Object
  }),
  computed: {
    loaded() {
      return Object.keys(this.content).length > 0;
    },
    year() {
      return new Date().getFullYear();
    },
    mailto() {
      return `mailto:${this.content.email}`;
    }
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      let response = await api.contentful.getFooterContent();
      this.content = response;
    }
  }
};
</script>
