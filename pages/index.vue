<template>
  <section>
    <Nav/>
    <Header/>
    <WeProvide/>
    <FeaturedProjects/>  
    <WhyBitsware/>
    <Team/>  
    <Technology/>
    <Testimonial/>
    <Cta/>
    <Footer/>
  </section>
</template>

<script>

import Nav from '~/components/Nav';
import Header from '~/components/Header';
import WeProvide from '~/components/Home/WeProvide';
import FeaturedProjects from '~/components/FeaturedProjects';
import WhyBitsware from '~/components/Home/WhyBitsware';
import Team from '~/components/Team';
import Technology from '~/components/Technology';
import Testimonial from '~/components/Testimonial';
import Cta from '~/components/Cta';
import Footer from '~/components/Footer';

export default {  
  name: 'Home',
  components: {
    Nav,
    Header,
    WeProvide,
    FeaturedProjects,
    WhyBitsware,
    Team,
    Technology,
    Testimonial,
    Cta,
    Footer
  }
}

</script>
