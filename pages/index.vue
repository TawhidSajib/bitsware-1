<template>
  <section>
    <Nav/>
    <Header/>
    <WeProvide/>
    <Projects/>  
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
import WeProvide from '~/components/Common/WeProvide';
import Projects from '~/components/Common/Projects';
import WhyBitsware from '~/components/Common/WhyBitsware';
import Team from '~/components/Common/Team';
import Technology from '~/components/Common/Technology';
import Testimonial from '~/components/Common/Testimonial';
import Cta from '~/components/Common/Cta';
import Footer from '~/components/Footer';

export default {  
  name: 'Home',
  components: {
    Nav,
    Header,
    WeProvide,
    Projects,
    WhyBitsware,
    Team,
    Technology,
    Testimonial,
    Cta,
    Footer
  }
}

</script>
