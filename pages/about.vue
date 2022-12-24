<template>
    <section>
        <Nav/>
        <header-inner
            headline="Get to Know More "
            headlineStyle="About Us!"
            :ornaments="headlineFontStyle"
            subheadline="A brief introduction about Bitsware"
        >
        </header-inner>
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__block position-relative">
                            <img src="~/assets/images/about-banner.jpg" class="d-block mx-auto img-fluid" alt="About">
                            <div class="about__block--content mx-auto position-relative">
                                <subheadline
                                    title="Who "
                                    titleStyle="We Are"
                                    :ornaments="subheaderFontStyle"
                                ></subheadline>      
                                <p>Bitsware is a software development team builder based in New York. We are a group of dedicated, experienced designers and developers who can assist you in finding the ideal offshore personnel for the success of your firm. Our network of experienced, knowledgeable, innovative, global personnel is unrivaled in the industry. </p>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WhyBitsware/>
        <Testimonial/>
        <BorderBottom/>
        <Gallery/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import WhyBitsware from '~/components/Common/WhyBitsware';
import Testimonial from '~/components/Common/Testimonial';
import BorderBottom from '~/components/Common/BorderBottom';
import Gallery from '~/components/Common/Gallery';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/about-ornament.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'About',
    components: {
        Nav,
        WhyBitsware,
        Testimonial,
        BorderBottom,
        Gallery,
        Footer,
        "header-inner": () => import("@/components/Common/HeaderInner"),
        "subheadline": () => import("@/components/Common/Subheadline")
    },    
    data() {
        return {
            headlineFontStyle,
            subheaderFontStyle
        }
    }
}
</script>