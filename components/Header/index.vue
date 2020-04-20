<template>
  <header class="page-section-header container-fluid sticky">
    <div class="row">
      <Logo />
      <Nav />
    </div>
    <SubNav />
  </header>
</template>

<script>
import Logo from './Logo';
import Nav from './Nav';
import SubNav from './SubNav'

export default {
  name: 'Header',
  components: {
    Logo,
    Nav,
    SubNav
  },
};
</script>
