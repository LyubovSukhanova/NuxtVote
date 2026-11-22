import { defineStore } from "pinia";
import type { LikeDislike } from "~/interfaces/likedislike.interface";
import type { Post } from "~/interfaces/post.interface";

export const useLikesStore = defineStore(
    "likes",
    () => {
        const likesAndDislikes = ref<LikeDislike[]>([]);

        function getAction(id?: number): "liked" | "disliked" | null {
            if (!id) return null;
            return likesAndDislikes.value.find((l) => l.id === id)?.action ?? null;
        }

        async function likePost(id: number | undefined) {
            if (!id) return;
            const config = useRuntimeConfig();
            const API_URL = config.public.apiurl;

            const existing = likesAndDislikes.value.find((l) => l.id === id);
            if (existing) {
                // уже лайкнут — повторно не шлём
                if (existing.action === "liked") return;
                // был дизлайк — меняем на лайк (если API это поддерживает)
                existing.action = "liked";
            } else {
                likesAndDislikes.value.push({ id, action: "liked" });
                try {
                    await $fetch<Post>(`${API_URL}/posts/${id}/like`, { method: "POST" });
                } catch (e) {
                    // откат
                    if (existing) existing.action = "disliked";
                    else likesAndDislikes.value = likesAndDislikes.value.filter((l) => l.id !== id);
                    throw e;
                }
            }
        }

        async function dislikePost(id: number | undefined) {
            if (!id) return;
            const config = useRuntimeConfig();
            const API_URL = config.public.apiurl;

            const existing = likesAndDislikes.value.find((l) => l.id === id);
            if (existing) {
                if (existing.action === "disliked") return;
                existing.action = "disliked";
            } else {
                likesAndDislikes.value.push({ id, action: "disliked" });
                try {
                    await $fetch<Post>(`${API_URL}/posts/${id}/dislike`, { method: "POST" });
                } catch (e) {
                    if (existing) existing.action = "liked";
                    else likesAndDislikes.value = likesAndDislikes.value.filter((l) => l.id !== id);
                    throw e;
                }
            }
        }

        return { likesAndDislikes, getAction, likePost, dislikePost };
    },
    { persist: true },
);
