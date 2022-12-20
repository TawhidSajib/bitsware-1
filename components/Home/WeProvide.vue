<template>
    <div class="weprovide position-relative">
        <img :src="plus_01" alt="Ornaments" class="position-absolute weprovide__ornament1 d-none d-xxl-block pulse">
        <img :src="plus_02" alt="Ornaments" class="position-absolute weprovide__ornament2 d-none d-lg-block bounce">
        <img :src="round_01" alt="Ornaments" class="position-absolute weprovide__ornament3 d-none d-xxl-block float">
        <img :src="ornament_4" alt="Ornaments" class="position-absolute weprovide__ornament4 d-none d-lg-block float">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="What We"
                        titleStyle="Provide"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>We make the people and interface interaction more intensive and exiting.</h3>
                </div>
            </div>
            <div class="weprovide__services">
                <div class="row">
                    <VueSlickCarousel v-bind="slickOptions">
                        <div class="col-lg-3" v-for="service in services" :key="service.id">
                            <div class="weprovide__services--block text-center">
                                <h4>{{ service.name }}</h4>
                                <span class="weprovide__services--icon">
                                    <img :src="service.image" :alt="service.alt" class="d-block mx-auto img-fluid">
                                    <img :src="service.imagehover" :alt="service.alt" class="d-block mx-auto img-fluid">                                    
                                </span>
                                <p>{{ service.content }}</p>
                                <div class="weprovide__services--btn">
                                    <NuxtLink :to="service.link" class="btn-white">
                                        <div class="d-flex align-items-center">
                                            Read More
                                            <span class="weprovide__services--read">
                                                <img :src="read_more" alt="Read more">
                                                <img :src="read_more_hover" alt="Read more">
                                            </span>
                                        </div>
                                    </NuxtLink>                                
                                </div>                                
                            </div>
                        </div>
                    </VueSlickCarousel>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'; 

import offShoreTeam from '~/assets/svg/offshore-team.svg';
import offShoreTeamHover from '~/assets/svg/offshore-team-hover.svg';
import softwareDevelopment from '~/assets/svg/software-development.svg';
import softwareDevelopmentHover from '~/assets/svg/software-development-hover.svg';
import designDevelopment from '~/assets/svg/design-development.svg';
import designDevelopmentHover from '~/assets/svg/design-development-hover.svg';
import mobileApplication from '~/assets/svg/mobile-application.svg';
import mobileApplicationHover from '~/assets/svg/mobile-application-hover.svg';
import readMore from '~/assets/svg/read-more.svg';
import readMoreHover from '~/assets/svg/read-more-hover.svg';
import plus01 from '~/assets/svg/plus-big.svg';
import plus02 from '~/assets/svg/plus-small.svg';
import round01 from '~/assets/svg/round01.svg';
import ornament4 from '~/assets/svg/ornament-4.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WhatWeProvide',
    components: {     
        VueSlickCarousel,
        "subheadline": () => import("@/components/Common/Subheadline"),
    },
    data() {
        return {  
            slickOptions: {
                slidesToShow: 4,
                arrows: true,
                dots: false,
                responsive: [   
                    {
                    breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            dots: false,
                            arrows: true,
                        },
                    },                    
                    {
                    breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            dots: false,
                            arrows: true,
                        },
                    },                    
                    {
                    breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            dots: false,
                            arrows: true
                        },
                    },
                    {
                    breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            dots: true,
                            arrows: false
                        },
                    }                                      
                ]                 
            },            
            read_more: readMore,
            read_more_hover: readMoreHover,
            plus_01: plus01,
            plus_02: plus02,
            round_01: round01,
            ornament_4: ornament4,
            subheaderFontStyle,

            services: [
                {
                    name: 'Offshore Team',
                    image: offShoreTeam,
                    imagehover: offShoreTeamHover,
                    alt: 'Offshore Team',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                    link: '/'
                },
                {
                    name: 'Design & Development',
                    image: designDevelopment,
                    imagehover: designDevelopmentHover,
                    alt: 'Design & Development',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                    link: '/'
                },
                {
                    name: 'Software Development',
                    image: softwareDevelopment,
                    imagehover: softwareDevelopmentHover,
                    alt: 'Software Development',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                    link: '/'
                },
                {
                    name: 'Mobile Application',
                    image: mobileApplication,
                    imagehover: mobileApplicationHover,
                    alt: 'Mobile Application',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                    link: '/'
                }, 
                {
                    name: 'Offshore Team',
                    image: offShoreTeam,
                    imagehover: offShoreTeamHover,
                    alt: 'Offshore Team',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
                    link: '/'
                },                                                                 
            ]
        }
    }
}
</script>

<style>
.weprovide .slick-dots {
    left: 0;
    right: 0;
    bottom: -45px;
}
.weprovide .slick-dots li button:before {
    font-size: 8px;    
}
.weprovide .slick-dots li.slick-active button:before {
    color: #4583E6;
    opacity: 1;
}
.weprovide .slick-list {
    margin: 0 -10px !important;
}
.weprovide .slick-slide > div {
    padding: 0 10px!important;
}
.weprovide .slick-prev:before {
    content: url(../../assets/svg/testimonial-left.svg);
}
.weprovide .slick-prev {
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    left: -12.5px;
    z-index: 100;
}
.weprovide .slick-prev:hover,
.weprovide .slick-prev:focus {
    background-color: #FFFFFF;
}
.weprovide .slick-next:before {
    content: url(../../assets/svg/testimonial-right.svg);
}
.weprovide .slick-next {
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    right: -12.5px;
    z-index: 100;
}
.weprovide .slick-next:hover,
.weprovide .slick-next:focus {
    background-color: #FFFFFF;
}
</style>