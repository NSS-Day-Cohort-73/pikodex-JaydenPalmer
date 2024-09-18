
// const pikodexData = grabData()

export const pikodexCards = (data) => {
    let pikodexHTML = ''
    for (const pikodex of data) {
        pikodexHTML += `
        <article class="piko-card">
                <img src="${pikodex.imageUrl}" alt="${pikodex.name} pic" class="piko-img">
                <p class="piko-name">${pikodex.name}</p>
            <div class="info-text">
                <p class="piko-category">${pikodex.category}</p>
                <p class="piko-abilities">${pikodex.abilities}</p>
                <p class="piko-weakness">${pikodex.weakness}</p>
            </div>
        </article>
        `;
    }
    return pikodexHTML
}