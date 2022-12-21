<template>
    <header class="menu">
        <nav class="navbar py-0 navbar-expand-lg">
            <div class="container">
                <div class="menu__block">
                    <div class="menu__block--logo">
                        <NuxtLink to="/">
                            <img src="~assets/svg/logo.svg" alt="Logo" class="d-block mx-auto img-fluid">
                        </NuxtLink>                        
                    </div>
                    <div class="menu__block--desktop d-none d-lg-block">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NuxtLink to="/services">Services</NuxtLink>
                                <span @click="isDropDownShow = !isDropDownShow">
                                    <img src="../assets/svg/arrow-down.svg" alt="Dropdown" class="ms-1">
                                </span>  
                                <transition name="fade">
                                    <ul v-if="isDropDownShow" class="dropdown-menu" v-click-outside="closeDropdown">
                                        <li>
                                            <NuxtLink to="/service-single">Software Development</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/service-single">Product Design</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/service-single">Cloud &amp; DevOps</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/service-single">Analytic Solutions</NuxtLink>
                                        </li>                                                                        
                                    </ul>
                                </transition>      
                            </li> 
                            <li class="nav-item">
                                <NuxtLink to="/about">About us</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/projects">Case studies</NuxtLink>
                            </li>                                                                                   
                            <li class="nav-item">
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>                            
                        </ul>
                    </div>
                    <div @click="isMobileMenu = !isMobileMenu" class="menu__block--mobile d-block d-lg-none">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <transition name="slide-fade">
                        <div v-if="isMobileMenu" class="menu__block--mobile--show">
                            <div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src="~assets/svg/logo.svg" alt="Logo" class="mx-auto img-fluid">
                                    </div>                                    
                                    <div @click="close" class="menu__block--mobile--close">
                                        <img src="~assets/svg/cross.svg" alt="Close">
                                    </div> 
                                </div>                                       
                                <ul class="navbar-nav mt-4">
                                    <li class="nav-item">
                                        <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/services">Services</NuxtLink>
                                        <span class="menu__block--mobile--arrow">
                                            <img @click="openDropdown" src="../assets/svg/arrow-down.svg" alt="Dropdown" class="ms-1">
                                        </span>                                                                                      
                                        <ul :class="{'d-block': isMobileDropdown}" class="dropdown-menu menu__block--mobile--dropdown">
                                            <li class="nav-item">
                                                <NuxtLink to="/service-single">Software Development</NuxtLink>
                                            </li> 
                                            <li class="nav-item">
                                                <NuxtLink to="/service-single">Product Design</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/service-single">Cloud &amp; DevOps</NuxtLink>
                                            </li>                                  
                                            <li class="nav-item">
                                                <NuxtLink to="/service-single">Analytic Solutions</NuxtLink>
                                            </li>                                                                                                                                                             
                                        </ul>
                                    </li>                                        
                                    <li class="nav-item">
                                        <NuxtLink to="/about">About Us</NuxtLink>
                                    </li> 
                                    <li class="nav-item">
                                        <NuxtLink to="/projects">Case Studies</NuxtLink>
                                    </li>                            
                                    <li class="nav-item">
                                        <NuxtLink to="/contact">Contact</NuxtLink>
                                    </li>                                                                                           
                                </ul>
                            </div>
                        </div>  
                    </transition>                                        
                    <div class="menu__block--cta d-none d-lg-block">
                        <NuxtLink to="/" class="btn-blue">
                            <div class="d-flex align-items-center">
                                Quote for Project
                            </div>
                    </NuxtLink>                        
                    </div>                    
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

import vClickOutside from 'v-click-outside';

export default {
    name: 'Nav',
    directives: {
        clickOutside: vClickOutside.directive
    },    
    data() {
        return {
            isMobileDropdown: false,
            isMobileMenu: false,
            isDropDownShow: false,
        }
    },
    methods: {
        closeDropdown (event) {
            this.isDropDownShow = false;
        },
        close() {
            this.isMobileMenu = false;
            this.isMobileDropdown = false;
        },      
        openDropdown: function() {
            this.isMobileDropdown = !this.isMobileDropdown;
        }      
    }      
}
</script>