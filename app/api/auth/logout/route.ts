import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
    const resp: NextResponse = NextResponse.json({
        status: 200
    });
    resp.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
    });
    return resp;
}