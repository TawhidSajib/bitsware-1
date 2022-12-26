<template>
    <section>
        <Nav/>
        <div class="project">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <img :src="banner" alt="Project 01" class="d-block mx-auto img-fluid">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="project__inner">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="project__inner--info">
                                        <h3>Project Date</h3>
                                        <h4>{{ date }}</h4>
                                    </div>
                                    <div class="project__inner--info">
                                        <h3>Client</h3>
                                        <h4>{{ name }}</h4>
                                    </div>
                                    <div class="project__inner--info">
                                        <h3>Category</h3>
                                        <h4>{{ category }}</h4>
                                    </div>                                    
                                    <div class="project__inner--info">
                                        <h3>Technology &amp; Tools</h3>
                                        <ul class="list-inline">
                                            <li v-for="(technology,i) in technologies" :key="i" class="list-inline-item">
                                                <img :src="technology.image" :alt="technology.alt">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="project__inner--details">
                                        <h2>Smartwatch Design Ideas</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                                        <div class="project__inner--block">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="project__inner--steps">
                                                        <h4>01. Problem</h4>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="project__inner--steps">
                                                        <h4>02. Approach</h4>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="project__inner--steps">
                                                        <h4>03. Solution</h4>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                    </div>
                                                </div>
                                            </div>                                                
                                        </div>
                                        <div class="project__inner--gallery">
                                            <vue-masonry-wall :items="items" :options="{width: 400, padding: 10}">
                                                <template v-slot:default="{item}">
                                                    <div class="project__inner--gallery--img">
                                                        <img :src="item.image" class="img-fluid" :alt="item.alt">
                                                    </div>
                                                </template>
                                            </vue-masonry-wall>                                            
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <Footer/>
    </section>
</template>

<script>

import VueMasonryWall from "vue-masonry-wall";

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import banner from '~/assets/images/project01/01.jpg';
import figma from '~/assets/images/project01/figma.svg';
import nodejs from '~/assets/images/project01/nodejs.svg';
import python from '~/assets/images/project01/python.svg';

export default {
    name: 'ProjectSingle',
    components: {
        VueMasonryWall,
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            date: '10/05/2022',
            name: 'Creative Grow',
            category: 'Art Direction, Graphic',
            technologies: [
                { 
                    image: figma,
                    alt: 'Figma'
                },
                { 
                    image: nodejs,
                    alt: 'Node JS'
                },
                { 
                    image: python,
                    alt: 'Python'
                }
            ],
            items: [
                { 
                    image: require('@/assets/images/project01/image01.jpg'),
                    alt: '01'
                },
                { 
                    image: require('@/assets/images/project01/image02.jpg'),
                    alt: '02' 
                },
                { 
                    image: require('@/assets/images/project01/image03.jpg'),
                    alt: '03' 
                },
                { 
                    image: require('@/assets/images/project01/image04.jpg'), 
                    alt: '04'
                },
                { 
                    image: require('@/assets/images/project01/image05.jpg'),
                    alt: '05' 
                }
            ]            
        }
    }
}
</script>