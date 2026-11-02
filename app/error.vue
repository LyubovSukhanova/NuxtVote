<script setup lang="ts">
import type { NuxtError } from '#app';
defineProps<{
    error: NuxtError
}>()


function goHome() {
    navigateTo('/')
}
</script>

<template>
    <div class="error__wrapper">
        <div class="status__code">{{ error.status }}</div>
        <div v-if="error.status == 404" class="status__text">
            Страница не найдена, вернитесь на главную страницу
        </div>
        <div v-else class="status__text">{{ error.statusText || error.message || 'Что-то пошло не так' }}</div>
        <ActionButton @click="goHome" class="error__button">На главную</ActionButton>
    </div>
</template>

<style scoped>
.error__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

.status__code {
    color: var(--color-dark-gray);
    font-weight: 500;
    font-size: 120px;
}

.status__text {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
}

.error__button {
    width: 301px;
}
</style>
