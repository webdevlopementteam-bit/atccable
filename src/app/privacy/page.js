import { PageHero } from "@/components/ui";
import { company } from "@/data/site";

export const metadata = { title: "Privacy Policy" };

const sections = [
  {
    h: "What this Privacy Policy covers",
    p: [
      "We respect the privacy of those who visit our website. This policy covers our treatment of personally identifiable information that we collect when you are on our site and when you use our services, and any personally identifiable information that third parties share with us.",
      "This policy does not apply to the practices of organisations that we do not own or control, or to people that we do not employ or manage.",
    ],
  },
  {
    h: "Information collection and use",
    p: [
      "We collect personally identifiable information when you contact us or use our services, and when you visit our pages. We may also receive personally identifiable information from third parties.",
      "We use this information for three general purposes: to customise the content you see, to fulfil your requests for certain services, and to contact you about services.",
      "We also automatically receive and record information on our server logs from your browser, including your IP address, cookie information and the page you requested. This information is not linked to your account and will not be used to identify you.",
    ],
  },
  {
    h: "Information sharing and disclosure",
    p: ["We will not sell or rent your personally identifiable information to anyone. We will send personally identifiable information about you to other companies or people only when:"],
    list: [
      "We have your consent to share the information;",
      "We respond to subpoenas, court orders or legal process; or",
      "We find that your actions on our website violate the Terms of Service.",
    ],
  },
  {
    h: "Changes to this Privacy Policy",
    p: [
      "This policy is subject to modification from time to time. If we change it, we will post those changes here so that you always know what information we gather, how we might use it and whether we will disclose it to anyone. If you do not agree with the changes, you can simply discontinue visiting our website.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="bg-white py-20 md:py-28">
        <div className="container-x max-w-3xl">
          {sections.map((s) => (
            <div key={s.h} className="border-b border-line py-10 first:pt-0">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{s.h}</h2>
              {s.p.map((t) => <p key={t} className="mt-4 leading-relaxed text-ink/70">{t}</p>)}
              {s.list && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
                  {s.list.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}
            </div>
          ))}
          <div className="mt-10 rounded-2xl bg-surface p-6 text-sm text-ink/70">
            Questions or suggestions? Use our enquiry form or write to{" "}
            <a href={`mailto:${company.salesEmail}`} className="font-semibold text-brand-500">{company.salesEmail}</a> · {company.mobile}
          </div>
        </div>
      </section>
    </>
  );
}
