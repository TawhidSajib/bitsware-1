<template>
    <div class="testimonial">
        <div class="container">
            <div class="row">
                <VueSlickCarousel v-bind="slickOptions">
                    <div class="col-lg-12">
                        <div class="testimonial__block mx-auto">
                            <div class="testimonial__block--inner">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <img src="~/assets/images/testimonial-01.png" alt="Person">
                                    </li>
                                    <li class="mt-5">
                                        <img src="~/assets/images/circle-2.png" alt="Logo">
                                    </li>
                                </ul>
                                <ul class="list-unstyled testimonial__content">
                                    <li>
                                        <div class="testimonial__quote">
                                            <img :src="quote_left" alt="Quote">
                                        </div>
                                        <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                                        <div class="testimonial__author mt-5">
                                            <div class="testimonial__author--name">
                                                &mdash; Jacob Jones
                                            </div>
                                            <div class="testimonial__author--company ms-2">
                                                CEO &amp; Co-Founder
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>                       
                        </div>                        
                    </div>
                    <div class="col-lg-12">
                        <div class="testimonial__block mx-auto">
                            <div class="testimonial__block--inner">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <img src="~/assets/images/testimonial-01.png" alt="Person">
                                    </li>
                                    <li class="mt-5">
                                        <img src="~/assets/images/circle-2.png" alt="Logo">
                                    </li>
                                </ul>
                                <ul class="list-unstyled testimonial__content">
                                    <li>
                                        <div class="testimonial__quote">
                                            <img :src="quote_left" alt="Quote">
                                        </div>
                                        <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                                        <div class="testimonial__author mt-5">
                                            <div class="testimonial__author--name">
                                                &mdash; Jacob Jones
                                            </div>
                                            <div class="testimonial__author--company ms-2">
                                                CEO &amp; Co-Founder
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>                       
                        </div>                        
                    </div>                    
                </VueSlickCarousel>    
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial__company">
                        <span v-for="(logo,i) in logos" :key="i">
                            <img :src="logo.img" :alt="logo.alt">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'; 

import logo01 from '~/assets/images/fox-hub.png';
import logo02 from '~/assets/images/aven.png';
import logo03 from '~/assets/images/circle.png';
import logo04 from '~/assets/images/code-lab.png';
import logo05 from '~/assets/images/earth-2.png';

import quote from '~/assets/svg/quote.svg';

export default {
    name: 'Testimonial',
    components: {
        VueSlickCarousel
    },  
    data() {
        return {
            quote_left: quote,
            slickOptions: {
                slidesToShow: 1,
                arrows: true,
                dots: false,
                responsive: [   
                    {
                    breakpoint: 1199,
                        settings: {
                            slidesToShow: 1,
                            dots: false,
                            arrows: true,
                        },
                    },                    
                    {
                    breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            dots: false,
                            arrows: true,
                        },
                    },                    
                    {
                    breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: false,
                            arrows: false
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
            logos: [
                {
                    img: logo01,
                    alt: 'Fox Hub'
                },
                {
                    img: logo02,
                    alt: 'Aven'
                },
                {
                    img: logo03,
                    alt: 'Circle'
                },
                {
                    img: logo04,
                    alt: 'Code Lab'
                },
                {
                    img: logo05,
                    alt: 'Earth'
                }
            ]
        }
    }
}
</script>

<style>
.testimonial .slick-dots {
    left: 0;
    right: 0;
    bottom: -45px;
}
.testimonial .slick-dots li button:before {
    font-size: 8px;    
}
.testimonial .slick-dots li.slick-active button:before {
    color: #4583E6;
    opacity: 1;
}
.testimonial .slick-prev:before {
    content: url(../assets/svg/testimonial-left.svg);
}
.testimonial .slick-prev {
    background: #FFFFFF;
    border: 1px solid #E0E0E6;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    left: -12.5px;
    z-index: 100;
}
.testimonial .slick-prev:hover,
.testimonial .slick-prev:focus {
    background-color: #FFFFFF;
}
.testimonial .slick-next:before {
    content: url(../assets/svg/testimonial-right.svg);
}
.testimonial .slick-next {
    background: #FFFFFF;
    border: 1px solid #E0E0E6;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    right: -12.5px;
    z-index: 100;
}
.testimonial .slick-next:hover,
.testimonial .slick-next:focus {
    background-color: #FFFFFF;
}

</style>