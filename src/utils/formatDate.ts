export const formatDate = (date: string) => {
    if (!date) {
        return '';
    }
    return new Date(date).toLocaleTimeString().slice(0, 5);
}
