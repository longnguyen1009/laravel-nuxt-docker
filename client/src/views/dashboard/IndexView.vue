<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore, useUsersStore } from '@/stores';
import DashboardLayout from '@/components/Layout/Dashboard.vue';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
    <DashboardLayout>
        <template #header>
            <div>HEADER</div>
        </template>
        <template #main-content>
            <div>DASHBOARD CONTENT</div>
        </template>
        <template #footer>
            <div>FOOTER</div>
        </template>
    </DashboardLayout>
</template>
