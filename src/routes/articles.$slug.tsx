import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/catalog";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? articles.find((a) => a.slug === slug) : undefined;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Badge variant="secondary">{article.category}</Badge>
      <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">{article.title}</h1>
      <p className="mt-2 text-xs text-muted-foreground">
        {article.author} - Medically reviewed by {article.reviewer} - Updated {article.updated} - {article.read} read
      </p>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>{article.excerpt}</p>
        <p>
          Good outcomes usually come from small routines repeated consistently rather than dramatic changes. Start with one
          habit you can keep for a month, then add the next one. Write down what you change so your doctor can see the
          pattern at your next visit.
        </p>
        <p>
          Keep a single updated list of everything you take, including supplements, and share it at every consultation.
          Duplicate ingredients across products are one of the most common avoidable problems our pharmacists spot when
          reviewing prescriptions.
        </p>
        <p>
          If a symptom is new, severe, or getting worse, do not wait for your next scheduled appointment. Contact your
          doctor, and in an emergency go to the nearest hospital.
        </p>
      </div>

      <p className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">
        <strong>Medical disclaimer:</strong> This article is general information and does not diagnose or treat any
        condition. Consult your doctor or pharmacist before acting on it.
      </p>

      <h2 className="mt-10 text-xl font-bold">Related articles</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {related.map((a) => (
          <Link key={a.slug} to={`/articles/${a.slug}`} className="card-soft p-4 text-sm font-semibold hover:text-primary">
            {a.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
