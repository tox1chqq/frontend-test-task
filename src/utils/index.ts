export const handleFormatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{3})$/);
    if (match) {
        return `${match[1]}${match[2]} ${match[3]} ${match[4]}`;
    }
    return value;
};
