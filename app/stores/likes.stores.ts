import { defineStore } from "pinia";
import type { LikeDislike } from "~/interfaces/likedislike.interface";

export const useLikesStore = defineStore(
    "likes",
    () => {
        const likesAndDislikes = ref<LikeDislike[]>([]);

        function likePost(id: number) {
            const like = likesAndDislikes.value?.find((l) => l.id === id);
            if (like) return;
            likesAndDislikes.value.push({ id: id, action: "liked" });
        }

        function dislikePost(id: number) {
            const like = likesAndDislikes.value?.find((l) => l.id === id);
            if (like) return;
            likesAndDislikes.value.push({ id: id, action: "disliked" });
        }

        function likeExists(id: number) {
            const like = likesAndDislikes.value?.find((l) => l.id === id);
            if (like) {
                return true;
            } else {
                return false;
            }
        }

        return { likesAndDislikes, likePost, dislikePost, likeExists };
    },
    { persist: true },
);
