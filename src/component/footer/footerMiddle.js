
import { useTranslation } from 'react-i18next'
import style from '../../assets/css/footer/footer.module.css'
import MobileFooter from '../mobileView/mobileFooter'

export default function FooterMiddle({ menu, aboutus, service }) {
  let { t } = useTranslation()
  return (
    <div className={style.container}>
      <div className={style.mobileFooter}>
        <MobileFooter menu={menu} aboutus={aboutus} service={service} />
      </div>
      <div className={style.middleFooter}>
        <ul className={style.categories}>
          <div className={style.text}>
            {t('Categories')}
          </div>
          {
            menu && menu?.map((item, index) => {
              return <li key={index}>{t(item)}</li>
            })
          }
        </ul>
        <ul className={style.categories}>
          <div className={style.text}>
            {t('About us')}
          </div>
          {
            aboutus && aboutus?.map((item, index) => {
              return <li key={index}>{t(item)}</li>
            })
          }
        </ul>
        <ul className={style.categories}>
          <div className={style.text}>
            {t('Customer Service')}
          </div>
          {
            service && service?.map((item, index) => {
              return <li key={index}>{t(item)}</li>
            })
          }
        </ul>
        <div>
          <div className={style.text}>
            <p>{t('Sign up for savings, news, and updates')}</p>
          </div>
          <div className={style.email}>
            <input type='email' placeholder={t('Email address')} />
            <button >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                <path id="ic_arrow_right" d="M9.75,29a1.763,1.763,0,0,0,1.237-.5l10.5-10.286a1.69,1.69,0,0,0,0-2.424L10.987,5.5a1.776,1.776,0,0,0-2.475,0,1.69,1.69,0,0,0,0,2.424L17.775,17,8.513,26.074a1.69,1.69,0,0,0,0,2.424A1.763,1.763,0,0,0,9.75,29Z" transform="translate(-8 -5)" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={style.bottomFooter}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="85" height="70" viewBox="0 0 85 70">
            <g id="AA-logo" transform="translate(-214.748 -334.386)">
              <path id="Path_5374" data-name="Path 5374" d="M289.7,379.315l-17.048-44.929H262.365L245.06,379.315h10.152l2.883-8.057c5.236-6.59,10.725,2.871,18.4,0l2.8,8.057Zm-28.29-17.369,5.939-16.486h.13l5.748,16.486Z" transform="translate(-12.586)" />
              <rect id="Rectangle_1826" data-name="Rectangle 1826" width="9.81" height="9.738" transform="translate(282.477 369.577)" />
              <g id="Group_4885" data-name="Group 4885" transform="translate(269.241 384.874)">
                <path id="Path_5375" data-name="Path 5375" d="M307.935,421.751v3.48h1.709v-3.48Z" transform="translate(-307.935 -421.751)" />
              </g>
              <path id="Path_5376" data-name="Path 5376" d="M224.086,422.712h-1.724l-7.614,18.656h2s2.146-5.328,2.32-5.756h8.213c.169.431,2.289,5.756,2.289,5.756h2Zm-4.37,11.217c.332-.829,3.008-7.524,3.525-8.825.505,1.307,3.077,8,3.394,8.825Z" transform="translate(0 -37.282)" />
              <g id="Group_4886" data-name="Group 4886" transform="translate(233.225 390.146)">
                <path id="Path_5377" data-name="Path 5377" d="M248.052,433.335v-2.16h-1.708v13.639h1.708v-7.347c0-3.058,1.7-5.033,4.341-5.033,3,0,3.348,2.2,3.348,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.032-5.591A5.16,5.16,0,0,0,248.052,433.335Z" transform="translate(-246.344 -430.873)" />
              </g>
              <g id="Group_4887" data-name="Group 4887" transform="translate(245.78 386.436)">
                <path id="Path_5378" data-name="Path 5378" d="M270.238,424.454v4.011h-2.423v1.558h2.423v8.644c-.005.085-.007.158-.007.239a3.148,3.148,0,0,0,.839,2.4,4.366,4.366,0,0,0,3.356.8l.346-.027v-1.556l-.378.014c-.988.028-1.672-.021-2.034-.37a2.047,2.047,0,0,1-.413-1.5v-8.644H274.8v-1.558h-2.853v-4.011Z" transform="translate(-267.815 -424.454)" />
              </g>
              <path id="Path_5379" data-name="Path 5379" d="M288.186,430.873c-3.762,0-6.382,2.928-6.382,7.116s2.62,7.124,6.382,7.124,6.376-2.934,6.376-7.124S291.937,430.873,288.186,430.873Zm0,12.672c-3.214,0-4.676-2.878-4.676-5.556s1.462-5.555,4.676-5.555,4.669,2.88,4.669,5.555S291.394,443.545,288.186,443.545Z" transform="translate(-27.843 -40.727)" />
              <g id="Group_4888" data-name="Group 4888" transform="translate(269.241 390.448)">
                <path id="Path_5380" data-name="Path 5380" d="M307.935,431.4v13.638h1.709V431.4Z" transform="translate(-307.935 -431.395)" />
              </g>
              <g id="Group_4889" data-name="Group 4889" transform="translate(274.058 390.146)">
                <path id="Path_5381" data-name="Path 5381" d="M317.88,433.335v-2.16h-1.709v13.639h1.709v-7.347c0-3.058,1.7-5.033,4.338-5.033,3,0,3.351,2.2,3.351,3.852v8.528h1.708v-8.35c0-1.381,0-5.591-5.031-5.591A5.161,5.161,0,0,0,317.88,433.335Z" transform="translate(-316.171 -430.873)" />
              </g>
              <g id="Group_4890" data-name="Group 4890" transform="translate(287.454 390.146)">
                <path id="Path_5382" data-name="Path 5382" d="M349.58,432.569a5.869,5.869,0,0,0-4.348-1.7,5.653,5.653,0,0,0-4.11,1.64,7.894,7.894,0,0,0-2.041,5.707,7.147,7.147,0,0,0,1.887,5.232,5.873,5.873,0,0,0,4.265,1.661,5.646,5.646,0,0,0,6.024-4.982l.07-.425h-1.717l-.053.3a4.14,4.14,0,0,1-4.323,3.542,4.007,4.007,0,0,1-2.959-1.167,5.731,5.731,0,0,1-1.449-3.9h10.521l.016-.349c.006-.165.012-.337.012-.5A7.169,7.169,0,0,0,349.58,432.569Zm-8.706,4.356c.33-2.291,1.84-4.491,4.358-4.491,2.694,0,4.166,2.2,4.355,4.491Z" transform="translate(-339.079 -430.873)" />
              </g>
            </g>
          </svg>

        </div>
        <p>{t('Copyright 2013-2021 - Antoine Online - All Rights Reserved')} </p>
        <p>{t('Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.')}</p>
      </div>
    </div>
  )
}
