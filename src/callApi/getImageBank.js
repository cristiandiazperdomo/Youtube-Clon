import { useState } from 'react';
import { createClient } from 'pexels';

export const GetImageBank = () => {
	
	const [ asd, setAsd ] = useState([])
	
	const callApi = () => {
		const client = createClient('563492ad6f91700001000001093f5865a8644846a977af581347c2ed');

		const query = 'Nature';

		client.photos.search({ query, per_page: 1 }).then(media => setAsd(media));
	}

	return {
		callApi, asd
	}
}