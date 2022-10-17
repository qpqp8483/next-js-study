import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "08e32ba35715aadb4433f7e086b1fcaa";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1>hello</h1>
    </div>
  );
}
