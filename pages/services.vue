<template>
    <section>
        <Nav/>
        <header-inner
            headline="We Think Big, and Make it "
            headlineStyle="Bigger"
            :ornaments="headlineFontStyle"
            subheadline="A fantastic range of services awaits you."
        >
        </header-inner>
        <OurServices/>
        <Technology/>
        <Testimonial/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import OurServices from '~/components/Common/OurServices';
import Technology from '~/components/Technology';
import Testimonial from '~/components/Testimonial';
import Footer from '~/components/Footer';

import headlineFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'Services',
    components: {
        Nav,
        OurServices,
        Technology,
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