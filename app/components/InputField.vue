<script setup lang="ts">
const props = defineProps<{
    modelValue: string,
    type: string,
    icon: string,
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();

const placeholder = computed(() => {
    if (props.type === 'email') {
        return 'Email';
    } else if (props.type === 'password') {
        return 'Пароль';
    };
});
</script>

<template>
    <div class="input__container">
        <input :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="input__field" :type="type" :placeholder="placeholder" />
        <Icon class="input__icon" :name="`icons:${icon}`" size="24px" />
    </div>
</template>

<style scoped>
.input__container {
    display: flex;
    position: relative;
}

.input__field {
    padding-left: 40px;
    height: 40px;
    border: 1px solid var(--color-light-gray);
    border-radius: 20px;
    width: 300px;
}

.input__icon {
    position: absolute;
    top: 8px;
    left: 14px;
}
</style>
