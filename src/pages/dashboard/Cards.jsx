import React, { useEffect, useState } from 'react';
import SpinnerLoad from '../../components/SpinnerLoad';
import { getOrdersStatisticsService } from '../../services/orders';
import Card from './Card';

const cardObjects = [
    {
        key:1,
        name: "carts",
        currentValue:"",
        title:"سبد خرید امروز",
        desc:"سبد های خرید مانده امروز",
        icon:"fas fa-shopping-basket",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        key:2,
        name: "pendingOrders",
        currentValue:"",
        title:"سفارشات مانده امروز",
        desc:" سفارشات معلق و فاقد پرداختی",
        icon:"fas fa-dolly",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        key:3,
        name: "successOrders",
        currentValue:"",
        title:"سفارشات امروز",
        desc:"سفارشات کامل و دارای پرداختی",
        icon:"fas fa-luggage-cart",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        key:4,
        name:"successOrdersAmount",
        currentValue:"",
        title:"درآمد امروز",
        desc:"جمع مبالغ پرداختی (تومان)",
        icon:"fas fa-money-check-alt",
        lastWeekValue:"",
        lastMonthValue:"",
    },
]

const Cards = () => {
    const [cardInfos, setCardInfos] = useState(cardObjects)
    const [loading, setLoading] = useState(false)

    const handleGetCardInfos = async ()=>{
        setLoading(true)
        const res = await getOrdersStatisticsService();
        setLoading(false)
        if (res.status === 200) {
            const data = res.data.data
            let newCardObj = [...cardObjects]
            for (const key in data) {
                const index = newCardObj.findIndex(co=>co.name == key)
                newCardObj[index].currentValue = data[key].today
                newCardObj[index].lastWeekValue = data[key].thisWeek
                newCardObj[index].lastMonthValue = data[key].thisMonth
            }
            setCardInfos(newCardObj)
        }
    }

    useEffect(()=>{
        handleGetCardInfos()
    },[])

    return (
        <div className="row">
            {loading ? (<SpinnerLoad colorClass={"text-primary"}/>) 
            : cardInfos.map(cardInfo=>(
                <Card {...cardInfo}/>
            ))}
        </div>
    );
}

export default Cards;
