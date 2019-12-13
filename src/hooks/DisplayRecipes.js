import { useState, useEffect } from 'react';

export const useDataFetch = (url, dependencies) => {

    if (dependencies[0] === undefined || dependencies[0] === '') {
        url = `https://superheroapi.com/api/779757025830796/search/deadpool`;
    }


    const [isLoading, setIsLoading] = useState(false);
    const [heroData, setHeroData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        console.log('Fetching hero data...');
        console.log(url)
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        })
        .then (data => {
            setIsLoading(false);
            setHeroData(data.results);
            console.log(heroData);
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false);
            setHeroData('Not found');
        })

    }, [url])

    return [isLoading, heroData];

}