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
        <Statistics/>
        <HireProcess/>
        <Projects/>
        <BorderBottom/>
        <Testimonial/>
        <Cta/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import Introduction from '~/components/ServiceSingle/Introduction';
import TeamProcess from '~/components/Common/TeamProcess';
import Statistics from '~/components/Common/Statistics';
import HireProcess from '~/components/Common/HireProcess';
import Projects from '~/components/Common/Projects';
import BorderBottom from '~/components/Common/BorderBottom';
import Testimonial from '~/components/Common/Testimonial';
import Cta from '~/components/Common/Cta';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/team-ornament.svg';

export default {
    name: 'ServiceSingle',
    components: {
        Nav,
        Introduction,
        TeamProcess,
        Statistics,
        HireProcess,
        Projects,
        BorderBottom,
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