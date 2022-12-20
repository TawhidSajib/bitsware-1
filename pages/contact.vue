<template>
    <section>
        <Nav/>
        <header-inner
            headline="Let’s Talk "
            headlineStyle="Business!"
            :ornaments="headlineFontStyle"
            subheadline="Do you have a project in need of some attention? Fill out the form below and we'll get back to you in a heartbeat ❤️"
        ></header-inner>
    </section>
</template>

<script>

import Nav from '~/components/Nav';

import headlineFontStyle from '~/assets/svg/contact-ornament.svg';

export default {
    name: 'Contact',
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