import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/catalog";

export default function ArticlesPage() {
  const [featured, ...rest] = articles;
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-extrabold">Health articles</h1>
      <p className="text-sm text-muted-foreground">General information only - not a substitute for medical advice.</p>

      {featured && (
        <Link
          to={`/articles/${featured.slug}`}
          className="card-soft mt-6 block p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
        >
          <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          <h2 className="mt-3 text-xl font-bold">{featured.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{featured.excerpt}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {featured.author} - Reviewed by {featured.reviewer} - Updated {featured.updated}
          </p>
        </Link>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((a) => (
          <Link
            key={a.slug}
            to={`/articles/${a.slug}`}
            className="card-soft p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <Badge variant="secondary">{a.category}</Badge>
            <h2 className="mt-3 text-base font-bold leading-snug">{a.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Reviewed by {a.reviewer} - {a.read}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
