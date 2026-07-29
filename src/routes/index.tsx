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
      { title: "MuscleFinder — Find Exercises by Muscle Group" },
      {
        name: "description",
        content:
          "Click any muscle on an interactive 2D body map to discover the exercises that target it, watch demos, and get complementary training suggestions.",
      },
      { property: "og:title", content: "MuscleFinder — Find Exercises by Muscle Group" },
      {
        property: "og:description",
        content:
          "Interactive anatomy map that shows which exercises hit each muscle, with video demos and smart complementary targets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<MuscleId | null>(null);
  const [open, setOpen] = useState<Exercise | null>(null);

  const secondary = open ? open.secondary.filter((m) => m !== active) : [];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-6 sm:flex sm:justify-between">
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

        <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <section className="rounded-2xl border border-border bg-card/50 p-5 sm:p-8">
            <BodyMap primary={active} secondary={secondary} onSelect={setActive} />
            {active && (
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Primary target: <span className="font-semibold text-primary">{MUSCLE_NAMES[active]}</span>
              </p>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
            <DiscoveryPanel
              active={active}
              onSelectExercise={setOpen}
              onSelectMuscle={setActive}
            />
          </section>
        </div>
      </div>

      <ExerciseModal exercise={open} onClose={() => setOpen(null)} />
    </main>
  );
}
