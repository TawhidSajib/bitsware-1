<template>
    <div class="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <vue-masonry-wall :items="items" :options="{width: 350, padding: 10}">
                        <template v-slot:default="{item}">
                            <div class="gallery__block">
                                <img :src="item.image" class="img-fluid">
                            </div>
                        </template>
                    </vue-masonry-wall>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VueMasonryWall from "vue-masonry-wall";

export default {
    name: 'Gallery',
    components: {
        VueMasonryWall
    },
    data() {
        return {
            items: [
                { image: require('@/assets/images/gallery01.jpg') },
                { image: require('@/assets/images/gallery02.jpg') },
                { image: require('@/assets/images/gallery03.jpg') },
                { image: require('@/assets/images/gallery04.jpg') },
                { image: require('@/assets/images/gallery05.jpg') },
                { image: require('@/assets/images/gallery06.jpg') },
                { image: require('@/assets/images/gallery07.jpg') },
                { image: require('@/assets/images/gallery08.jpg') }, 
            ]
        }
    }
}
</script>