import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "이메일 서비스가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, phone, email, inquiryType, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "필수 항목을 입력해 주세요." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "그로스리얼티 문의 <onboarding@resend.dev>",
      to: ["contact@growthrealty.net"],
      subject: `[웹사이트 문의] ${inquiryType || "일반 문의"} - ${name}`,
      html: `
        <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #0A3D2F; font-size: 24px; margin-bottom: 30px; border-bottom: 2px solid #BFA46F; padding-bottom: 15px;">
            새로운 문의가 접수되었습니다
          </h1>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;">이름</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">연락처</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">이메일</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${email || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">문의 유형</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${inquiryType || "-"}</td>
            </tr>
          </table>

          <div style="background: #f8f8f8; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
            <h3 style="color: #0A3D2F; font-size: 14px; margin: 0 0 12px 0;">문의 내용</h3>
            <p style="color: #333; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            이 이메일은 그로스리얼티 웹사이트에서 자동 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
