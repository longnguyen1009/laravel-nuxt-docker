<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.scss';
@import '@/assets/sass/vendor.scss';
@import '@/assets/sass/app.scss';
</style>