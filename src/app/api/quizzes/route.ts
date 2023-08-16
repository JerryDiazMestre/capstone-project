import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
  const data = await prisma.quiz.findMany({
    orderBy: [{ createdAt: "desc" }],
  });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  let data = await request.json();
  let newData = await prisma.quiz.create({ data });
  return NextResponse.json(newData, { status: 201 });
}
