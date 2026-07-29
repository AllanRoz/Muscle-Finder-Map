import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MUSCLE_NAMES, type Exercise } from "@/data/muscles";

export function ExerciseModal({
  exercise,
  onClose,
}: {
  exercise: Exercise | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!exercise} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl border-border bg-card">
        {exercise && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl tracking-tight">{exercise.name}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${exercise.videoId}`}
                title={`${exercise.name} demonstration`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Primary
                </p>
                <p className="mt-1 text-sm text-foreground">
                  {exercise.primary.map((m) => MUSCLE_NAMES[m]).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Secondary
                </p>
                <p className="mt-1 text-sm text-foreground">
                  {exercise.secondary.length
                    ? exercise.secondary.map((m) => MUSCLE_NAMES[m]).join(", ")
                    : "None — isolation movement"}
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
