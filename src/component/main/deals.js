import { t } from 'i18next'
import style from '../../assets/css/main/main.module.css'
export default function Deals({ deals }) {
    // console.log('deals from Deals table  ', deals);
    return (
        <div className={style.deal}>
            {deals.map((deal, index) => {
                return (
                    <div className={style.dealCard} key={index}>
                        <img src={deal.img} alt='wherwq'></img>
                        <p className={style.deals}>{t(deal.text)}</p>
                    </div>
                )
            })}
        </div>
    )
}
