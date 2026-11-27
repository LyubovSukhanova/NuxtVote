import { defineStore } from "pinia";
import type { User } from "~/interfaces/user.interface";

export const useAuthStore = defineStore(
    "auth",
    () => {
        const token = ref<string | undefined>();
        const user = ref<User | undefined>();

        function setToken(value: string) {
            token.value = value;
        }

        function clearToken() {
            token.value = undefined;
        }

        function setUser(value: User) {
            user.value = value;
        }

        function clearUser() {
            user.value = undefined;
        }

        return { token, user, setToken, clearToken, setUser, clearUser };
    },
    { persist: true },
);
