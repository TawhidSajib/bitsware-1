<template>
    <section class="service__single">
        <Nav/>
        <header-inner
            headline="Build Your Offshore Dedicated "
            headlineStyle="Team"
            :ornaments="headlineFontStyle"
            subheadline="Our experienced team of designers &amp; developers are eager to assist you on your path to success."
        >
        </header-inner>        
        <Introduction/>
        <TeamProcess/>
        <Testimonial/>
        <Cta/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import Introduction from '~/components/ServiceSingle/Introduction';
import TeamProcess from '~/components/Common/TeamProcess';
import Testimonial from '~/components/Testimonial';
import Cta from '~/components/Cta';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/team-ornament.svg';

export default {
    name: 'ServiceSingle',
    components: {
        Nav,
        Introduction,
        TeamProcess,
        Testimonial,
        Cta,
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