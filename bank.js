document.addEventListener("DOMContentLoaded", function () {
    const resources = [
        { name: "Cambridge Dictionary", category: "dictionnaire" },
        { name: "BBC Learning English", category: "site" },
        { name: "Netflix - English Movies", category: "film" },
        { name: "Cours d'anglais en ligne", category: "formation" },
        { name: "Conférence sur l'anglais professionnel", category: "evenement" }
    ];

    const container = document.getElementById("resources-container");
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("category-filter");

    function displayResources() {
        container.innerHTML = "";
        const filteredResources = resources.filter(resource => {
            return (categoryFilter.value === "all" || resource.category === categoryFilter.value) &&
                   (resource.name.toLowerCase().includes(searchInput.value.toLowerCase()));
        });

        filteredResources.forEach(resource => {
            const div = document.createElement("div");
            div.classList.add("resource");
            div.textContent = resource.name;
            container.appendChild(div);
        });
    }

    searchInput.addEventListener("input", displayResources);
    categoryFilter.addEventListener("change", displayResources);
    displayResources();
});
