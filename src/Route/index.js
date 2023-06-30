import {createRouter, createWebHistory} from 'vue-router';

import Homepage from '../Pages/Homepage.vue'
import ChiSiamo from '../Pages/ChiSiamo.vue'
import Piercing from '../Pages/Piercing.vue'
import Tattoo from '../Pages/Tattoo.vue'
import Gallery from '../Pages/Gallery.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: Homepage,
        },
        {
            path: "/chisiamo",
            name: "ChiSiamo",
            component: ChiSiamo,
        },
        {
            path: "/piercing",
            name: "piercing",
            component: Piercing,
        },
        {
            path: "/tattoo",
            name: "tattoo",
            component: Tattoo,
        },
        {
            path: "/gallery",
            name: "gallery",
            component: Gallery,
        }
    ]
})    

export default router;