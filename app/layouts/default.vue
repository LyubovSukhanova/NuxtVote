<template>
    <div class="layout-container">
        <MenuLayout />
        <div class="layout-content">
            <slot />
        </div>
    </div>

</template>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
}

.layout-content {
    display: flex;
    flex: 1;
}
</style>
