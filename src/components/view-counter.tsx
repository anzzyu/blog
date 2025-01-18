export function ViewCounter({
  viewCount,
  className,
}: {
  viewCount: number;
  className?: string;
}) {
  return <span className={className}>{viewCount} 浏览</span>;
}
