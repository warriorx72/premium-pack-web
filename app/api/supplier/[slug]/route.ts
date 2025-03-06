
import { deleteSupplier, ErrorResponse, SupplierResponse } from "@/app/(admin)/services/suppliers";
import axios from "axios";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: UUID }> }): Promise<Response> {
    const jwt: string = req.cookies.get("token")?.value as string;
    const { slug } = await params;
    try {
      const rs: SupplierResponse = await deleteSupplier(slug, jwt);
      const resp: NextResponse = NextResponse.json(rs);
      return resp;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorResponse: ErrorResponse = {...err?.response?.data} as ErrorResponse;
        console.log(errorResponse.uuid);
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