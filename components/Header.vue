<template>
    <div class="header position-relative">
        <img :src="header_ornament_1" alt="Header Ornament" class="position-absolute header__top--1 d-none d-xxl-block float">
        <img :src="header_ornament_2" alt="Header Ornament" class="position-absolute header__bottom--1 d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <h2>Build your</h2>
                    <h1>
                        <span class="position-relative">
                            <img :src="header_font_style" alt="Header Font" class="position-absolute start-0 bottom-0 d-none d-md-block">
                            Offshorey
                        </span> Team
                    </h1>
                    <h3>First &amp; Reasonable Price</h3>
                    <p>Bitsware is a leading design agency based in USA. We help startups &amp; Fortune 30+ companies delight humans on the other side of the screen.</p>
                    <NuxtLink to="/" class="btn-blue">
                        <div class="d-flex align-items-center">
                            View Project<img :src="right_arrow" alt="Arrow">
                        </div>
                    </NuxtLink>
                </div>
                <div class="col-lg-5 d-lg-flex">
                    <img :src="header_banner" alt="Header Banner" class="d-block mx-auto img-fluid mt-4">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import headerOrnament1 from '~/assets/svg/header-ornament-1.svg';
import headerOrnament2 from '~/assets/svg/header-ornament-2.svg';
import headerFontStyle from '~/assets/svg/header-font-style.svg';
import headerBanner from '~/assets/svg/header-banner.svg';
import rightArrow from '~/assets/svg/arrow-circle-right.svg'

export default {
    name: 'Header',
    data() {
        return {
            header_ornament_1: headerOrnament1,
            header_ornament_2: headerOrnament2,
            header_font_style: headerFontStyle,
            header_banner: headerBanner,
            right_arrow: rightArrow
        }
    }
}
</script>