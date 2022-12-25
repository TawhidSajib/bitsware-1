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
        <div class="introduction">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="introduction__content">
                            <h3>Around 20% of startups fail in 2 years after being open, and 45% — in 5 years.</h3>
                            <p>One of the best strategies to win the market is to use an offshore development company such as Bitsware.</p>
                            <p>Our offshore team is made up of highly skilled individuals who will deliver unique solutions to your company.</p>
                            <p>You can hire top-notch overseas developer for startups from us who will provide UI/UX, Front-end developer, Back-end developer, QA, and other services at your pricing. All of our experts are seasoned professionals that can help you reach your business goal successfully.</p>
                            <p>We assist enterprises in gaining a sustainable competitive edge through the adoption of breakthrough technologies by providing several time-zone teams and flexible working formats.</p>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>        
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