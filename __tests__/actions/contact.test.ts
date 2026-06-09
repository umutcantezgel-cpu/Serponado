import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

vi.mock("next/headers", () => {
    return {
        headers: vi.fn().mockReturnValue(new Headers({ "x-forwarded-for": "127.0.0.1" })),
    };
});

describe("contact.ts Server Action", () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ success: true })
        });
    });

    const defaultState: ContactFormState = {
        success: false,
        message: "",
    };

    it("rejects invalid payloads with Zod validation errors", async () => {
        const formData = new FormData();
        formData.append("name", "A"); // Too short
        formData.append("email", "not-an-email");
        formData.append("message", "Hi"); // Too short

        const result = await submitContactForm(defaultState, formData);
        
        expect(result.success).toBe(false);
        expect(result.message).toBe("Bitte überprüfen Sie Ihre Eingaben.");
        expect(result.errors?.name).toBeDefined();
        expect(result.errors?.email).toBeDefined();
        expect(result.errors?.message).toBeDefined();
    });

    it("handles valid payloads successfully", async () => {
        const formData = new FormData();
        formData.append("name", "Max Mustermann");
        formData.append("email", "max@example.com");
        formData.append("phone", "01234567890");
        formData.append("message", "Ich benötige ein neues System für meine Tür.");

        const result = await submitContactForm(defaultState, formData);
        
        expect(result.success).toBe(true);
        expect(result.message).toContain("Vielen Dank, Max Mustermann!");
        expect(result.submittedName).toBe("Max Mustermann");
    });

    it("traps bots with the honeypot field safely without sending email/recording", async () => {
        const formData = new FormData();
        formData.append("name", "Bot");
        formData.append("email", "bot@bot.com");
        formData.append("message", "Spam message");
        formData.append("website", "http://spam.com"); // Honeypot filled!

        const result = await submitContactForm(defaultState, formData);
        
        expect(result.success).toBe(true);
        expect(result.message).toBe("Vielen Dank! Wir melden uns in Kürze bei Ihnen.");
        expect(result.submittedName).toBe("Bot");
    });
});
