<template>
    <div class="whybitsware position-relative">
        <img :src="ornament_5" alt="Ornaments" class="position-absolute whybitsware__ornament1 d-none d-xxl-block bounce">
        <img :src="ornament_6" alt="Ornaments" class="position-absolute whybitsware__ornament2 d-none d-xxl-block">
        <img :src="connect" alt="Ornaments" class="position-absolute whybitsware__ornament3 d-none d-xxl-block">
        <img :src="ornament_4" alt="Ornaments" class="position-absolute whybitsware__ornament4 d-none d-xxl-block float">
        <img :src="plus" alt="Ornaments" class="position-absolute whybitsware__ornament5 d-none d-xxl-block pulse">
        <img :src="round" alt="Ornaments" class="position-absolute whybitsware__ornament6 d-none d-xxl-block float">        
                    
        <WhyChoose/>
        <div class="container">
            <div class="row">
                <div class="whybitsware__line">
                    <img src="~/assets/svg/line.svg" alt="Line" class="img-fluid d-none d-xl-block">
                </div>
            </div>
        </div>
        <WorkProcess/>
    </div>
</template>

<script>

import WhyChoose from '~/components/WhyChoose';
import WorkProcess from '~/components/WorkProcess';
import ornament05 from '~/assets/svg/ornament-5.svg';
import ornament06 from '~/assets/svg/ornament-6.svg';
import connect01 from '~/assets/images/block.gif';
import plus03 from '~/assets/svg/plus-orange.svg';
import ornament4 from '~/assets/svg/ornament-4.svg';
import round02 from '~/assets/svg/round02.svg';

export default {
    name: 'WhyBitsware',
    components: {
        WhyChoose,
        WorkProcess
    },    
    data() {
        return {
            ornament_5: ornament05,
            ornament_6: ornament06,
            connect: connect01,
            plus: plus03,
            ornament_4: ornament4,
            round: round02
        }
    }
}
</script>