import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  college: z.string().min(2),
  year: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"]),
  program: z.string().min(1),
  resumeLink: z.string().url().or(z.literal("")).optional(),
  message: z.string().max(500).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Google Form submission URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1PO6rl1IBWhynLiJKv8Qve3W4ZM3CEB__9b6vUrdt3tY/formResponse";

    // Map our form data to Google Form entry IDs
    const formData = new URLSearchParams();
    formData.append("entry.18817308", data.name);
    formData.append("entry.971088361", data.email);
    formData.append("entry.1220247735", data.phone);
    formData.append("entry.843266636", data.college);
    formData.append("entry.2095983865", data.year);
    formData.append("entry.1428860208", data.program);
    formData.append("entry.949274761", data.resumeLink || "");
    formData.append("entry.381824739", data.message || "");

    // Submit to Google Forms silently in the background
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    return NextResponse.json(
      { success: true, message: "Application received successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[Apply API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
