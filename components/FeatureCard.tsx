import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  tag,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="aspect-square flex-col flex items-start justify-between p-12">
      <Badge
        variant={"secondary"}
        className="bg-white uppercase text-xs font-light p-3 rounded-md"
      >
        {tag}
      </Badge>
      <div className="flex flex-col gap-4">
        <h2 className="font-light text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
