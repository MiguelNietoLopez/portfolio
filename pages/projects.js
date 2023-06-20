import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Projects()
{
    const {data,error} = useSWR('/api/languagesToRender', fetcher)
    console.log(data)
    return(
        <>
        </>
    )
}