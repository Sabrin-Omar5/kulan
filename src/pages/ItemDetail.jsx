import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DUMMYJSON_PRODUCTS_URL } from '../api/dummyjson';

function ItemDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState('loading');
  const [item, setItem] = useState(null);

  useEffect(() => {
    setStatus('loading');
    setItem(null);

    fetch(`${DUMMYJSON_PRODUCTS_URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [id]);

  if (status === 'loading') {
    return (
      <main className="container">
        <p>Loading item…</p>
      </main>
    );
  }

  if (status === 'error' || !item) {
    return (
      <main className="container">
        <p>Item not found.</p>
        <Link to="/">← Back home</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/">← Back home</Link>
      <h1>{item.title}</h1>
      {item.thumbnail && (
        <img src={item.thumbnail} alt={item.title} style={{ maxWidth: '320px' }} />
      )}
      <p>{item.description}</p>
      <p>${item.price}</p>
    </main>
  );
}

export default ItemDetail;
