import { NextResponse } from "next/server";
import Topic from "@/app/models/models";

export async function GET(request: any, { params }: any) {
    const { id } = params;
    const foundBrif = await Topic.findOne({ _id: id });
    return NextResponse.json({ foundBrif }, { status: 200 });
}

export async function PUT(req: any, { params }: any) {
    try {
        console.log('2222')
        const { id } = params;
        console.log(id)
        const body = await req.json();
        console.log(body);
        const updateBrif = await Topic.findByIdAndUpdate(id, {
            ...body,
        });

        return NextResponse.json({ message: updateBrif }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function DELETE(req: any, { params }: any) {
    try {
        const { id } = params;

        await Topic.findByIdAndDelete(id);
        return NextResponse.json({ message: "Brif Deleted" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
