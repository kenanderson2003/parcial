function buscarProductos(event) {
    // Prevenir el comportamiento por defecto al presionar Enter
    if (event.key === 'Enter') {
        event.preventDefault();
    }
    
    // Obtener el valor de búsqueda
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    // Obtener la lista de productos
    const products = document.querySelectorAll('.product');
    
    // Iterar sobre cada producto y mostrar/ocultar según la búsqueda
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
