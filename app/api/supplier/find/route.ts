import { ErrorResponse, getSuppliersByName, SuppliersContentResponse } from "@/app/(admin)/services/suppliers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<Response> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const serachParams = await req.nextUrl.searchParams;
  const paramName: string = serachParams.get("name") as string;
  try {
    const rs: SuppliersContentResponse[] = await getSuppliersByName(paramName, jwt);
    const resp: NextResponse = NextResponse.json(rs);
    return resp;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorResponse: ErrorResponse = {...err?.response?.data} as ErrorResponse;
      return new Response(JSON.stringify(errorResponse), {
        status: err?.status
      })
    } else {
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
}