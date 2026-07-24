"use client";

import { LeadStatus, type Lead } from "@prisma/client";
import { useMemo, useState, useTransition } from "react";
import { updateLeadStatus } from "@/app/actions";

const statusLabel: Record<LeadStatus, string> = { NEW: "New", CONTACTED: "Contacted", CLOSED: "Closed" };

export function LeadTable({ leads }: { leads: Lead[] }) {
  const [query, setQuery] = useState("");
  const [pending, startTransition] = useTransition();
  const filtered = useMemo(() => leads.filter((lead) => `${lead.name} ${lead.email}`.toLowerCase().includes(query.toLowerCase())), [leads, query]);

  return <>
    <div className="toolbar"><div><h2>All leads</h2><p>{filtered.length} {filtered.length === 1 ? "lead" : "leads"} shown</p></div><input className="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or email" aria-label="Search leads" /></div>
    <div className="table-wrap"><table><thead><tr><th>Lead</th><th>Budget</th><th>Message</th><th>Received</th><th>Status</th></tr></thead><tbody>
      {filtered.map((lead) => <tr key={lead.id}><td><strong>{lead.name}</strong><span>{lead.email}</span></td><td>{lead.budget}</td><td className="message-cell" title={lead.message}>{lead.message}</td><td>{new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(lead.createdAt)}</td><td><select className={`status status-${lead.status.toLowerCase()}`} value={lead.status} disabled={pending} onChange={(e) => startTransition(() => updateLeadStatus(lead.id, e.target.value as LeadStatus))}>{Object.values(LeadStatus).map((status) => <option key={status} value={status}>{statusLabel[status]}</option>)}</select></td></tr>)}
      {!filtered.length && <tr><td className="empty" colSpan={5}>No leads match your search.</td></tr>}
    </tbody></table></div>
  </>;
}
