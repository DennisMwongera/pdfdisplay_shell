<template>
    <html>
        <silent-box :gallery="gallery"></silent-box>
    </html>
</template>


<script>
export default {
    name: 'Pdf',
    data() {
        return {
    //      gallery: [
    //     {
    //         src: 'images/image001.jpg',
    //         // description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
    //         alt: 'Blue starry night photo.',
    //         thumbnailWidth: '220px'
    //     },
    //     {
    //         src: 'images/image002.jpg',
    //         // description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
    //         alt: 'Landscape photo of mountain with fog.',
    //         thumbnailWidth: '220px'
    //     },
    //     {
    //         src: 'images/image003.jpg',
    //         // description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
    //         alt: 'Low angle photo of pine trees.',
    //         thumbnailWidth: '220px'
    //     },
    // ]
    gallery: []
        }
    },
    mounted() {
    console.log('At this point, events and lifecycle have been initialized.')
  }
    
}
</script>