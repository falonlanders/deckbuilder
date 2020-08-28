import axios from 'axios';
import './index.css';

export async function fetchCards({ name, text, types }) {
    try {
        const { data } = await axios.get(
            `https://api.magicthegathering.io/v1/cards?name=${name}&text=${text}&types=${types}`
        );

        return data.cards || [];
    } catch (error) {
        throw error;
    }
}

export async function fetchTypes() {
    try {
        const { data } = await axios.get(
            `https://api.magicthegathering.io/v1/types`
        );
        console.log(data)
        return data.types || [];
    } catch (error) {
        throw error;
    }
}