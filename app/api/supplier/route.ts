import { ErrorResponse, getSuppliers, Pageable, postSupplier, SortEnum, SupplierResponse, SuppliersResponse } from "@/app/(admin)/services/suppliers";
import { NextRequest, NextResponse } from "next/server";
import { SupplierInputs } from '../../(admin)/proveedores/registrar/page';
import axios from "axios";

export async function POST(req: NextRequest): Promise<Response> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const supplierInputs: SupplierInputs = await req.json();
  try {
    const rs: SupplierResponse = await postSupplier(supplierInputs, jwt);
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


export async function GET(req: NextRequest): Promise<NextResponse> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const serachParams = await req.nextUrl.searchParams;
  const pageable: Pageable = {
    page: serachParams.get("page") ? Number(serachParams.get("page")) : 0,
    size: serachParams.get("size") ? Number(serachParams.get("size")) : 5,
    sort: serachParams.get("sort") ? serachParams.get("sort") as SortEnum : SortEnum.name,
  }
  try {
    const rs: SuppliersResponse = await getSuppliers(pageable, jwt);
    const resp: NextResponse = NextResponse.json(rs);
    return resp;
  } catch (err) {
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