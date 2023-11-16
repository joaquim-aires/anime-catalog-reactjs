"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Merriweather_Sans } from 'next/font/google'
 
const inter = Merriweather_Sans({ subsets: ['latin'] })


export default function Home() {
  
 

  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`);
      setPosts(response.data.data);
    }

    getData();
  }, []); 

  const handleSearch = async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`);
    setPosts(response.data.data);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
    
    
    
    
       <header className="header">
    <h1 className={inter.className} style={{fontSize: 35, color: 'white', fontWeight: 500, paddingLeft: 15 }}>Anime Catalog</h1>
    
       </header>
      <div className="search-bar">
        <input 
          className="search-input"
          type="text" 
          placeholder="search for an anime"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyPress={handleKeyPress} 
        />
        <button className="button-search" onClick={handleSearch}>Go</button>
      </div>
      <div className="cards-grid">
        {posts.map((data) => (
          <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
          <div className="card" key={data.mal_id}>
            <div className="card-img-wrapper">
              <img src={data.images.jpg.image_url} alt={data.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}
