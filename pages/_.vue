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

import api from '@/api';
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
    async asyncData({params}) {
        var slug = params.pathMatch;

        if (slug.includes('/')) {
            var parts = slug.split('/');
            slug = parts[parts.length - 1];
        }

        let response = await api.contentful.bySlug(slug)

        return {content: response};
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