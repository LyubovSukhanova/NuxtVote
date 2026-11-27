import type { User } from "~/interfaces/user.interface";

export default defineNuxtRouteMiddleware(() => {
    const auth = useCookie<{ token: string; user: User }>("auth");
    const authStore = useAuthStore();
    if (!authStore.token) return navigateTo("/login");
});
