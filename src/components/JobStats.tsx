interface JobStatsProps {
  stats: ReadonlyArray<{
    readonly label: string;
    readonly value: number;
    readonly color: string;
  }>;
}

export default function JobStats({ stats }: JobStatsProps) {
  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm group">
            <span className="text-text-secondary">{stat.label}</span>
            <span className="text-text-primary transition-transform group-hover:scale-110">
              {stat.value}/10
            </span>
          </div>
          <div className="h-2 bg-background rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out hover:brightness-110 ${stat.color}`}
              style={{
                width: `${(stat.value / 10) * 100}%`,
                transitionDelay: `${index * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
