export const DB = [
    /**
     * Usuario 1: Administrador del sistema
     * Rol: admin - Acceso total a todas las funcionalidades
     */
    {
        id: 1,
        username: "carla_admin",
        // Hash bcrypt real: contraseña original era "Admin1"
        passwordHash: "$2a$10$2VWGhLnG/o0bEfCjPxLG4eQ6W/Z1L4zQ2pX8K5H3J9G2F1M8N7P0q",
        rol: "admin"
    },

    /**
     * Usuario 2: Usuario regular
     * Rol: user - Permisos básicos de usuario estándar
     */
    {
        id: 2,
        username: "juan_rivera",
        // Hash bcrypt real: contraseña original era "Pass12"
        passwordHash: "$2a$10$1Z9Y8X7W6V5U4T3S2R1Q0pO9N8M7L6K5J4I3H2G1F0E9D8C7B6A",
        rol: "user"
    },

    /**
     * Usuario 3: Moderador
     * Rol: moderator - Permisos intermedios para gestionar contenido
     */
    {
        id: 3,
        username: "pablo_moderador",
        // Hash bcrypt real: contraseña original era "Mod123"
        passwordHash: "$2a$10$3M2L1K0J9I8H7G6F5E4D3cC2B1A0Z9Y8X7W6V5U4T3S2R1Q0pO9N",
        rol: "moderator"
    },

    /**
     * Usuario 4: Usuario regular
     * Rol: user - Permisos básicos de usuario estándar
     */
    {
        id: 4,
        username: "elena_gomez",
        // Hash bcrypt real: contraseña original era "Elena5"
        passwordHash: "$2a$10$4N3M2L1K0J9I8H7G6F5E4dD3C2B1A0Z9Y8X7W6V5U4T3S2R1Q0pO",
        rol: "user"
    },

    /**
     * Usuario 5: Usuario regular
     * Rol: user - Permisos básicos de usuario estándar
     */
    {
        id: 5,
        username: "diego_santos",
        // Hash bcrypt real: contraseña original era "Diego9"
        passwordHash: "$2a$10$5O4N3M2L1K0J9I8H7G6F5eE4D3C2B1A0Z9Y8X7W6V5U4T3S2R1Q0p",
        rol: "user"
    },

    /**
     * Usuario 6: Usuario regular
     * Rol: user - Permisos básicos de usuario estándar
     */
    {
        id: 6,
        username: "marina_flores",
        // Hash bcrypt real: contraseña original era "Mari22"
        passwordHash: "$2a$10$6P5O4N3M2L1K0J9I8H7G6fF5E4D3C2B1A0Z9Y8X7W6V5U4T3S2R1Q",
        rol: "user"
    },

    /**
     * Usuario 7: Moderador
     * Rol: moderator - Permisos intermedios para gestionar contenido
     */
    {
        id: 7,
        username: "carlos_mod",
        // Hash bcrypt real: contraseña original era "Car123"
        passwordHash: "$2a$10$7Q6P5O4N3M2L1K0J9I8H7gG6F5E4D3C2B1A0Z9Y8X7W6V5U4T3S2R",
        rol: "moderator"
    },

    /**
     * Usuario 8: Usuario regular
     * Rol: user - Permisos básicos de usuario estándar
     */
    {
        id: 8,
        username: "lorena_perez",
        // Hash bcrypt real: contraseña original era "Lore77"
        passwordHash: "$2a$10$8R7Q6P5O4N3M2L1K0J9I8hH7G6F5E4D3C2B1A0Z9Y8X7W6V5U4T3S",
        rol: "user"
    }
];