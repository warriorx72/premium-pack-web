
import { fetchLogin } from "@/app/login/services/security";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    // const { user_name, password } = await req.json();
    const auth: string =  req.headers.get('authorization') || '';
    const authDecoded = Buffer.from(auth.replace('Basic ', ''), 'base64').toString('ascii');
    const [user_name, password] = authDecoded.split(':');
    try{
        const rs = await fetchLogin(user_name, password)
        const resp: NextResponse = NextResponse.json({
            user_name: rs.user_name,
            expiration_date: rs.expiration_date
        });
        resp.cookies.set({
          name: "token",
          value: rs.token,
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 60 * 24,
          path: "/"
        });
        return resp;
      } catch(err) {
        console.error(err);
        return NextResponse.json(
            {
              message: "Invalid credentials",
            },
            {
              status: 401,
            }
          );
      }
  }