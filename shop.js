body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

header {
    background: #0077cc;
    color: white;
    padding: 20px;
}

nav {
    margin-top: 10px;
}

.filter-btn {
    margin: 5px;
    padding: 10px;
    border: none;
    cursor: pointer;
}

.cart-icon {
    float: right;
    cursor: pointer;
    font-size: 20px;
}

#products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.product {
    background: white;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
}

.product img {
    width: 100%;
    height: auto;
}

.price {
    font-weight: bold;
    color: #0077cc;
}

button {
    background: #0077cc;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #005fa3;
}

/* Modal Produit */
.modal {
    display: none;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
}

.close {
    position: absolute;
    top: 10px; right: 10px;
    font-size: 20px;
    cursor: pointer;
}

/* Panier */
.cart {
    display: none;
    position: fixed;
    right: 20px;
    top: 60px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

