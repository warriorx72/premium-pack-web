import { ProductInputs } from "@/app/(admin)/productos/registrar/page";
import { getProducts, postProduct, ProductResponse, ProductsResponse } from "@/app/(admin)/services/products";
import { ErrorResponse, Pageable, SortEnum } from "@/app/(admin)/services/suppliers";
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
      const errorResponse: ErrorResponse = { ...err?.response?.data } as ErrorResponse;
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

export async function GET(req: NextRequest): Promise<Response> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const serachParams = await req.nextUrl.searchParams;
  const pageable: Pageable = {
    page: serachParams.get("page") ? Number(serachParams.get("page")) : 0,
    size: serachParams.get("size") ? Number(serachParams.get("size")) : 5,
    sort: serachParams.get("sort") ? serachParams.get("sort") as SortEnum : SortEnum.name,
  }
  try {
    const rs: ProductsResponse = await getProducts(pageable, jwt);
    const resp: NextResponse = NextResponse.json(rs);
    return resp;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const errorResponse: ErrorResponse = { ...err?.response?.data } as ErrorResponse;
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