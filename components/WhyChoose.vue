<template>
    <div class="whychoose">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <subheadline
                        title="Why Choose"
                        titleStyle="Bitsware"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>Our team consists of multidisciplinary digital product experts consisting of experienced product managers, designers, developers, and business analysts.</h3>                   
                    <div class="row">
                        <div v-for="(reason,i) in reasons" :key="i" class="col-lg-6 col-md-6">
                            <div class="whychoose__reason">
                                <div class="d-flex align-items-baseline">
                                    <div class="flex-shrink-0">
                                        <img :src="reason.image" :alt="reason.alt">
                                    </div>
                                    <div class="whychoose__reason--content flex-grow-1">
                                        <h4>{{ reason.title }}</h4>
                                        <p>{{ reason.description }}</p>
                                    </div>
                                </div>                            
                            </div>                        
                        </div>
                    </div>                     
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <div class="whychoose__statistics">
                        <div v-for="(statistic,i) in statistics" :key="i" class="whychoose__statistics--info">
                            <div>{{ statistic.number }}</div>
                            <h3>{{ statistic.info }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
    </div>
</template>

<script>

import business_centered_approach from '~/assets/svg/business-centered-approach.svg';
import strong_marketing_tools from '~/assets/svg/strong-marketing-tools.svg';
import close_communication from '~/assets/svg/close-communication.svg';
import meeting_the_deadlines from '~/assets/svg/meeting-the-deadlines.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WhyChoose',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },    
    data() {
        return {
            subheaderFontStyle,
            reasons: [
                {
                    title: 'Business-centered Approach',
                    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
                    image: business_centered_approach,
                    alt: 'Business Centered Approach'
                },
                {
                    title: 'Strong Marketing Tools',
                    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
                    image: strong_marketing_tools,
                    alt: 'Strong Marketing Tools'
                },
                {
                    title: 'Close Communication',
                    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
                    image: close_communication,
                    alt: 'Close Communication'
                },
                {
                    title: 'Meeting the Deadlines',
                    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
                    image: meeting_the_deadlines,
                    alt: 'Meeting the Deadlines'
                }                                                   
            ],
            statistics: [
                {
                    number: '21',
                    info: 'Team experts'
                },
                {
                    number: '$10M+',
                    info: 'Startup clients raised'
                },
                {
                    number: '2 years',
                    info: 'of experience'
                }
            ]
        }
    }
}

</script>