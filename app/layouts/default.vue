<template>
    <div class="layout-container">
        <MenuLayout />
        <slot />
    </div>

</template>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
}
</style>
