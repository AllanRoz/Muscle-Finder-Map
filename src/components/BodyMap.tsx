import { MUSCLE_NAMES, type MuscleId } from "@/data/muscles";

type Props = {
  primary: MuscleId | null;
  secondary: MuscleId[];
  /** Muscles highlighted transiently by hovering an exercise in the discovery panel. */
  hoverPrimary?: MuscleId[];
  hoverSecondary?: MuscleId[];
  onSelect: (m: MuscleId) => void;
};

type Region = { id: MuscleId; shapes: React.ReactNode };

const CLASS: Record<string, string> = {
  idle: "fill-muscle stroke-muscle-line",
  primary: "fill-primary stroke-primary drop-shadow-glow-primary",
  secondary: "fill-accent stroke-accent drop-shadow-glow-accent",
};

const FRONT_ANCHORS: Partial<Record<MuscleId, [number, number]>> = {
  chest: [78, 88],
  "front-delts": [62, 79],
  "side-delts": [150, 86],
  biceps: [49, 115],
  forearms: [155, 163],
  abs: [100, 135],
  obliques: [80, 134],
  quads: [85, 210],
  calves: [115, 292],
};

const BACK_ANCHORS: Partial<Record<MuscleId, [number, number]>> = {
  "rear-delts": [61, 80],
  "upper-back": [100, 81],
  triceps: [48, 116],
  forearms: [155, 163],
  lats: [85, 118],
  "lower-back": [100, 151],
  glutes: [85, 181],
  hamstrings: [115, 231],
  calves: [85, 294],
};

