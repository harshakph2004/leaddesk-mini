import { LeadStatus } from "@prisma/client";
import { signOut } from "@/auth";
import { LeadTable } from "@/components/lead-table";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const counts = Object.fromEntries(Object.values(LeadStatus).map((status) => [status, leads.filter((lead) => lead.status === status).length]));
  return <main className="admin-page"><header className="admin-header"><a className="brand" href="/">LeadDesk<span>.</span></a><div><span className="admin-label">Admin workspace</span><form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}><button className="text-button">Log out</button></form></div></header><section className="admin-content"><div className="admin-heading"><div><p className="eyebrow">Lead inbox</p><h1>Keep every opportunity moving.</h1><p>Review enquiries, follow up at the right time, and keep the pipeline clear.</p></div></div><div className="metric-grid"><article><span>New</span><strong>{counts.NEW}</strong><p>Need first response</p></article><article><span>Contacted</span><strong>{counts.CONTACTED}</strong><p>Conversation underway</p></article><article><span>Closed</span><strong>{counts.CLOSED}</strong><p>Resolved enquiries</p></article></div><section className="lead-panel"><LeadTable leads={leads} /></section></section></main>;
}
