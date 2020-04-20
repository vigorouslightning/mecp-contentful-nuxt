<template>
    <div>
        <section>
    <Header />
    <div class="mainBlock">
      <section class="container padding-top-lg subPage">
        <h2>
          <p></p>
          <p>{{content.title}}</p>
          <p></p>
        </h2>
      </section>
      <section class="container padding-bottom-lg">
        <div class="padding-vertical-lg">
          <component
            v-for="(widget, index) in content.widgetZone"
            :key="index"
            v-bind:is="getComponent(widget)"
            v-bind:widget="widget"
          />
        </div>
      </section>
    </div>
  </section>
    </div>
</template>

<script>
import LayoutStudyGuideList from '@/components/Layouts/LayoutStudyGuideList';
import Header from '@/components/Header';
import CallToAction from '@/components/Widgets/CallToAction';
import Copy from '@/components/Widgets/Copy';
import EmbeddedVideo from '@/components/Widgets/EmbeddedVideo';
import FormStack from '@/components/Widgets/FormStack';
import FloatedImage from '@/components/Widgets/FloatedImage';
import Testimonial from '@/components/Widgets/Testimonial';

import helpers from '@/helpers';

export default {
    name: 'page',
    components: {
        LayoutStudyGuideList,
        Header,
        CallToAction,
        Copy,
        EmbeddedVideo,
        FormStack,
        FloatedImage,
        Testimonial
    },
    data: () => ({
        content: Object
    }),
    created: async function() {
        const contentful = require('contentful');
        let space = '8hfgi7fwntly';
        let accessToken = '3OWbxhoixpB0f7od1LzRFGzMbUBgIQr5lsSZ78z-lWw';
        let client = new contentful.createClient({
            space: space,
            accessToken: accessToken
        });

        let response = await client.getEntries({
            content_type: 'page',
            'fields.slug[in]': this.$route.params.slug,
            limit: 1,
            include: 5
        });
        debugger;
        console.log("SLUG: " + this.$route.params.slug);

        if (typeof response.items[0] != 'undefined')
            this.content = response.items[0].fields;

    },
    methods: {
        getComponent(zone) {
            let type = zone.sys.contentType.sys.id;
            let widget = helpers.components.getWidgetComponent(type);
            return widget;
        }
    }
}
</script>

<style scoped>

</style>