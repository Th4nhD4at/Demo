// this must be included inside body, not head

function renderList(filteredItems) {
    const list = document.getElementById('suggestedItemsList');
    list.innerHTML = '';

    if (filteredItems.length === 0) {
        list.innerHTML = '<li>No available product!</li>';
        return;
    }

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)} USD`;
        list.appendChild(li);
    });
}


// Function for searching, filtering and sorting
function handleFilter() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    //const minPrice = parseFloat(document.getElementById('minPriceInput').value) || 0;
    //Disable since we not even use these 2 somehow
    //const sortType = document.getElementById('sortSelect').value;

    // Copy the original list item
    let filtered = [...itemList];

    // Search by product name
    filtered = filtered.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
    );

    /*
    // Filter by minimum price
    filtered = filtered.filter(item =>
    item.price >= minPrice
    );
    */
    // Sort by price
    filtered.sort((a, b) => {
        if (sortType === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    // Render list item
    renderList(filtered);
}

// When inputing search kw or min price
document.getElementById('searchInput').addEventListener('input', handleFilter);

//document.getElementById('minPriceInput').addEventListener('input', handleFilter);

// When changing sorting-type
document.getElementById('sortSelect').addEventListener('change', handleFilter);

// Prevent form reload automatically
document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleFilter();
});

/*
// When hitting the reset button
document.getElementById('filterForm').addEventListener('reset', function () {
    setTimeout(handleFilter, 0);
});
*/

// Render list item on page load
handleFilter();
