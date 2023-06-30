<template>
  <div class="gallery">
    <div class="small-photos">
      <div v-for="photo in photos" :key="photo.id" class="small-photo" @click="openPhoto(photo)">
        <img :src="photo.image" :alt="`Photo ${photo.id}`" />
      </div>
    </div>
    <div v-if="currentPhoto" class="overlay" @click="closePhoto">
      <span class="close-btn">&times;</span>
      <div class="photo-container">
        <img :src="currentPhoto.image" :alt="`Photo ${currentPhoto.id}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const photos = ref([]);
const currentPhoto = ref(null);

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/photos');
    const data = await response.json();
    photos.value = data;
  } catch (error) {
    console.error(error);
  }
}

function openPhoto(photo) {
  currentPhoto.value = photo;
}

function closePhoto() {
  currentPhoto.value = null;
}

onMounted(async () => {
  await fetchData();
});
</script>

<style>

</style>
