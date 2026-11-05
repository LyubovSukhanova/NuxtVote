<template>
    <div class="menu__container">
        <div class="menu__icons">
            <NuxtLink to="/">
                <Icon name="icons:home" size="24px" />
            </NuxtLink>
            <NuxtLink to="/login">
                <Icon name="icons:login" size="24px" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.menu__container {
    display: flex;
    height: calc(100vh - 10px);
    width: 61px;
    padding: 42px 28px 45px 28px;
    border-right: 1px solid var(--color-light-gray);
    margin-right: 20px;
}

.menu__icons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.menu__icons a {
    padding-right: 32px;
    color: var(--color-black);
}

.menu__icons a:hover {
    color: var(--color-light-gray);
}

.menu__icons a.router-link-active {
    border-right: 1px solid var(--color-black);
}
</style>
