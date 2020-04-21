<template>
  <div>
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer';

export default {
  name: 'layout',
  components: {
    Footer
  }
}
</script>
