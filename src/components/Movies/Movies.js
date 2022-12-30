import { BackBtn } from 'components/App/App.styled';

export const Movies = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <BackBtn to="/">Go Back</BackBtn>
      <input type="text"></input>
      <button type="submit">Search</button>
    </div>
  );
};
