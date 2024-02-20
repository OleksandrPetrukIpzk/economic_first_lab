'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Checkbox, Input, Option, Radio, Select} from "@mui/joy";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    params:{
        id: string,
    }
}
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
    like: string,
    dislike: string,
    auditoryInfo: string,
    typeOfDesign: string,
    dayOfStart: string,
    deadLine:  string,
    sumOfMoney: string,
}
export default function ChangeForm({params: {id}}: Props) {
    const [brif, setBrif] = useState<Inputs>({
        nameOfCustomer: 'string',
        nameOfCompany: 'string',
        nameOfProduct: 'string',
        contacts: 'string',
        isProjectExist: false,
        isMoreOneLanguage: false,
        isNeedSEO: false,
        isNeedSupport: false,
        isYouHaveDesign: false,
        isYouHaveBrand: false,
        isCommerceProject: false,
        Activity: 'string',
        typeOfProject: 'string',
        link: 'string',
        like: '',
        dislike: '',
        auditoryInfo: '',
        typeOfDesign: 'string',
        dayOfStart: 'string',
        deadLine:  'string',
        sumOfMoney: 'string',
    });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const likeValues = ['Якість', 'Дизайн', 'Популярність', 'Швидкодія', 'Красиві анімації', 'Інше'];
    const unlikeValues = ['Погана якість', 'Застарілий дизайн', 'Не трапляється в пошуковій системі', 'Низька швидкодія', 'Інше'];
    const auditoryYears = ['10-13', '13-17', '17-21', '21-30', '30-40', '40+'];
    useEffect(() => {
        const getBriefById = async () =>{
            await axios.get('http://localhost:3000/api/'+id).then(res => {
                setBrif(res.data.foundBrif);
                setStartDate(new Date(res.data.foundBrif.dayOfStart));
                setEndDate(new Date(res.data.foundBrif.deadLine));
            }).catch(err => console.log(err))
        }
        getBriefById()
    }, []);
    const handleChange = async (idx: string, value:any, elementOfValue = '') =>{
        const sendValue = brif;
        if(idx === 'like' || idx === 'dislike' || idx === 'auditoryInfo'){
            let arr = brif[idx].split(', ');
            if(arr[0] == 'Не'){
            arr = [];
            }
            if(arr.includes(value)){
                const index = arr.findIndex(item => item === value);
                arr.splice(index, 1);
            } else{
                arr.push(value)
            }
            sendValue[idx] = arr.join(', ');
            setBrif(prev => {
                return { ...prev, [idx]: arr.join(', ') };
            });
        }
        else if(idx === 'dayOfStart' || idx === 'deadLine'){
            if(idx === 'dayOfStart'){
                setStartDate(value);
            } else{
                setEndDate(value);
            }
            sendValue[idx] = value.toString();
            setBrif(prev => {
                return { ...prev, [idx]: value.toString()};
            });
        }
        else{
            sendValue[idx] = value;
            setBrif(prev => {
                return { ...prev, [idx]: value};
            });
        }
        console.log(sendValue)
        sendValue.isEdit = true;
      await axios.put('http://localhost:3000/api/' + id, sendValue);
    }
    return (<>
        <div style={{display:'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
                <p style={{marginBottom: 20, marginTop: 50}}>Як до вас можна звертатися?</p>
                <Input
                    onChange={(e) => handleChange('nameOfCustomer', e.target.value)}
                    value={brif?.nameOfCustomer}
                    color="primary"
                    size="lg"
                    variant="outlined"
                    placeholder='Олександр'
                />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p style={{marginBottom: 20, marginTop: 20}}>Як ми можемо з вами зв'язатися?</p>
                 <Input
                     onChange={(e) => handleChange('contacts', e.target.value)}
                     value={brif?.contacts}
                        color="primary"
                        size="lg"
                        variant="outlined"
                    />
                <p style={{marginBottom: 20, marginTop: 20}}>Яка назва вашої компанії?</p>
                <Input
                    onChange={(e) => handleChange('nameOfCompany', e.target.value)}
                    value={brif?.nameOfCompany}
                    placeholder="Name of company"
                    color="primary"
                    size="lg"
                    variant="outlined"
                />
                <p style={{marginBottom: 20, marginTop: 20}}>Яка назва вашого продукту?</p>
                <Input
                    onChange={(e) => handleChange('nameOfProduct', e.target.value)}
                    value={brif?.nameOfProduct}
                    placeholder="Product"
                    color="primary"
                    size="lg"
                    variant="outlined"
                />
                <p style={{marginBottom: 20, marginTop: 20}}>Проєкт вже існує?</p>
            <div>
                <Radio
                    checked={brif?.isProjectExist}
                    onChange={(e) => handleChange('isProjectExist', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isProjectExist}
                    onChange={(e) => handleChange('isProjectExist', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Проєкт має більше однієї мови?</p>
            <div>
                <Radio
                    checked={brif?.isMoreOneLanguage}
                    onChange={(e) => handleChange('isMoreOneLanguage', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isMoreOneLanguage}
                    onChange={(e) => handleChange('isMoreOneLanguage', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібно вам SEO оптимізація?</p>
            <div>
                <Radio
                    checked={brif?.isNeedSEO}
                    onChange={(e) => handleChange('isNeedSEO', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isNeedSEO}
                    onChange={(e) => handleChange('isNeedSEO', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібна вам підримка проєкту?</p>
            <div>
                <Radio
                    checked={brif?.isNeedSupport}
                    onChange={(e) => handleChange('isNeedSupport', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isNeedSupport}
                    onChange={(e) => handleChange('isNeedSupport', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Чи потрібен вам дизайн?</p>
            <div>
                <Radio
                    checked={brif?.isYouHaveDesign}
                    onChange={(e) => handleChange('isYouHaveDesign', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isYouHaveDesign}
                    onChange={(e) => handleChange('isYouHaveDesign', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Чи у вас є бренд проєкту?</p>
            <div>
                <Radio
                    checked={brif?.isYouHaveBrand}
                    onChange={(e) => handleChange('isYouHaveBrand', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isYouHaveBrand}
                    onChange={(e) => handleChange('isYouHaveBrand', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Це комерційний проєкт?</p>
            <div>
                <Radio
                    checked={brif?.isCommerceProject}
                    onChange={(e) => handleChange('isCommerceProject', true)}
                    value="true"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Так"
                />
                <Radio
                    checked={!brif?.isCommerceProject}
                    onChange={(e) => handleChange('isCommerceProject', false)}
                    value="false"
                    name="radio-buttons"
                    slotProps={{input: {'aria-label': 'A'}}}
                    label="Ні"
                />
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Якою сферою діяльності ви займаєтесь?</p>
                <Select
                    onChange={(e) => e && handleChange('Activity', e.target.innerHTML)}
                    value={brif?.Activity}
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
                    onChange={(e) => e && handleChange('typeOfProject', e.target.innerHTML)}
                    color="primary"
                    placeholder="Оберіть одне"
                    size="lg"
                    variant="outlined"
                    value={brif?.typeOfProject}
                >
                    <Option value="Сайт візитка">Сайт візитка</Option>
                    <Option value="Корпоративний сайт">Корпоративний сайт</Option>
                    <Option value={"Інтернет-магазин"}>Інтернет-магазин</Option>
                    <Option value={"Лендінг"}>Лендінг</Option>
                    <Option value={"Маркетплейс"}>Маркетплейс</Option>
                    <Option value={"Інше"}>Інше</Option>
                </Select>
                        <p style={{marginBottom: 20, marginTop: 20}}>Посилання на сайт конкурентів?</p>
                        <Input
                            onChange={(e) => handleChange('link', e.target.value)}
                            color="primary"
                            size="lg"
                            variant="outlined"
                            value={brif?.link}
                        />
                        <p style={{marginBottom: 20, marginTop: 20}}>Що вам подобається на сайті?</p>
            <div>
            {likeValues.map(item =>{
                const arr = brif.like.split(", ");
               return <Checkbox
                   key={item}
                    onChange={(e) => handleChange('like', e.target.value)}
                    color="primary"
                    label={item}
                    size="lg"
                    variant="outlined"
                    value={item}
                   checked={arr.includes(item)}
                />
            })}
            </div>
                        <p style={{marginBottom: 20, marginTop: 20}}>Що вам не подобається на сайті?</p>
            <div>
            {unlikeValues.map(item =>{
                const arr = brif.dislike.split(", ");
              return  <Checkbox
                  key={item}
                    onChange={(e) => handleChange('dislike', e.target.value)}
                    color="primary"
                    label={item}
                    size="lg"
                    variant="outlined"
                    value={item}
                  checked={arr.includes(item)}
                />
            })}
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Який вік вашої цільової аудиторії?</p>
            <div>
            {auditoryYears.map(item =>{
                const arr = brif.auditoryInfo.split(", ");
               return <Checkbox
                   key={item}
                    onChange={(e) => handleChange('auditoryInfo', e.target.value)}
                    color="primary"
                    label={item}
                    size="lg"
                    variant="outlined"
                    value={item}
                    checked={arr.includes(item)}
                />
            })}
            </div>
                <p style={{marginBottom: 20, marginTop: 20}}>Який тип дизайну ви хочете?</p>
                <Select
                    onChange={(e) => e && handleChange('typeOfDesign', e.target.innerHTML)}
                    value={brif?.typeOfDesign}
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
                <DatePicker selected={startDate} onChange={(e) => handleChange('dayOfStart', e)}/>
                <p style={{marginBottom: 20, marginTop: 20}}>Дата кінця роботи</p>
                <DatePicker selected={endDate} onChange={(e) => handleChange('deadLine', e)}/>
                <p style={{marginBottom: 20, marginTop: 20}}>Очікувана сума затрат на проєкт</p>
                <Input
                    onChange={(e) => handleChange('sumOfMoney', e.target.value)}
                    value={brif?.sumOfMoney}
                    color="primary"
                    size="lg"
                    variant="outlined"
                    startDecorator={<AttachMoneyIcon/>}
                />
        </div>
        </>)
}
