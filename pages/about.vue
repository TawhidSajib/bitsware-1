<template>
    <section>
        <Nav/>
        <header-inner
            headline="Get to Know More "
            headlineStyle="About Us!"
            :ornaments="headlineFontStyle"
            subheadline="A brief introduction about Bitsware"
        ></header-inner>
        <WhyBitsware/>
        <Testimonial/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import WhyBitsware from '~/components/Common/WhyBitsware';
import Testimonial from '~/components/Common/Testimonial';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/about-ornament.svg';

export default {
    name: 'About',
    components: {
        Nav,
        WhyBitsware,
        Testimonial,
        Footer,
        "header-inner": () => import("@/components/Common/HeaderInner")
    },    
    data() {
        return {
            headlineFontStyle
        }
    }
}
</script>