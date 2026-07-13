import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { BookOpen } from "lucide-react";

import appCss from "../styles.css?url";
import wonderlicW from "../assets/wonderlic-w.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/pain", label: "Business Pain Finder" },
  { to: "/attributes", label: "Attribute Finder" },
  { to: "/archetypes", label: "Archetype Library" },
  { to: "/profiles", label: "Profile Directory" },
  { to: "/attribute-stories", label: "Attribute Stories" },
] as const;


function BrandMark() {
  return (
    <Link to="/" className="flex items-center" aria-label="Wonderlic Demo Story Finder">
      <img src={wonderlicW.url} alt="Wonderlic" className="h-9 w-auto" />
    </Link>
  );
}

function TopNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <BrandMark />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                isActive(n.to)
                  ? "bg-soft-purple text-blurple"
                  : "text-muted-foreground hover:bg-muted hover:text-wonderlic-blue"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <PrinciplesDrawer />
        </div>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));
  return (
    <div className="border-t border-border md:hidden">
      <div className="no-scrollbar mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 py-2">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition-colors ${
              isActive(n.to)
                ? "bg-soft-purple text-blurple"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {n.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PrinciplesDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 border-border">
          <BookOpen className="h-4 w-4" />
          Demo Principles
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-light">Demo Principles</SheetTitle>
          <SheetDescription>Guardrails to keep every demo grounded in customer pain.</SheetDescription>
        </SheetHeader>
        <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {[
            "Start with customer pain, not product screens.",
            "Use the customer's language instead of over-defining attributes.",
            "Select is best for screen-out and screen-in.",
            "Develop is best for believable, coachable behavior gaps.",
            "Do not use Develop to tell termination stories (theft, no-call / no-show, total inability).",
            "Team Dynamics should show manager flexibility, not just one outlier.",
            "The page supports the story. The page does not decide the story.",
            "Prepare Ask Wonderlic prompts before the demo.",
            "Skip the Index unless the buyer is IO, consultant, coach, or highly technical L&D / HR.",
            "Reference Action Planner only when there is a clear manager-development or goal-setting pain.",
          ].map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-purple text-xs font-semibold text-blurple">
                {i + 1}
              </span>
              <span className="text-wonderlic-blue">{p}</span>
            </li>
          ))}
        </ol>
      </SheetContent>
    </Sheet>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl font-light text-blurple">404</p>
        <h1 className="mt-2 font-display text-2xl font-light">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          That route isn't in the Story Finder.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          Back to Start
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-light">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Internal sales enablement tool for choosing the right Wonderlic demo archetype, profile, Team Dynamics page, and talk track in under 60 seconds.",
      },
      { name: "author", content: "Wonderlic" },
      { property: "og:title", content: "Wonderlic Demo Story Finder" },
      {
        property: "og:description",
        content: "Pick the right archetype, profile, and talk track from a customer pain, fast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <TopNav />
        <main className="mx-auto max-w-7xl px-6 py-8">
          <Outlet />
        </main>
        <Toaster position="bottom-right" />
      </div>
    </QueryClientProvider>
  );
}
