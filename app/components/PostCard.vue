<script setup lang="ts">
const companyName = ref<string>("Путешествия")
const postDate = ref<Date>(new Date(2026, 10, 8));
const daysNumber = computed(() => {
    const today = new Date();
    return Math.floor((today.getTime() - postDate.value.getTime()) / (1000 * 3600 * 24));
});
const postName = ref<string>("Добавить функцию голосования");
const postContent = ref<string>("Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется...")
const likesNumber = ref<number>(0);
const dislikesNumber = ref<number>(0);
</script>

<template>
    <div class="post__container">
        <div class="post__header">
            <IconCompanyLogo :size="24" />
            <span class="post__header__company__name">{{ companyName }}</span>
            <span class="post__header__days">{{ daysNumber }} дня назад</span>
        </div>
        <span class="post__name">{{ postName }}</span>
        <span class="post__content">
            {{ postContent.length > 200 ? postContent.slice(0, 200) + '...' : postContent }}
        </span>
        <div class="post__likes">
            <span class="post__likes__number">{{ likesNumber }}</span>
            <Icon class="icon" style="margin-right: 13px;" name="icons:fingerup" size="18px" />
            <span class="post__likes__number">{{ dislikesNumber }}</span>
            <Icon class="icon" name="icons:fingerdown" size="18px" />
            <div class="right__string">
                <Icon class="icon" style="margin-right: 20px;" name="icons:blog" size="17px" />
                <Icon class="icon" name="icons:pencil" size="14px" />
                <span class="post__likes__change">Изменить</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post__container {
    display: flex;
    flex-direction: column;
    width: 692px;
    height: 203px;
    border-bottom: 1px solid var(--color-light-gray);
}

.post__header {
    display: flex;
    align-items: center;
}

.post__header__company__name {
    margin: 0 17px 0 8px;
    font-weight: 300;
    font-style: Light;
    font-size: 14px;
    color: var(--color-dark-gray);
}

.post__header__days {
    font-weight: 300;
    font-style: Light;
    font-size: 14px;
    color: var(--color-gray);
}

.post__name {
    margin: 14px 0 8px 0;
    font-size: 22px;
    color: var(--color-black);
}

.post__content {
    font-weight: 300;
    font-style: Light;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-dark-gray);
}

.post__likes {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 9px;
}

.post__likes__number {
    margin-right: 6px;
    font-style: Regular;
    font-size: 14px;
    color: var(--color-dark-gray);
}

.right__string {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.post__likes__change {
    margin-left: 6px;
    font-style: Regular;
    font-size: 14px;
    color: var(--color-dark-gray);
}

.icon {
    cursor: pointer;
}
</style>
