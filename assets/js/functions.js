export function setClosedToOpen(selector) {
    selector.setAttribute("data-state", "open");
}

export function setClosingToClosed(selector) {
    selector.setAttribute("data-state", "closing");

    selector.addEventListener("animationend", function () {

        selector.setAttribute("data-state", "closed");

    }, { once: true });
}

export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function formatDate(dateString) {
    // Check if dateString is valid
    if (!dateString) return '';

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return '';
    }

    return date.toISOString().split('T')[0];
}