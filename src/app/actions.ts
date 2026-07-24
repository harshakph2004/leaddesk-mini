"use server";

import { LeadStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validation";

export type FormState = { success?: boolean; message?: string; errors?: Record<string, string[]> };

export async function createLead(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!parsed.success) return { message: "Please check the highlighted fields.", errors: parsed.error.flatten().fieldErrors };

  try {
    await prisma.lead.create({ data: parsed.data });
    return { success: true, message: "Thanks — your enquiry is with our team." };
  } catch (error) {
    console.error("Lead submission failed", error);
    return {
      message: "We couldn’t send your enquiry just now. Please try again in a moment.",
    };
  }
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  if (!Object.values(LeadStatus).includes(status)) throw new Error("Invalid status");

  await prisma.lead.update({ where: { id }, data: { status } });
  revalidatePath("/admin");
}
