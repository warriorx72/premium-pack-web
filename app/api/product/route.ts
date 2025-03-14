import { ProductInputs } from "@/app/(admin)/productos/registrar/page";
import { postProduct, ProductResponse } from "@/app/(admin)/services/products";
import { ErrorResponse } from "@/app/(admin)/services/suppliers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
    const jwt: string = req.cookies.get("token")?.value as string;
    const productInputs: ProductInputs = await req.json();
    try {
      const rs: ProductResponse = await postProduct(productInputs, jwt);
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