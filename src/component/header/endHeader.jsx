import { useState } from 'react';
import style from '../../assets/css/header/header.module.css'
export default function EndHeader({ menu, megamenu }) {
    const [state, setstate] = useState(false);
    return (
        <nav className={style.endHeader}>
            <div className={style.container}>
                <ul className={style.menulist} >
                    {menu.map((item, index) => {
                        return (
                            <li className={style.menu} key={index} onClick={() => { setstate(!state) }} >
                                {/* <Link className={style.menulink} to={item}> */}
                                {item}
                                {/* </Link> */}
                            </li>
                        )
                    })}
                </ul>
                <div className={style.container}>
                    {state ?
                        <div className={style.megaMenu} >
                            <ul className={style.subjectUl}>
                                <li><b> TOP SUBJECTS</b></li>
                                {
                                    megamenu.length > 0 && megamenu[0].topsubject.map((subject, index) => {
                                        return (
                                            <li key={index}>{subject.name}</li>)
                                    })
                                }
                            </ul>
                            <ul className={style.browseUl}>
                                <li><b>BROWSE</b></li>
                                {
                                    megamenu.length > 0 && megamenu[0].browse.map((item, index) => {
                                        return (
                                            <li key={index}>{item.name}</li>)

                                    })
                                }
                            </ul>
                            <ul className={style.departmentUl}>
                                <li><b>DEPARTMENTS</b></li>
                                {
                                    megamenu.length > 0 && megamenu[0].departments.map((dept, index) => {
                                        return (
                                            <li key={index}>{dept.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className={style.megamenuUL}>
                                <li>{
                                    megamenu.length > 0 && megamenu[0].megamenuImg.map((item, index) => {
                                        return (
                                            <span key={index}>
                                                <img src={item.img} alt='mega menu product' />
                                            </span>
                                        )
                                    })
                                }</li>

                            </ul>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </nav>
    )
}
