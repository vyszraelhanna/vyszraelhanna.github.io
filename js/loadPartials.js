async function loadPartials() {
    const parts = [
        ["header", "/partials/header.html"],
        ["sidebar-left", "/partials/sidebar-left.html"],
        ["sidebar-right", "/partials/sidebar-right.html"],
        ["footer", "/partials/footer.html"]
    ];

    for (const [id, path] of parts) {
        const el = document.getElementById(id);
        if (el) {
            try {
                const res = await fetch(path);
                if (!res.ok) throw new Error(`Failed to load ${path}`);
                el.innerHTML = await res.text();
            } catch (e) {
                console.error(`Error loading ${path}:`, e);
            }
        }
    }
}
loadPartials();