import Topic from "@/app/models/models";
import {NextResponse} from "next/server";

export  async function GET(req, res) {
    try {
        const elements = await Topic.find();
        return NextResponse.json({ elements }, { status: 200 });
    } catch (err) {
        console.log(err);
    }
}

export async function POST(req: any) {
    try {
        const body = await req.json();
        const createdTopic = await Topic.create(body);
        return NextResponse.json({ createdTopic }, { status: 200 });
    } catch (err) {
    }
}
