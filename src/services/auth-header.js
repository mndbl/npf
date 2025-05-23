export default function authHeader(currAccToken) {
    if (currAccToken) {
        return {
            headers: {
                'Authorization': `Bearer ${currAccToken}`,
                // No es necesario enviar cabeceras CORS en la petición
            }
        };
    } else {
        return {}; // Devuelve un objeto vacío de cabeceras si no hay token
    }
}