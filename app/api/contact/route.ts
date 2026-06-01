import { NextRequest, NextResponse } from "next/server";

const LANG_LABEL: Record<string, string> = {
  uz: "🇺🇿 O‘zbek",
  ru: "🇷🇺 Русский",
  en: "🇬🇧 English",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const cargo = String(body.cargo || "").trim();
    const lang = String(body.lang || "uz");

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "name and phone are required" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Compose the message
    const text =
      `🆕 <b>Pearl of Asia — yangi so‘rov</b>\n\n` +
      `👤 <b>Ism:</b> ${escapeHtml(name)}\n` +
      `📞 <b>Telefon:</b> ${escapeHtml(phone)}\n` +
      (cargo ? `📦 <b>Yuk:</b> ${escapeHtml(cargo)}\n` : "") +
      `🌐 <b>Til:</b> ${LANG_LABEL[lang] || lang}\n` +
      `🕒 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`;

    // If Telegram is not configured yet, log and still succeed (so the UI works
    // before a bot token is provided). Once env vars are set, messages are sent.
    if (!token || !chatId) {
      console.log("[contact] Telegram not configured. Submission:", {
        name,
        phone,
        cargo,
        lang,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const detail = await tgRes.text();
      console.error("[contact] Telegram API error:", detail);
      return NextResponse.json(
        { ok: false, error: "telegram_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
