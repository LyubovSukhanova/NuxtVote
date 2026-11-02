<script setup lang="ts"></script>

<template>
    <button class="button">
        <slot />
    </button>
</template>

<style scoped>
.button {
    cursor: pointer;
    border-radius: 20px;
    background-color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-weight: 500;
    font-size: 16px;
    padding: 12px;
}
</style>
