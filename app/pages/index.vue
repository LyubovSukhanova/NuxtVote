<script setup lang="ts">
import type { GetPostsResponse, Post } from '~/interfaces/post.interface';

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const router = useRouter();

const selectDateRating = computed(() => {
    return route.query.sort === 'rating' ? 'rating' : 'date';
});
const pageNumber = computed(() => {
    return Number(route.query.page) || 1;
});

const { data: allPosts } = await useFetch<GetPostsResponse>(API_URL + '/posts', { query: { page_size: 5 } });
const totalPagesNumber = computed(() => {
    return allPosts.value?.total_pages;
});
const pages = computed(() => {
    return Array.from({ length: totalPagesNumber.value ?? 0 }, (_, i) => i + 1)
});

const { data } = await useFetch<GetPostsResponse>(API_URL + '/posts', { query: { sort: selectDateRating, page: pageNumber, page_size: 5 } })

const postsData = computed(() => {
    return data.value?.posts;
});

function onSelectDateClick() {
    navigateTo({ query: { ...route.query, sort: 'date', page: 1 } })
};

function onSelectRatingClick() {
    navigateTo({ query: { ...route.query, sort: 'rating', page: 1 } })
};

function onPageClick(page: number) {
    navigateTo({ query: { ...route.query, page: page } })
};

</script>

<template>
    <div class="main__container">
        <div class="main-select">
            <span class="main-select__caption" :class="{ 'active': selectDateRating === 'date' }"
                @click="onSelectDateClick">
                По дате
            </span>
            <span class="main-select__caption" :class="{ 'active': selectDateRating === 'rating' }"
                @click="onSelectRatingClick">
                По рейтингу
            </span>
        </div>
        <div class="posts">
            <PostCard v-for="post in postsData" :key="post.id" :post="post" />
        </div>
        <div class="pages">
            <span v-for="page in pages" :key="page" class="page" :class="{ 'active': page === pageNumber }"
                @click="onPageClick(page)">
                {{ page }}
            </span>
        </div>
    </div>

</template>

<style scoped>
.main__container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding-left: 216px;
    height: 100dvh;
}

.main-select {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 42px;
    padding: 42px 0 17px 0;
}

.main-select__caption {
    font-weight: 300;
    font-style: Light;
    font-size: 16px;
    color: var(--color-gray);
    cursor: pointer;
}

.main-select__caption.active {
    font-weight: 400;
    font-style: Regular;
    color: var(--color-dark-gray);
}

.posts {
    flex: 1;
    min-height: 0;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    gap: 16px;
    padding-right: 8px;
    scroll-behavior: smooth;
}

.pages {
    margin-top: 8px;
    flex-shrink: 0;
    display: flex;
    gap: 16px;
    padding: 16px 0;
    border-top: 1px solid var(--color-page);
    background: var(--color-bg);
}

.page {
    color: var(--color-page);
    font-size: 18px;
    cursor: pointer;
}

.page.active {
    color: var(--color-dark-gray);
}
</style>
