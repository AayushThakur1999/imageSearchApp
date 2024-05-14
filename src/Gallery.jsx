import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './Context';

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=`;

const Gallery = () => {
  const { searchText } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchText],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${searchText}`);
      return data;
    }
  });
  if (isLoading) {
    return (
      <section className='image-container'>
        <h2>Loading...</h2>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='image-container'>
        <h3>There is some error...</h3>
      </section>
    );
  }
  if (data.results.length < 1) {
    return (
      <section className='image-container'>
        <h3>no matching results found...</h3>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {
        data.results.map(item => {
          const url = item?.urls?.regular;
          const { id, alt_description } = item;
          return <img key={id} src={url} alt={alt_description} className='img' />
        })
      }
    </section>
  )
}

export default Gallery