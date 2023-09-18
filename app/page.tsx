import axios from 'axios'

type PostProps = {
  mal_id: number,
  title: string,
}

const getData = async () => {
  const response = await axios.get<PostProps[]>('https://api.jikan.moe/v4/anime?q=&sfw')
  return response.data.data
}

export default async function Home() {
  const posts = await getData();
    return (
    <>
      <h1>Anime Catalog</h1>

      {posts.map((data) => (
        <div>
        <img src={data.images.jpg.image_url} alt="" />  
        <p key={data.mal_id}>{data.title}</p>
        
        </div>
      ))}
    </>
  )
}