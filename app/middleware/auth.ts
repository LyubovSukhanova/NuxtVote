import type { User } from "~/interfaces/user.interface";

export default defineNuxtRouteMiddleware(() => {
    const auth = useCookie<{ token: string; user: User }>("auth");
    if (!auth.value?.token) {
        return navigateTo("/login");
    }
    const authStore = useAuthStore();
    authStore.setToken(auth.value?.token);
    authStore.setUser(auth.value?.user);
});
