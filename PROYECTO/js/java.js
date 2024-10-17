let carrito = [];
let total = 0;

document.querySelectorAll('.agregar-btn').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;
        const nombre = producto.getAttribute('data-nombre');
        const precio = parseFloat(producto.getAttribute('data-precio'));

        carrito.push({ nombre, precio });
        total += precio;
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total}`;
    document.getElementById('carrito-count').textContent = carrito.length;

    document.getElementById('carrito').classList.remove('oculto');
}

document.getElementById('vaciar-btn').addEventListener('click', () => {
    carrito = [];
    total = 0;
    actualizarCarrito();
});
