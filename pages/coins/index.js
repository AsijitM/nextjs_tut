import axios from 'axios';

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt="coin" />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    'http://api.coinstats.app/public/v1/coins?skip=0'
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 5,
  };
};
export default CoinList;
