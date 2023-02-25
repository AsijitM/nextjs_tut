import axios from 'axios';
import styles from '@/styles/Coins.module.css';


const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className={styles.row}>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.id} className={styles.coins}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt="coin" className={styles.coinimg}/>
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
