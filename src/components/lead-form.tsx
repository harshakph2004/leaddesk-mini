"use client";

import { useActionState, useEffect, useRef } from "react";
import { createLead, type FormState } from "@/app/actions";

const initialState: FormState = {};

export function LeadForm() {
  const [state, formAction, pending] = useActionState(createLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="lead-form" noValidate>
      <div className="form-intro"><p className="eyebrow">Start a conversation</p><h2>Tell us what you’re building.</h2><p>We’ll reply within one working day with a clear next step.</p></div>
      <div className="form-grid">
        <label>Name<input name="name" placeholder="Your full name" required minLength={2} aria-invalid={!!state.errors?.name} /></label>
        <label>Email<input name="email" type="email" placeholder="you@company.com" required aria-invalid={!!state.errors?.email} /></label>
      </div>
      <p className="field-error">{state.errors?.name?.[0] || state.errors?.email?.[0]}</p>
      <label>Estimated budget
        <select name="budget" required defaultValue="" aria-invalid={!!state.errors?.budget}>
          <option value="" disabled>Select a range</option><option>Under ₹50k</option><option>₹50k – ₹1L</option><option>₹1L – ₹3L</option><option>₹3L+</option>
        </select>
      </label>
      <p className="field-error">{state.errors?.budget?.[0]}</p>
      <label>Project details<textarea name="message" placeholder="What are you looking to achieve?" required minLength={20} rows={5} aria-invalid={!!state.errors?.message} /></label>
      <p className="field-error">{state.errors?.message?.[0]}</p>
      {state.message && <p className={state.success ? "form-success" : "form-error"} role="status">{state.message}</p>}
      <button className="primary-button" disabled={pending} type="submit">{pending ? "Sending your enquiry…" : "Send enquiry"}</button>
    </form>
  );
}
