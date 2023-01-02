import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'api';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getFilmReviews(movieId);
        setReviews(reviews);
      } catch (e) {
        console.log(e);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(item => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))
      ) : (
        <h3>We don`t have any reviews for this movie</h3>
      )}
    </ReviewsList>
  );
};

export default Reviews;
