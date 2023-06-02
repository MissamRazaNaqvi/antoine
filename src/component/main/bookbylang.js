import { Link } from 'react-router-dom'
import style from '../../assets/css/main/main.module.css'
export default function Bookbylang({ bookbylang }) {
    return (
        <div>
            <p className={style.bookTitle}>Books by Language</p>
            <div className={style.container}>
                <div className={style.bookContainer}>
                    {bookbylang.map((book, index) => {
                        return (
                            <div className={style.langCard} key={index} style={{ "background": book.color }}>
                                <div className={style.language}>
                                    <p>{book.langauge}</p>
                                    <Link to={book.langauge}>View Collection</Link>
                                </div>
                                <div className={style.bookImg}>
                                    <img src={book.img1} alt='book by language' />
                                    <img src={book.img2} alt='book by language' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
