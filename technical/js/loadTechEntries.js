// technical/loadTechEntries.js
document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            title: "Understanding Smart Contract Vulnerabilities",
            date: "2025/08/04",
            link: "https://github.com/vyszraelhanna",
            preview: "A breakdown of common Solidity smart contract vulnerabilities, from reentrancy to integer overflows, and how to spot them during audits."
        }

    ];

    const postsPerPage = 3;
    const currentPage = parseInt(window.location.pathname.match(/page(\d+)/)?.[1] || "1");
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const container = document.getElementById("blog_entries");

    // Render posts
    const visiblePosts = posts.slice(startIndex, endIndex);
    visiblePosts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("entry");
        div.innerHTML = `
            <div class="entry-box">
                <h2>${post.title}</h2>
                <p class="entry-date">${post.date}</p>
                <p class="entry-preview">${post.preview}</p>
                <a class="readmore" href="${post.link}" target="_blank" rel="noopener noreferrer">[ read more ]</a>
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
            ? `<a href="/technical/${currentPage === 2 ? "index.html" : "page" + (currentPage - 1) + ".html"}" class="arrow-link" title="Previous page"><span class="arrow">⮜</span> prev</a>`
            : `<span class="arrow-disabled">⮜ prev</span>`}
        </td>
        <td class="page-info">page ${currentPage} / ${totalPages}</td>
        <td class="arrow-cell">
            ${currentPage < totalPages
            ? `<a href="/technical/page${currentPage + 1}.html" class="arrow-link" title="Next page">next <span class="arrow">⮞</span></a>`
            : `<span class="arrow-disabled">next ⮞</span>`}
        </td>
    `;
});
