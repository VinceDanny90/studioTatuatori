<template>
  <nav class="navbar">
    <ul>
      <li>
        <RouterLink to="/" class="nav-link">Homepage</RouterLink>
      </li>
      <li>
        <RouterLink to="/chisiamo" class="nav-link">Chi Siamo</RouterLink>
      </li>
      <li class="dropdown" :class="{ open: dropdownVisible }">
        <a  class="nav-link dropdown-toggle" @click="toggleDropdown">Servizi</a>
        <div class="dropdown-menu">
          <RouterLink to="/tattoo" class="dropdown-link" @click="closeDropdown">Tattoo</RouterLink>
          <RouterLink to="/piercing" class="dropdown-link" @click="closeDropdown">Piercing</RouterLink>
        </div>
      </li>
      <li>
        <RouterLink to="/gallery" class="nav-link">Gallery</RouterLink>
      </li>
      
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

function closeDropdown() {
  dropdownVisible.value = false;
}
</script>

<style scoped>

</style>
