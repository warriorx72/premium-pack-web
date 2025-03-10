
import { SupplierInputs } from "@/app/(admin)/proveedores/registrar/page";
import { deleteSupplier, ErrorResponse, putSupplier, SupplierResponse } from "@/app/(admin)/services/suppliers";
import axios from "axios";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: UUID }> }): Promise<Response> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const { id } = await params;
  try {
    const rs: SupplierResponse = await deleteSupplier(id, jwt);
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

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: UUID }> }): Promise<Response> {
  const jwt: string = req.cookies.get("token")?.value as string;
  const { id } = await params;
  try {
    const supplierInputs: SupplierInputs = await req.json();
    const rs: SupplierResponse = await putSupplier(id, supplierInputs, jwt);
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