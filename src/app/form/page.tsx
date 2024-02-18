'use client'
import {Input, Radio, Select, Option, Checkbox} from "@mui/joy";
import {useState} from "react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
// @ts-ignore
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
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
    return(<main>
        <form>
            <p>Як до вас можна звертатися?</p>
            <Input
                color="primary"
                size="lg"
                variant="outlined"
            />
            <p>Яка назва вашої компанії?</p>
            <Input
                color="primary"
                size="lg"
                variant="outlined"
            />
            <p>Яка назва вашого продукту?</p>
            <Input
                color="primary"
                size="lg"
                variant="outlined"
            />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Як ми можемо з вами зв'язатися?</p>
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
            {
                isEmail ? <Input
                    color="primary"
                    size="lg"
                    variant="outlined"
                    startDecorator={<EmailIcon/>}
                /> : <Input
                    color="primary"
                    size="lg"
                    variant="outlined"
                    startDecorator={<SmartphoneIcon/>}
                />
            }
            <p>Проєкт вже існує?</p>
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
            <p>Проєкт має більше однієї мови?</p>
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
            <p>Чи потрібно вам SEO оптимізація?</p>
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
            <p>Чи потрібна вам підримка проєкту?</p>
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
            <p>Чи потрібен вам дизайн?</p>
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
            <p>Чи у вас є бренд проєкту?</p>
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
            <p>Це комерційний проєкт?</p>
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
            <p>Якою сферою діяльності ви займаєтесь?</p>
            <Select
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
            <p>Який тип проєкту у вас?</p>
            <Select
                color="primary"
                placeholder="Оберіть одне"
                size="lg"
                variant="outlined"
            >
                <Option value="Сайт візитка">Сайт візитка</Option>
                <Option value="Корпоративний сайт">Корпоративний сайт</Option>
                <Option value={"Інтернет-магазин"}>Інтернет-магазин</Option>
                <Option value={"Лендінг"}>Лендінг</Option>
                <Option value={"Маркетплейс"}>Маркетплейс</Option>
                <Option value={"Інше"}>Інше</Option>
            </Select>
            <p>У вас є приклад сайтів конкурентів?</p>
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
            {isConcurent &&
                <>
                    <p>Посилання на сайт конкурентів?</p>
                    <Input
                        color="primary"
                        size="lg"
                        variant="outlined"
                    />
                    <p>Що вам подобається на сайті?</p>
                    <Checkbox
                        color="primary"
                        label="Якість"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Дизайн"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Популярність"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Швидкодія"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Красиві анімації"
                        size="lg"
                        variant="outlined"
                    />
                    <p>Що вам не подобається на сайті?</p>
                    <Checkbox
                        color="primary"
                        label="Погана якість"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Застарілий дизайн"
                        size="lg"
                        variant="outlined"
                    />
                    <Checkbox
                        color="primary"
                        label="Низька швидкодія"
                        size="lg"
                        variant="outlined"
                    />
                </>
            }
            <p>Який цільовий вік вашої аудиторії?</p>
            <Checkbox
                color="primary"
                label="10-13"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                color="primary"
                label="13-17"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                color="primary"
                label="17-21"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                color="primary"
                label="21-30"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                color="primary"
                label="30-40"
                size="lg"
                variant="outlined"
            />
            <Checkbox
                color="primary"
                label="40+"
                size="lg"
                variant="outlined"
            />
            <p>Який тип дизайну ви хочете?</p>
            <Select
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
            <p>Дата початку роботи</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            <p>Дата кінця роботи</p>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
            <p>Очікувана сума затрат на проєкт</p>
            <Input
                color="primary"
                size="lg"
                variant="outlined"
                startDecorator={<AttachMoneyIcon/>}
            />
        </form>
    </main>)

}
