<template>
    <section>
        <Nav/>
        <header-inner
            headline="Our "
            headlineStyle="Projects"
            :ornaments="headlineFontStyle"
            subheadline="Our experienced team of designers &amp; developers are eager to assist you on your path to success."
        ></header-inner>
    </section>
</template>

<script>

import Nav from '~/components/Nav';

import headlineFontStyle from '~/assets/svg/projects-ornament.svg';

export default {
    name: 'Projects',
    components: {
        Nav,
        "header-inner": () => import("@/components/Common/HeaderInner")
    },
    data() {
        return {
            headlineFontStyle
        }
    }
}
</script>