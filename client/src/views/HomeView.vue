<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore, useUsersStore } from '@/stores';
import PageLayout from '../components/Layout/Page.vue';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
    <PageLayout>
        <template #main-content>
            <div>HOME CONTENT</div>
        </template>
    </PageLayout>
</template>
