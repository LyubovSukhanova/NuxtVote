<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface';
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const postId = computed(() => {
    return route?.params.id;
});
const { data } = await useFetch<Post>(API_URL + '/posts/' + postId.value);

const post = computed(() => {
    return data?.value;
});
</script>

<template>
    <PostCard :post="post" :full="true" />
</template>

<style scoped></style>
