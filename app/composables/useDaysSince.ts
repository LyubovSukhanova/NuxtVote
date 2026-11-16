export const useDaysSince = (date: MaybeRefOrGetter<Date | string | number>) => {
    return computed(() => {
        const today = new Date();
        return Math.floor((today.getTime() - new Date(toValue(date)).getTime()) / (1000 * 3600 * 24));
    });
};
