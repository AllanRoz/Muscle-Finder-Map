import { ArrowRightLeft, Dumbbell, MousePointerClick, PlayCircle, Target } from "lucide-react";
import {
  COMPLEMENT,
  COMPLEMENT_REASON,
  MUSCLE_NAMES,
  exercisesFor,
  type Exercise,
  type MuscleId,
} from "@/data/muscles";

export function DiscoveryPanel({
  active,
  onSelectExercise,
  onSelectMuscle,
  onHoverExercise,
}: {
  active: MuscleId | null;
  onSelectExercise: (e: Exercise) => void;
  onSelectMuscle: (m: MuscleId) => void;
  onHoverExercise?: (e: Exercise | null) => void;
}) {
  if (!active) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 p-10 text-center">
        <MousePointerClick className="h-10 w-10 text-primary" strokeWidth={1.5} />
        <h2 className="mt-5 text-lg font-semibold tracking-tight">
          Click a muscle group on the body to see exercises.
        </h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Anterior and posterior views are both interactive — tap any highlighted region to load its
          movement library.
        </p>
      </div>
    );
  }

  const list = exercisesFor(active);
  const suggestion = COMPLEMENT[active];

  return (
    <div className="flex h-full flex-col gap-5">
      <header className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          Workout Discovery
        </p>
        <h2 className="mt-2 truncate text-2xl font-bold tracking-tight">
          Exercises for: {MUSCLE_NAMES[active]}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {list.length} movement{list.length === 1 ? "" : "s"} recruit this group.
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {list.map((ex) => {
          const isPrimary = ex.primary.includes(active);
          return (
            <li key={ex.id}>
              <button
                onClick={() => onSelectExercise(ex)}
                className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-muted"
              >
                <span className="min-w-0">
                  <span className="flex min-w-0 items-center gap-2">
                    <Dumbbell className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="truncate font-semibold">{ex.name}</span>
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        isPrimary
                          ? "bg-primary/15 text-primary"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      {isPrimary ? "Primary" : "Secondary"}
                    </span>
                    <span className="text-xs text-muted-foreground">{ex.equipment}</span>
                  </span>
                </span>
                <PlayCircle className="h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto rounded-2xl border border-accent/30 bg-accent/5 p-5">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
          <Target className="h-4 w-4" /> Suggested Complementary Target
        </p>
        <button
          onClick={() => onSelectMuscle(suggestion)}
          className="mt-3 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-left"
        >
          <span className="min-w-0">
            <span className="block truncate text-lg font-bold">{MUSCLE_NAMES[suggestion]}</span>
            <span className="mt-1 block text-xs text-muted-foreground">
              {COMPLEMENT_REASON[active] ?? "Balances the pattern you just trained."}
            </span>
          </span>
          <ArrowRightLeft className="h-5 w-5 shrink-0 text-accent" />
        </button>
      </div>
    </div>
  );
}
