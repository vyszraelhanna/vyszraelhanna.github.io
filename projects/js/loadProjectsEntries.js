document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Blockchain Dashboard",
            date: "2025/08/04",
            image: "/images/blockchain_dashboard.png",
            link: "https://github.com/vyszraelhanna",
            preview: "A web dashboard for visualizing blockchain metrics with live data and wallet tracking."
        },
        {
            title: "AI-Powered Game NPCs",
            date: "2025/09/10",
            image: "/images/ai_npc_project.png",
            link: "https://github.com/vyszraelhanna",
            preview: "Experiment using reinforcement learning to create more realistic NPC behaviors in games."
        },

    ];

    const projectsPerPage = 2;
    const currentPage = parseInt(window.location.pathname.match(/page(\d+)/)?.[1] || "1");
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const container = document.getElementById("blog_entries");

    // Render visible projects
    const visibleProjects = projects.slice(startIndex, endIndex);
    visibleProjects.forEach((project, index) => {
        const div = document.createElement("div");
        div.classList.add("entry", "has-thumb");

        // Alternar imagem esquerda ↔ direita
        const isEven = index % 2 === 0;
        div.innerHTML = `
            <div class="entry-box ${isEven ? "left-img" : "right-img"}">
                ${isEven
                ? `
                        <div class="thumb">
                            <img src="${project.image}" alt="${project.title}" class="project-img">
                        </div>
                        <div class="entry-content">
                            <h2>${project.title}</h2>
                            <p class="entry-date">${project.date}</p>
                            <p class="entry-preview">${project.preview}</p>
                            <a class="see-more" href="${project.link}" target="_blank" rel="noopener noreferrer">[ see more ]</a>
                        </div>
                    `
                : `
                        <div class="entry-content">
                            <h2>${project.title}</h2>
                            <p class="entry-date">${project.date}</p>
                            <p class="entry-preview">${project.preview}</p>
                            <a class="see-more" href="${project.link}" target="_blank" rel="noopener noreferrer">[ see more ]</a>
                        </div>
                        <div class="thumb">
                            <img src="${project.image}" alt="${project.title}" class="project-img">
                        </div>
                    `}
            </div>
            <hr class="divider1">
        `;
        container.appendChild(div);
    });

    // Pagination
    const footerRow = document.querySelector(".entryfooter tr");
    footerRow.innerHTML = `
        <td class="arrow-cell">
            ${currentPage > 1
            ? `<a href="/projects/${currentPage === 2 ? "index.html" : "page" + (currentPage - 1) + ".html"}" class="arrow-link" title="Previous page"><span class="arrow">⮜</span> prev</a>`
            : `<span class="arrow-disabled">⮜ prev</span>`}
        </td>
        <td class="page-info">page ${currentPage} / ${totalPages}</td>
        <td class="arrow-cell">
            ${currentPage < totalPages
            ? `<a href="/projects/page${currentPage + 1}.html" class="arrow-link" title="Next page">next <span class="arrow">⮞</span></a>`
            : `<span class="arrow-disabled">next ⮞</span>`}
        </td>
    `;
});
