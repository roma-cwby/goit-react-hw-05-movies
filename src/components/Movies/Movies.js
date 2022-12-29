import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <Link to="/">Go Back</Link>
      <input type="text"></input>
      <button type="submit">Search</button>
    </div>
  );
};
