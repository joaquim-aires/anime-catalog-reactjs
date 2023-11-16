"use client"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Merriweather_Sans } from 'next/font/google'

const inter = Merriweather_Sans({ subsets: ['latin'] })
export default function AnimeDetails() {


  const [details, setDetails] = useState({
    mal_id: "",
    title: "",
    images: { jpg: { image_url: "" } }
  });;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.mal_id}`);
      setDetails(response.data.data);
    }

    getData();
  }, []);

  return (
    <div>

      <header className="header">
        <Link href={'/'}>
          <h1 className={inter.className} style={{ fontSize: 35, color: 'white', fontWeight: 500, paddingLeft: 15 }}>Anime Catalog</h1>
        </Link>
      </header>

      <div className="details-container">
        <h1 className='details-title'>{details.title}</h1>
        <img className="details-img" src={details.images.jpg.image_url} alt={details.title} />
        <p className="sinopse">{details.synopsis}</p>
      </div>
    </div>



  );
};

