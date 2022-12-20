<template>
    <section>
        <Nav/>
        <header-inner
            headline="Get to Know More "
            headlineStyle="About Us!"
            :ornaments="headlineFontStyle"
            subheadline="A brief introduction about Bitsware"
        ></header-inner>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import headlineFontStyle from '~/assets/svg/about-ornament.svg';

export default {
    name: 'About',
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