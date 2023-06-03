import axios from 'axios';

export const storeContactsApi = async (data) => {

    try {
        const response = await axios.post('http://localhost/backend_fullstack/public/api/v1/contacts', data);
        return response;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
}