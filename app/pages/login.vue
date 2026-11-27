<script setup lang="ts">
import { useAPI } from '~/composables/useAPI';
import type { AuthResponse } from '~/interfaces/auth.interface';

const API_URL = useAPI();
const authStore = useAuthStore();

const email = ref('');
const password = ref('')

async function onLogin() {
    try {
        const data = await $fetch<AuthResponse>(API_URL + '/auth/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
            }
        });
        authStore.setToken(data.token);
        authStore.setUser(data.user);
        navigateTo('/')
    } catch (e) {
        console.error("Ошибка авторизации: ", e)
    }
};

</script>

<template>
    <div class="login__container">
        <span class="login__header">Вход на платформу</span>
        <InputField v-model="email" type="email" icon="email" />
        <InputField v-model="password" type="password" icon="key" />
        <ActionButton @click="onLogin">Войти в аккаунт</ActionButton>
    </div>
</template>

<style scoped>
.login__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 236px 0 0 569px;
    gap: 27px;
}

.login__header {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    color: var(--color-dark-gray);
}
</style>
