import React from 'react';
import MomChild from './MomChild'
import medicines from './Medicines';
import hygiene from './Hygiene';
import PaiCramp from './PainCramp'
export const IconCount = React.createContext({
    count: 0,
    onChange: () => { }
});

const data = [
    {
        name: 'Medicines',
        info: 'jsljal',
        id: 1,
        img: 'https://medex.am/_mx/uploads/topics/images/headache-medication.jpg?h=203&w=370',
        data: medicines
    },
    {
        name: 'Hygiene',
        info: 'dsjakxsa',
        id: 2,
        img: 'https://cdn.shopify.com/s/files/1/1600/4387/products/1-DVL-hero.png?v=1573838539',
        data: hygiene
    },
    {
        name: 'Mom and child',
        info: 'jsljal',
        id: 3,
        img: 'https://i3.imgbb.ru/img8/2/d/a/2daef2b3448b29891f9875fbcb814095.jpg',
        data: MomChild

    },
    {
        name: 'Pain and Cramp',
        info: 'dsjakxsa',
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy2s8AWh328dmSUHAFCObHMq6NPp2rKtt2Jg&usqp=CAU',
        data: PaiCramp
    },
    {
        name: 'Stomatologia',
        info: 'jsljal',
        id: 5,
        img: 'https://cool-info.ru/wp-content/uploads/2018/09/zdorovie_zubi.JOabh_.jpg',
    },
    {
        name: 'Kosmetologia',
        info: 'dsjakxsa',
        id: 6,
        img: 'https://mamul.am/images/photos/160312/garnany-kariq-ka-pho-n81148-1.jpg',
    },
    {
        name: 'Mankabarc',
        info: 'jsljal',
        id: 7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-uqLwy3rwRuvxUyA88Nsm76ER-JdYP3TvKA&usqp=CAU',
    },
    {
        name: 'Aknabuj',
        info: 'dsjakxsa',
        id: 8,
        img: 'https://www.gapex.am/images/clinic/7.jpg',
    },
]
export default data