function Body({
  title,
  regions,
  silhouette,
  anchors,
  primary,
  secondary,
  hoverPrimary = [],
  hoverSecondary = [],
  onSelect,
}: Props & {
  title: string;
  regions: Region[];
  silhouette: React.ReactNode;
  anchors: Partial<Record<MuscleId, [number, number]>>;
}) {
  const hovering = hoverPrimary.length > 0 || hoverSecondary.length > 0;

  const state = (id: MuscleId) => {
    if (hovering) {
      if (hoverPrimary.includes(id)) return "primary";
      if (hoverSecondary.includes(id)) return "secondary";
      return "idle";
    }
    if (primary === id) return "primary";
    if (secondary.includes(id)) return "secondary";
    return "idle";
  };

  const callouts = hovering
    ? regions
        .filter((r) => hoverPrimary.includes(r.id) || hoverSecondary.includes(r.id))
        .filter((r, i, arr) => arr.findIndex((x) => x.id === r.id) === i)
        .map((r) => ({
          id: r.id,
          isPrimary: hoverPrimary.includes(r.id),
          point: anchors[r.id],
        }))
        .filter((c): c is { id: MuscleId; isPrimary: boolean; point: [number, number] } =>
          Boolean(c.point),
        )
    : [];

  return (
    <figure className="flex min-h-0 min-w-0 flex-1 flex-col items-center gap-3">
      <svg
        viewBox="-95 0 390 420"
        className="h-full min-h-0 w-full flex-1"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`${title} view of the human body with clickable muscle groups`}
      >
        <g className="pointer-events-none fill-body stroke-muscle-line" strokeWidth="1.5">
          {silhouette}
        </g>
        {regions.map((r) => {
          const st = state(r.id);
          return (
            <g
              key={r.id}
              role="button"
              tabIndex={0}
              aria-label={MUSCLE_NAMES[r.id]}
              aria-pressed={st === "primary"}
              onClick={() => onSelect(r.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(r.id);
                }
              }}
              strokeWidth="1.2"
              className={`cursor-pointer outline-none transition-all duration-300 hover:opacity-90 hover:brightness-125 ${CLASS[st]}`}
            >
              <title>{MUSCLE_NAMES[r.id]}</title>
              {r.shapes}
            </g>
          );
        })}
        <g className="pointer-events-none">
          {callouts.map((c) => {
            const [x, y] = c.point;
            const left = x < 100;
            const labelX = left ? -54 : 254;
            const elbowX = left ? -6 : 206;
            const color = c.isPrimary ? "var(--primary)" : "var(--accent)";
            return (
              <g key={`${c.id}-callout`} className="animate-in fade-in duration-200">
                <path
                  d={`M ${labelX + (left ? 46 : -46)} ${y} H ${elbowX} L ${x} ${y}`}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
                <circle cx={x} cy={y} r="3" fill={color} />
                <text
                  x={labelX + (left ? 44 : -44)}
                  y={y + 3.5}
                  textAnchor={left ? "end" : "start"}
                  fill={color}
                  fontSize="10"
                  fontWeight="700"
                >
                  {MUSCLE_NAMES[c.id]}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <figcaption className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </figcaption>
    </figure>
  );
}


const frontSilhouette = (
  <>
    <circle cx="100" cy="34" r="21" />
    <path d="M88 52h24v14H88z" />
    <path d="M62 70q38-14 76 0l6 78q-42 10-88 0z" />
    <path d="M56 74 44 96l-6 44 8 62 12 2 10-64 4-52z" />
    <path d="M144 74l12 22 6 44-8 62-12 2-10-64-4-52z" />
    <path d="M68 150h64l6 60-10 96-16 2-12-90-12 90-16-2-10-96z" />
    <ellipse cx="42" cy="212" rx="8" ry="12" />
    <ellipse cx="158" cy="212" rx="8" ry="12" />
  </>
);

const frontRegions: Region[] = [
  {
    id: "chest",
    shapes: (
      <>
        <path d="M70 76q14-7 27-2v26q-16 3-30-2z" />
        <path d="M130 76q-14-7-27-2v26q16 3 30-2z" />
      </>
    ),
  },
  {
    id: "front-delts",
    shapes: (
      <>
        <ellipse cx="62" cy="79" rx="11" ry="12" />
        <ellipse cx="138" cy="79" rx="11" ry="12" />
      </>
    ),
  },
  {
    id: "side-delts",
    shapes: (
      <>
        <ellipse cx="50" cy="86" rx="8" ry="11" />
        <ellipse cx="150" cy="86" rx="8" ry="11" />
      </>
    ),
  },
  {
    id: "biceps",
    shapes: (
      <>
        <ellipse cx="49" cy="115" rx="8" ry="18" />
        <ellipse cx="151" cy="115" rx="8" ry="18" />
      </>
    ),
  },
  {
    id: "forearms",
    shapes: (
      <>
        <ellipse cx="45" cy="163" rx="7" ry="22" />
        <ellipse cx="155" cy="163" rx="7" ry="22" />
      </>
    ),
  },
  {
    id: "abs",
    shapes: <rect x="87" y="108" width="26" height="54" rx="8" />,
  },
  {
    id: "obliques",
    shapes: (
      <>
        <path d="M80 110q-6 22 2 48l6-4q-6-24-2-44z" />
        <path d="M120 110q6 22-2 48l-6-4q6-24 2-44z" />
      </>
    ),
  },
  {
    id: "quads",
    shapes: (
      <>
        <path d="M76 172q-6 42 2 76l16-4q4-38 0-72z" />
        <path d="M124 172q6 42-2 76l-16-4q-4-38 0-72z" />
      </>
    ),
  },
  {
    id: "calves",
    shapes: (
      <>
        <ellipse cx="85" cy="292" rx="9" ry="24" />
        <ellipse cx="115" cy="292" rx="9" ry="24" />
      </>
    ),
  },
];

const backRegions: Region[] = [
  {
    id: "rear-delts",
    shapes: (
      <>
        <ellipse cx="61" cy="80" rx="11" ry="12" />
        <ellipse cx="139" cy="80" rx="11" ry="12" />
      </>
    ),
  },
  {
    id: "upper-back",
    shapes: <path d="M74 68q26-9 52 0l-8 26H82z" />,
  },
  {
    id: "triceps",
    shapes: (
      <>
        <ellipse cx="48" cy="116" rx="8" ry="19" />
        <ellipse cx="152" cy="116" rx="8" ry="19" />
      </>
    ),
  },
  {
    id: "forearms",
    shapes: (
      <>
        <ellipse cx="45" cy="163" rx="7" ry="22" />
        <ellipse cx="155" cy="163" rx="7" ry="22" />
      </>
    ),
  },
  {
    id: "lats",
    shapes: (
      <>
        <path d="M78 96q-8 22-4 42l20-6-4-38z" />
        <path d="M122 96q8 22 4 42l-20-6 4-38z" />
      </>
    ),
  },
  {
    id: "lower-back",
    shapes: <path d="M88 140h24l4 22H84z" />,
  },
  {
    id: "glutes",
    shapes: (
      <>
        <path d="M70 168q10-6 28 0v26q-20 6-30-6z" />
        <path d="M130 168q-10-6-28 0v26q20 6 30-6z" />
      </>
    ),
  },
  {
    id: "hamstrings",
    shapes: (
      <>
        <path d="M76 200q-4 40 2 62l16-4q4-32 0-58z" />
        <path d="M124 200q4 40-2 62l-16-4q-4-32 0-58z" />
      </>
    ),
  },
  {
    id: "calves",
    shapes: (
      <>
        <ellipse cx="85" cy="294" rx="10" ry="26" />
        <ellipse cx="115" cy="294" rx="10" ry="26" />
      </>
    ),
  },
];

export function BodyMap(props: Props) {
  return (
    <div className="flex h-full min-h-0 w-full gap-4">

      <Body
        {...props}
        title="Front"
        regions={frontRegions}
        silhouette={frontSilhouette}
        anchors={FRONT_ANCHORS}
      />
      <Body
        {...props}
        title="Back"
        regions={backRegions}
        silhouette={frontSilhouette}
        anchors={BACK_ANCHORS}
      />
    </div>
  );
}
