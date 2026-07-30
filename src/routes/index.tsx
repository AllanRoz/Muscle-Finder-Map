import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Activity } from "lucide-react";
import { BodyMap } from "@/components/BodyMap";
import { DiscoveryPanel } from "@/components/DiscoveryPanel";
import { ExerciseModal } from "@/components/ExerciseModal";
import { MUSCLE_NAMES, type Exercise, type MuscleId } from "@/data/muscles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MuscleFinder" },
      {
        name: "description",
        content:
          "Click any muscle on an interactive 2D body map to discover the exercises that target it, watch demos, and get complementary training suggestions.",
      },
      { property: "og:title", content: "MuscleFinder" },
      {
        property: "og:description",
        content:
          "Interactive anatomy map that shows which exercises hit each muscle, with video demos and smart complementary targets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: `${import.meta.env.BASE_URL}dumbbell.png`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<MuscleId | null>(null);
  const [open, setOpen] = useState<Exercise | null>(null);
  const [hovered, setHovered] = useState<Exercise | null>(null);

  const secondary = open ? open.secondary.filter((m) => m !== active) : [];

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex h-full w-full max-w-[1800px] flex-col px-4 py-4 sm:px-8 sm:py-6">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <Activity className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-black tracking-tight sm:text-2xl">
                Muscle<span className="text-primary">Finder</span>
              </h1>
              <p className="truncate text-xs text-muted-foreground">
                Interactive anatomy → exercise discovery
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-primary" /> Primary
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-accent" /> Secondary
            </span>
          </div>
        </header>

        <div className="mt-4 grid min-h-0 flex-1 gap-4 overflow-hidden lg:grid-cols-[3fr_2fr]">
          <section className="flex min-h-0 flex-col rounded-2xl border border-border bg-card/50 p-4 sm:p-6">
            <div className="min-h-0 flex-1">
              <BodyMap
                primary={active}
                secondary={secondary}
                hoverPrimary={hovered?.primary ?? []}
                hoverSecondary={hovered?.secondary ?? []}
                onSelect={setActive}
              />
            </div>
            {active && (
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Primary target:{" "}
                <span className="font-semibold text-primary">{MUSCLE_NAMES[active]}</span>
              </p>
            )}
          </section>

          <section className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card/50 p-4 sm:p-6">
            <DiscoveryPanel
              active={active}
              onSelectExercise={setOpen}
              onSelectMuscle={setActive}
              onHoverExercise={setHovered}
            />
          </section>
        </div>
      </div>

      <ExerciseModal exercise={open} onClose={() => setOpen(null)} />
    </main>
  );
}
