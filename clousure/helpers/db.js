import Database from "better-sqlite3";

function createDB () {
    const db = new Database('./db/carrito.db');

    // Activar las foreing keys ‼️OBLIGATORIO‼️
    db.exec(`PRAGMA foreign_keys = ON;`);

    db.exec(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio INTEGER NOT NULL,
            cantidad INTEGER NOT NULL DEFAULT 1,
            fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS carrito (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombreUsuario TEXT NOT NULL,
            cantidadProductos INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS lineaCarrito (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_carrito INTEGER NOT NULL,
            id_producto INTEGER NOT NULL,
            cantidadProducto INTEGER NOT NULL,
            
            FOREIGN KEY (id_carrito) REFERENCES carrito(id)
                ON DELETE CASCADE ON UPDATE CASCADE,
            
            FOREIGN KEY (id_producto) REFERENCES productos(id)
                ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);
}
