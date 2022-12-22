<template>
    <div class="workprocess">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="Our Work"
                        titleStyle="Process"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>Our four-step process</h3>
                </div>
            </div>
            <div class="workprocess__steps">
                <div class="row">
                    <div v-for="(step,i) in steps" :key="i" class="col-lg-6 col-md-6 col-xl-6 col-xxl-3">
                        <div class="workprocess__steps--block mt-4">
                            <div class="d-flex align-items-center">
                                <img :src="step.icon" :alt="step.alt">
                                <img :src="step.arrow" alt="Line" :class="step.noarrow" class="ms-2">                                
                            </div>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import line from '~/assets/svg/line-big.svg'
import step01 from '~/assets/svg/step01.svg';
import step02 from '~/assets/svg/step02.svg';
import step03 from '~/assets/svg/step03.svg';
import step04 from '~/assets/svg/step04.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WorkProcess',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },
    data() {
        return {
            subheaderFontStyle,
            steps: [
                {
                    title: 'Understand the Values',
                    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.',
                    icon: step01,
                    arrow: line,
                    alt: 'Understand the Values'
                },
                {
                    title: 'Research the competition',
                    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.',
                    icon: step02,
                    arrow: line,
                    alt: 'Research the competition'
                },
                {
                    title: 'Design your product',
                    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.',
                    icon: step03,
                    arrow: line,
                    alt: 'Design your product'
                },
                {
                    title: 'Development',
                    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.',
                    icon: step04,
                    arrow: line,
                    alt: 'Development',
                    noarrow: 'd-block d-xxl-none'
                }                                                  
            ]
        }
    }
}
</script>