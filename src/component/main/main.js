import bannerImg from '../../assets/images/banner.png'
import style from '../../assets/css/main/main.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Deals from './deals';
import TrendingBook from './trendingBook';
import Bookbylang from './bookbylang';
import { getBookByLanguage, getBooks, getDeals, getMusic, getToys } from '../../store/action/country';
import TraindingMusic from './traindingMusic';
import TrendingToys from './trendingToys';
import supersale from '../../assets/images/supersale.png'
import gift from '../../assets/images/giftbanner.png'
import unicorn from '../../assets/images/unicorns.png'
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Main() {
  const { deals, books, bookbylang, music, toys } = useSelector(state => state.countries)
  const dispatch = useDispatch()
  let url = window.location.href
  const [path, setPath] = useState(url);
  async function AddToCart(title, author, price, image) {
    let { data } = await axios.post(`${process.env.REACT_APP_API_BASEURL}/cart`, { title, auth: author, price, img: image, qty: 1 });
    toast.success('added to cart');
  }
  // console.log("get book ", books);
  // console.log("music ", music);
  // console.log("toys ", toys);
  // console.log('get bookbylanguage', bookbylang);
  useEffect(() => {
    dispatch(getDeals())
    dispatch(getBooks())
    dispatch(getMusic())
    dispatch(getToys())
    dispatch(getBookByLanguage())
  }, []);
  return (
    <main >
      <div className={style.main}>
        <img className={style.banner} src={bannerImg} alt='banner ' />
      </div>
      <div className={style.container}>
        <Deals deals={deals} />
        <TrendingBook books={books} path={path} AddToCart={AddToCart} />
        <Bookbylang bookbylang={bookbylang} />
        <TraindingMusic music={music} path={path} AddToCart={AddToCart} />
        <div className={style.sale}>
          <img src={supersale} alt='super sale ' />
          <img src={gift} alt='gift vouchers ' />
        </div>
        <TrendingToys toys={toys} AddToCart={AddToCart} />
        <div className={style.container}>
          <img src={unicorn} className={style.unicorn} alt='unicorn banner'></img>
        </div>
      </div>
    </main>
  )
}

