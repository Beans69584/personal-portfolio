
export const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        const navbarHeight = window.innerWidth <= 768 ? 60 : 80; // Adjust these values based on your actual navbar heights
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};