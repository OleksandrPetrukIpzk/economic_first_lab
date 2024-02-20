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
        <main>
            <p>Як до вас можна звертатися?</p>
            <p>{brif?.nameOfCustomer}</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Як ми можемо з вами зв'язатися?</p>
            <p>{brif?.contacts}</p>
            <p>Яка назва вашої компанії?</p>
            <p>{brif?.nameOfCompany}</p>
            <p>Яка назва вашого продукту?</p>
            <p>{brif?.nameOfProduct}</p>
            <p>Проєкт вже існує?</p>
            <p>{brif?.isProjectExist ? "Так" : "Ні"}</p>
            <p>Проєкт має більше однієї мови?</p>
            <p>{brif?.isMoreOneLanguage ? "Так" : "Ні"}</p>
            <p>Чи потрібно вам SEO оптимізація?</p>
            <p>{brif?.isNeedSEO ? "Так" : "Ні"}</p>
            <p>Чи потрібна вам підримка проєкту?</p>
            <p>{brif?.isNeedSupport ? "Так" : "Ні"}</p>
            <p>Чи потрібен вам дизайн?</p>
            <p>{brif?.isYouHaveDesign ? "Так" : "Ні"}</p>
            <p>Чи у вас є бренд проєкту?</p>
            <p>{brif?.isYouHaveBrand ? "Так" : "Ні"}</p>
            <p>Це комерційний проєкт?</p>
            <p>{brif?.isCommerceProject ? "Так" : "Ні"}</p>
            <p>Якою сферою діяльності ви займаєтесь?</p>
            <p>{brif?.Activity}</p>
            <p>Який тип проєкту у вас?</p>
            <p>{brif?.typeOfProject}</p>
            <p>Посилання на сайт конкурентів?</p>
            <p>{brif?.link}</p>
            <p>Що вам подобається на сайті?</p>
            <p>{brif?.like}</p>
            <p>Що вам не подобається на сайті?</p>
            <p>{brif?.dislike}</p>
            <p>Який вік вашої цільової аудиторії?</p>
            <p>{brif?.auditoryInfo}</p>
            <p>Який тип дизайну ви хочете?</p>
            <p>{brif?.typeOfDesign}</p>
            <p>Дата початку роботи</p>
            <p>{brif?.dayOfStart}</p>
            <p>Дата кінця роботи</p>
            <p>{brif?.deadLine}</p>
            <p>Очікувана сума затрат на проєкт</p>
            <p>{brif?.sumOfMoney}</p>
        </main>
    )
}
