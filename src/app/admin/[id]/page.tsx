'use client'
import {useEffect, useState} from "react";
import {Inputs} from "@/app/form/page";
import axios from "axios";

type Props = {
    params:{
        id: string,
    }
}
export default function View({params: {id}}: Props){
    const [brif, setBrif] = useState<Inputs>()
    useEffect(() => {
        const getBriefById = async () =>{
            await axios.get('http://localhost:3000/api/'+id).then(res => setBrif(res.data.foundBrif)).catch(err => console.log(err))
        }
        getBriefById();

    }, []);
    return(
        <main style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: 5}}>
                <p>Як до вас можна звертатися? -</p>
                <p>{brif?.nameOfCustomer}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Як ми можемо з вами зв'язатися? -</p>
                <p>{brif?.contacts}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Яка назва вашої компанії? -</p>
                <p>{brif?.nameOfCompany}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Яка назва вашого продукту? -</p>
                <p>{brif?.nameOfProduct}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Проєкт вже існує? -</p>
                <p>{brif?.isProjectExist ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Проєкт має більше однієї мови? -</p>
                <p>{brif?.isMoreOneLanguage ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Чи потрібно вам SEO оптимізація? -</p>
                <p>{brif?.isNeedSEO ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Чи потрібна вам підримка проєкту? -</p>
                <p>{brif?.isNeedSupport ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Чи потрібен вам дизайн? -</p>
                <p>{brif?.isYouHaveDesign ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Чи у вас є бренд проєкту? -</p>
                <p>{brif?.isYouHaveBrand ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Це комерційний проєкт? -</p>
                <p>{brif?.isCommerceProject ? "Так" : "Ні"}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Якою сферою діяльності ви займаєтесь? -</p>
                <p>{brif?.Activity}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Який тип проєкту у вас? -</p>
                <p>{brif?.typeOfProject}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Посилання на сайт конкурентів? -</p>
                <p>{brif?.link}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Що вам подобається на сайті? -</p>
                <p>{brif?.like}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Що вам не подобається на сайті? -</p>
                <p>{brif?.dislike}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Який вік вашої цільової аудиторії? -</p>
                <p>{brif?.auditoryInfo}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Який тип дизайну ви хочете? -</p>
                <p>{brif?.typeOfDesign}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Дата початку роботи -</p>
                <p>{brif?.dayOfStart}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Дата кінця роботи -</p>
                <p>{brif?.deadLine}</p>
            </div>
            <div style={{display: 'flex', gap: 5}}>
                <p>Очікувана сума затрат на проєкт -</p>
                <p>{brif?.sumOfMoney}</p>
            </div>
        </main>
)
}
