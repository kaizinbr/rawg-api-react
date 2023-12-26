const key = process.env.NEXT_PUBLIC_API_KEY;
import { baseURL } from "./api";

export default async function fetchGameDetails(gameId: string): Promise<any> {


    const response = await fetch(`${baseURL}games/${gameId}?key=${key}&page_size=35`, { cache: 'no-store' });
    const data = await response.json();
    console.log(data);
    return data;
}

