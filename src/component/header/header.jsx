import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcountry, getMegaMenu, getMenu } from '../../store/action/country'
import EndHeader from './endHeader'
import MidHeader from './midHeader'
import TopHeader from './topHeader'

import style from '../../assets/css/header/header.module.css'

export default function Header() {
    const { menu, country } = useSelector(state => state.countries)
    const { megamenu } = useSelector(state => state.productListingSlice)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcountry())
        dispatch(getMenu())
        dispatch(getMegaMenu())
    }, []);
    return (
        <header className={style.header}>
            <TopHeader country={country} />
            <MidHeader country={country} menu={menu} megamenu={megamenu} />
            <EndHeader menu={menu} megamenu={megamenu} />
        </header>
    )
}
