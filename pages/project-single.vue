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
                                        <h4>{{ technology }}</h4>
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

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

import banner from '~/assets/images/project01/01.jpg';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            date: '10/05/2022',
            name: 'Creative Grow',
            category: 'Art Direction, Graphic',
            technology: 'Figma, Node JS, Python'
        }
    }
}
</script>