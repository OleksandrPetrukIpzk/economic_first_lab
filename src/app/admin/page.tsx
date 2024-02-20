'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { Inputs } from "@/app/form/page";
import Link from "next/link";
import { Button } from "@mui/joy";

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
                            <Button color="warning" size="lg">
                                Download PDF
                            </Button>

                    </div>
                );
            })}
        </div>
    );
}
