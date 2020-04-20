<template>
  <nav class="col-xs-6 col-sm-8 col-lg-9">
    <Utility />
    <Main />
  </nav>
</template>

<script>

import Utility from './Utility';
import Main from './Main';
export default {
  name: 'Nav',
  components: {
      Utility,
      Main
  },
};
</script>
