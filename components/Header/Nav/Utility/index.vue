<template>
  <ul class="utility-nav">
    <li>
      <Store />
    </li>
    <li>
      <Login />
    </li>
    <li>
      <a
        data-target="#hamburgerModal"
        data-toggle="modal"
        class="toggle"
        href="/Employers.html#"
      >
        <span class="nav-text hidden-xs-down">&nbsp;</span>
        <span class="icon-menu"></span>
      </a>
    </li>
  </ul>
</template>
<script>
import Login from './Login';
import Store from './Store';

export default {
  name: 'UtilityNav',
  components: {
    Login,
    Store
  },
  props: {},
  computed: {},

  mounted: function() {}
};
</script>
