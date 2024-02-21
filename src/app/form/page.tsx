'use client'
import {Input, Radio, Select, Option, Checkbox, Button} from "@mui/joy";
import {useState} from "react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
export type Inputs = {
    nameOfCustomer: string,
    nameOfCompany: string,
    nameOfProduct: string,
    contacts: string,
    isProjectExist: boolean,
    isMoreOneLanguage: boolean,
    isNeedSEO: boolean,
    isNeedSupport: boolean,
    isYouHaveDesign: boolean,
    isYouHaveBrand: boolean,
    isCommerceProject: boolean,
    Activity: string,
    typeOfProject: string,
    link: string,
    like: string[],
    dislike: string[],
    auditoryInfo: string[],
    typeOfDesign: string,
    dayOfStart: string,
    deadLine:  string,
    sumOfMoney: string,
}
export default function FormPage (){

    const [isEmail, setIsEmail] = useState(false);
    const [isProjectExist, setIsProjectExist] = useState(false);
    const [isProjectHaveMoreLanguages, setIsProjectHaveMoreLanguages] = useState(false);
    const [isNeedSEO, setIsNeedSeo] = useState(false);
    const [isNeedSupport, setIsNeedSupport] = useState(false);
    const [isNeedDesign, setIsNeedDesign] = useState(false);
    const [isNeedBrand, setIsNeedBrand] = useState(false);
    const [isCommerceProject, setIsCommerceProject] = useState(false);
    const [isConcurent, setIsConcurent] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {register, handleSubmit} = useForm<Inputs>();
    const router = useRouter();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const dataFromSchem = {
            nameOfCustomer: data.nameOfCustomer,
            nameOfCompany: data.nameOfCompany,
            nameOfProduct: data.nameOfProduct,
            contacts: data.contacts,
            isProjectExist: isProjectExist,
            isMoreOneLanguage: isProjectHaveMoreLanguages,
            isNeedSEO: isNeedSEO,
            isNeedSupport: isNeedSupport,
            isYouHaveDesign: isNeedDesign,
            isYouHaveBrand: isNeedBrand,
            isCommerceProject: isCommerceProject,
            Activity: data.Activity,
            typeOfProject: data.typeOfProject,
            link: isConcurent && data.link ? data.link : 'Не надано інформації',
            like: isConcurent && data.like.length > 0 ? data.like.join(', ') : 'Не надано інформації',
            dislike: isConcurent && data.dislike.length > 0 ? data.dislike.join(', ') : 'Не надано інформації',
            auditoryInfo: data.auditoryInfo.join(', '),
            typeOfDesign: data.typeOfDesign,
            dayOfStart: startDate.toString(),
            deadLine:  endDate.toString(),
            sumOfMoney: data.sumOfMoney,
            isEdit: false
        }
        const res = await axios.post('http://localhost:3000/api/', dataFromSchem);
        console.log(res)
        router.push('/')
    }

    return<main>
        <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
            <p style={{marginBottom: 20, marginTop: 50}}>Як до вас можна звертатися?</p>
            <Input
                {...register("nameOfCustomer", {required: true})}
                color="primary"
                size="lg"
                variant="outlined"
                placeholder='Олександр'
            />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p style={{marginBottom: 20, marginTop: 20}}>Як ми можемо з вами зв'язатися?</p>
            <div style={{marginBottom: 20}}>
            <Radio
                checked={!isEmail}
                onChange={() => setIsEmail(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Мобільний телефон"
            />
            <Radio
                checked={isEmail}
                onChange={() => setIsEmail(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Електрона пошта"
            />
            </div>
            {
                isEmail ? <Input
                    {...register("contacts")}
                    placeholder="user@mail.com"
                    color="primary"
                    size="lg"
                    variant="outlined"
                    startDecorator={<EmailIcon/>}
                /> : <Input
                    {...register("contacts")}
                    placeholder="+380235492542"
                    color="primary"
                    size="lg"
                    variant="outlined"
                    startDecorator={<SmartphoneIcon/>}
                />
            }
            <p style={{marginBottom: 20, marginTop: 20}}>Яка назва вашої компанії?</p>
            <Input
                {...register("nameOfCompany", {required: true})}
                placeholder="Name of company"
                color="primary"
                size="lg"
                variant="outlined"
            />
            <p style={{marginBottom: 20, marginTop: 20}}>Яка назва вашого продукту?</p>
            <Input
                {...register("nameOfProduct", {required: true})}
                placeholder="Product"
                color="primary"
                size="lg"
                variant="outlined"
            />
            <p style={{marginBottom: 20, marginTop: 20}}>Проєкт вже існує?</p>
            <div>
            <Radio
                checked={isProjectExist}
                onChange={() => setIsProjectExist(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isProjectExist}
                onChange={() => setIsProjectExist(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Проєкт має більше однієї мови?</p>
            <div>
            <Radio
                checked={isProjectHaveMoreLanguages}
                onChange={() => setIsProjectHaveMoreLanguages(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isProjectHaveMoreLanguages}
                onChange={() => setIsProjectHaveMoreLanguages(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібно вам SEO оптимізація?</p>
            <div>
            <Radio
                checked={isNeedSEO}
                onChange={() => setIsNeedSeo(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isNeedSEO}
                onChange={() => setIsNeedSeo(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібна вам підримка проєкту?</p>
            <div>
            <Radio
                checked={isNeedSupport}
                onChange={() => setIsNeedSupport(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isNeedSupport}
                onChange={() => setIsNeedSupport(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібен вам дизайн?</p>
            <div>
            <Radio
                checked={isNeedDesign}
                onChange={() => setIsNeedDesign(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isNeedDesign}
                onChange={() => setIsNeedDesign(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Чи у вас є бренд проєкту?</p>
            <div>
            <Radio
                checked={isNeedBrand}
                onChange={() => setIsNeedBrand(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isNeedBrand}
                onChange={() => setIsNeedBrand(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
            </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Це комерційний проєкт?</p>
            <div>
            <Radio
                checked={isCommerceProject}
                onChange={() => setIsCommerceProject(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isCommerceProject}
                onChange={() => setIsCommerceProject(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
        </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Якою сферою діяльності ви займаєтесь?</p>
            <Select
                {...register('Activity', {required: true})}
                color="primary"
                placeholder="Оберіть одне"
                size="lg"
                variant="outlined"
            >
                <Option value={'Бізнес'}>Бізнес</Option>
                <Option value={'Електронна комерція'}>Електронна комерція</Option>
                <Option value={'Фріланс'}>Фріланс</Option>
                <Option value={'Освіта'}>Освіта</Option>
                <Option value={'Некомерційна організація'}>Некомерційна організація</Option>
                <Option value={'Інше'}>Інше</Option>
            </Select>
            <p style={{marginBottom: 20, marginTop: 20}}>Який тип проєкту у вас?</p>
            <Select
                color="primary"
                placeholder="Оберіть одне"
                size="lg"
                variant="outlined"
                {...register('typeOfProject', {required: true})}
            >
                <Option value="Сайт візитка">Сайт візитка</Option>
                <Option value="Корпоративний сайт">Корпоративний сайт</Option>
                <Option value={"Інтернет-магазин"}>Інтернет-магазин</Option>
                <Option value={"Лендінг"}>Лендінг</Option>
                <Option value={"Маркетплейс"}>Маркетплейс</Option>
                <Option value={"Інше"}>Інше</Option>
            </Select>
            <p style={{marginBottom: 20, marginTop: 20}}>У вас є приклад сайтів конкурентів?</p>
            <div>
            <Radio
                checked={isConcurent}
                onChange={() => setIsConcurent(true)}
                value="true"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Так"
            />
            <Radio
                checked={!isConcurent}
                onChange={() => setIsConcurent(false)}
                value="false"
                name="radio-buttons"
                slotProps={{input: {'aria-label': 'A'}}}
                label="Ні"
            />
        </div>
            {isConcurent &&
                <>
                    <p style={{marginBottom: 20, marginTop: 20}}>Посилання на сайт конкурентів?</p>
                    <Input
                        color="primary"
                        size="lg"
                        variant="outlined"
                        {...register('link')}
                    />
                    <p style={{marginBottom: 20, marginTop: 20}}>Що вам подобається на сайті?</p>
                    <div>
                    <Checkbox
                        color="primary"
                        label="Якість"
                        size="lg"
                        variant="outlined"
                        value="Якість"
                        {...register('like')}
                    />
                    <Checkbox
                        color="primary"
                        label="Дизайн"
                        size="lg"
                        variant="outlined"
                        value="Дизайн"
                        {...register('like')}
                    />
                    <Checkbox
                        color="primary"
                        label="Популярність"
                        size="lg"
                        variant="outlined"
                        value="Популярність"
                        {...register('like')}
                    />
                    <Checkbox
                        color="primary"
                        label="Швидкодія"
                        size="lg"
                        variant="outlined"
                        value="Швидкодія"
                        {...register('like')}
                    />
                    <Checkbox
                        color="primary"
                        label="Красиві анімації"
                        size="lg"
                        variant="outlined"
                        value="Красиві анімації"
                        {...register('like')}
                    />
                    <Checkbox
                        color="primary"
                        label="Інше"
                        size="lg"
                        variant="outlined"
                        value="Інше"
                        {...register('like')}
                    />
                </div>
                    <p style={{marginBottom: 20, marginTop: 20}}>Що вам не подобається на сайті?</p>
                    <div>
                    <Checkbox
                        {...register('dislike')}
                        value='Погана якість'
                        color="primary"
                        label="Погана якість"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        {...register('dislike')}
                        value='Застарілий дизайн'
                        color="primary"
                        label="Застарілий дизайн"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        {...register('dislike')}
                        value='Не трапляється в пошуковій системі'
                        color="primary"
                        label="Не трапляється в пошуковій системі"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        {...register('dislike')}
                        value='Низька швидкодія'
                        color="primary"
                        label="Низька швидкодія"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        {...register('dislike')}
                        value='Інше'
                    color="primary"
                    label="Інше"
                    size="lg"
                    variant="outlined"
                />
                </div>
                </>
            }
            <p style={{marginBottom: 20, marginTop: 20}}>Який вік вашої цільової аудиторії?</p>
            <div>
            <Checkbox
                {...register('auditoryInfo')}
                value="10-13"
                color="primary"
                label="10-13"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                {...register('auditoryInfo')}
                color="primary"
                label="13-17"
                value="13-17"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                {...register('auditoryInfo')}
                color="primary"
                value="17-21"
                label="17-21"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                {...register('auditoryInfo')}
                color="primary"
                label="21-30"
                value="21-30"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                {...register('auditoryInfo')}
                color="primary"
                label="30-40"
                value="30-40"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                {...register('auditoryInfo')}
                color="primary"
                label="40+"
                value="40+"
                size="lg"
                variant="outlined"
            />
        </div>
            <p style={{marginBottom: 20, marginTop: 20}}>Який тип дизайну ви хочете?</p>
            <Select
                {...register('typeOfDesign', {required: true})}
                color="primary"
                placeholder="Оберіть одне"
                size="lg"
                variant="outlined"
            >
                <Option value={'Мінімалістичний'}>Мінімалістичний</Option>
                <Option value={'Плоский'}>Плоский</Option>
                <Option value={'Матеріальний'}>Матеріальний</Option>
                <Option value={'Типографський'}>Типографський</Option>
                <Option value={'Ілюстративний'}>Ілюстративний</Option>
                <Option value={'Інше'}>Інше</Option>
            </Select>
            <p style={{marginBottom: 20, marginTop: 20}}>Дата початку роботи</p>
            <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)}/>
            <p style={{marginBottom: 20, marginTop: 20}}>Дата кінця роботи</p>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
            <p style={{marginBottom: 20, marginTop: 20}}>Очікувана сума затрат на проєкт</p>
            <Input
                {...register('sumOfMoney', {required: true})}
                color="primary"
                size="lg"
                variant="outlined"
                startDecorator={<AttachMoneyIcon/>}
            />
            <Button style={{marginBottom: 20, marginTop: 20}} type={"submit"}>Відправити результат</Button>
        </form>
    </main>

}
