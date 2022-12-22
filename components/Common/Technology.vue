<template>
    <div class="technology">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <subheadline
                        title="Technology"
                        titleStyle="Experts"
                        :ornaments="subheaderFontStyle"
                        extraTitle="In"
                    ></subheadline>
                    <h3 class="mx-auto">Over a dozen reusable features built to provide iconography, dropdowns, input groups, alerts, and much more. Over a dozen reusable features</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="technology__block">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="technology__block--inner">
                                    <span v-for="(technology,i) in technologies" :key="i">
                                        <img :src="technology.image" :alt="technology.alt">
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

import figma from '~/assets/svg/figma.svg';
import nodejs from '~/assets/svg/nodejs.svg';
import python from '~/assets/svg/python.svg';
import php from '~/assets/svg/php.svg';
import adobexd from '~/assets/svg/adobexd.svg';
import sketch from '~/assets/svg/sketch.svg';
import invision from '~/assets/svg/invision.svg';
import ruby from '~/assets/svg/ruby.svg';
import react from '~/assets/svg/react.svg';
import flutter from '~/assets/svg/flutter.svg';
import laravel from '~/assets/svg/laravel.svg';

export default {
    name: 'Technology',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },    
    data() {
        return {
            subheaderFontStyle,
            technologies: [
                {
                    image: figma,
                    alt: 'Figma'
                },
                {
                    image: nodejs,
                    alt: 'Node Js'
                },
                {
                    image: python,
                    alt: 'Python'
                },
                {
                    image: php,
                    alt: 'PHP'
                },
                {
                    image: adobexd,
                    alt: 'Adobe XD'
                },
                {
                    image: sketch,
                    alt: 'Sketch'
                },
                {
                    image: invision,
                    alt: 'Invision'
                },
                {
                    image: ruby,
                    alt: 'Ruby'
                },
                {
                    image: react,
                    alt: 'React'
                },
                {
                    image: flutter,
                    alt: 'Flutter'
                },
                {
                    image: laravel,
                    alt: 'Laravel'
                }
            ]
        }
    }
}
</script>