import Topic from "@/app/models/models";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const tickets = await Topic.find();

        return NextResponse.json({ tickets }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export async function POST(req: any) {
    try {
        const body = await req.json();
        const data = body.formData;

        await Topic.create(data);

        return NextResponse.json({ message: "Form Created" }, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}
