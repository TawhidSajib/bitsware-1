<template>
    <footer class="footer position-relative overflow-hidden">
        <img :src="footer_left" alt="Footer" class="position-absolute footer__ornament1 d-none d-xxl-block">
        <img :src="footer_arrow" alt="Footer" class="position-absolute footer__ornament2 d-none d-xxl-block float">
        <div class="container">
            <div class="footer__line">
                <div class="row">
                <div class="col-lg-3">
                    <div class="footer__block">
                        <img src="~/assets/svg/footer-logo.svg" alt="Logo" class="img-fluid">
                        <div class="footer__block--intro">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="footer__socials">
                                <ul class="list-inline">
                                    <li v-for="(social,i) in socials" :key="i" class="list-inline-item">
                                    <a :href="social.link" target="_blank"><i :class="[social.social,social.socialClass]"></i></a> 
                                    </li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-1">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <div class="footer__block">
                                    <h3>Company</h3>
                                    <ul class="list-unstyled">
                                        <li v-for="(companylink,i) in companylinks" :key="i">
                                            <NuxtLink :to="companylink.link">{{ companylink.name }}</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <h3>IT Services</h3>
                                <ul class="list-unstyled">
                                    <li v-for="(servicelink,i) in servicelinks" :key="i">
                                        <NuxtLink :to="servicelink.link">{{ servicelink.name }}</NuxtLink>
                                    </li>
                                </ul>                        
                            </div>                    
                        </div>
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <h3>Newsletter</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div class="footer__block--newsletter">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter your email">
                                        <div class="input-group-append">
                                            <button class="btn-blue" type="button">Subscribe</button>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>                    
                        </div>                        
                    </div>
                </div>                                                    
                </div>                
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__copyright text-center">
                        <p>&copy; 2022 All Rights Reserved. Developed By Bitsware.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

import footerArrow from '../assets/svg/footer-arrow.svg';
import footerLeft from '../assets/svg/footer-left.svg';

export default {
    name: 'Footer',
    data() {
        return {
            footer_arrow: footerArrow,
            footer_left: footerLeft,
            companylinks: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About Us',
                    link: '/'
                },
                {
                    name: 'FAQs',
                    link: '/'
                },
                {
                    name: 'Contact Us',
                    link: '/'
                }
            ],
            servicelinks: [
                {
                    name: 'Software Development',
                    link: '/'
                },
                {
                    name: 'Product Design',
                    link: '/'
                },
                {
                    name: 'Cloud and DevOps',
                    link: '/'
                },
                {
                    name: 'Analytic Solutions',
                    link: '/'
                }                                                
            ],
            socials: [
                {
                    social: 'fa fa-facebook',
                    socialClass: 'facebook',
                    link: '#'
                },
                {
                    social: 'fa fa-twitter',
                    socialClass: 'twitter',
                    link: '#'
                },
                {
                    social: 'fa fa-pinterest',
                    socialClass: 'pinterest',
                    link: '#'
                },
                {
                    social: 'fa fa-github',
                    socialClass: 'github',
                    link: '#'
                }
            ]            
        }
    }
}
</script>