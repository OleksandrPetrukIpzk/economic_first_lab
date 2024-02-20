'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { Inputs } from "@/app/form/page";
import Link from "next/link";
import { Button } from "@mui/joy";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "@fontsource/roboto";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default function Admin() {
    const [brifs, setBrifs] = useState<Inputs[]>([]);
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api');
                setBrifs(response.data.elements);
            } catch (error) {
                console.log(error);
            }
        };
        getAll();
    }, [isChange]);

    const deleteElement = async (id: string) => {
       await axios.delete('http://localhost:3000/api/' + id);
        setIsChange(prev => !prev);
    };
    const createPDF = async (id: string) =>{
        const resolve =  await axios.get('http://localhost:3000/api/'+id);
        const data = resolve.data.foundBrif;
        const text = "Як до вас можна звертатися?\n" +
            `${data?.nameOfCustomer}\n` +
            "Як ми можемо з вами зв'язатися?\n" +
            `${data?.contacts}\n` +
            "Яка назва вашої компанії?\n" +
            `${data?.nameOfCompany}\n` +
            "Яка назва вашого продукту?\n" +
            `${data?.nameOfProduct}\n `+
            "Проєкт вже існує?\n" +
            `${data?.isProjectExist ? "Так" : "Ні"}\n` +
            "Проєкт має більше однієї мови?\n" +
            `${data?.isMoreOneLanguage ? "Так" : "Ні"}\n` +
            "Чи потрібно вам SEO оптимізація?\n" +
            `${data?.isNeedSEO ? "Так" : "Ні"}\n` +
            "Чи потрібна вам підримка проєкту?\n" +
            `${data?.isNeedSupport ? "Так" : "Ні"}\n` +
            "Чи потрібен вам дизайн?\n" +
            `${data?.isYouHaveDesign ? "Так" : "Ні"}\n` +
            "Чи у вас є бренд проєкту?\n" +
            `${data?.isYouHaveBrand ? "Так" : "Ні"}\n` +
            "Це комерційний проєкт?\n" +
            `${data?.isCommerceProject ? "Так" : "Ні"}\n` +
            "Якою сферою діяльності ви займаєтесь?\n" +
            `${data?.Activity}\n` +
            "Який тип проєкту у вас?\n" +
            `${data?.typeOfProject}\n` +
            "Посилання на сайт конкурентів?\n" +
            `${data?.link}\n` +
            " Що вам подобається на сайті?\n" +
            `${data?.like}\n` +
            "Що вам не подобається на сайті?\n" +
            `${data?.dislike}\n` +
            "Який вік вашої цільової аудиторії?\n" +
            `${data?.auditoryInfo}\n` +
            "Який тип дизайну ви хочете?\n" +
            `${data?.typeOfDesign}\n` +
            "Дата початку роботи\n" +
            `${data?.dayOfStart}\n` +
            "Дата кінця роботи\n" +
            `${data?.deadLine}\n` +
            "Очікувана сума затрат на проєкт\n" +
            `${data?.sumOfMoney}\n`;
        pdfMake.createPdf({	content: [
                text
            ]}).download();
    }
    return (
        <div>
            {brifs.map((brif) => {
                return (
                    <div key={brif._id}>
                        <Link href={'admin/'+ brif._id}>
                            <p>Name: {brif.nameOfCustomer}</p>
                            <p>Date of start: {brif.dayOfStart}</p>
                            <p>Salary: {brif.sumOfMoney}</p>
                        </Link>
                            <Button
                                color="danger"
                                onClick={() => deleteElement(brif._id)}
                                size="lg"
                            >
                                Delete brief
                            </Button>
                        <Link href={'admin/' + brif._id + '/change'}>
                            <Button color="primary" size="lg">
                                Edit brief
                            </Button>
                        </Link>
                            <Button color="warning" size="lg" onClick={() => createPDF(brif._id)}>
                                Download PDF
                            </Button>

                    </div>
                );
            })}
        </div>
    );
}
