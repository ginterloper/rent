// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function PostsTable() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 px-6 py-10 shadow-sm`}
    >
      <div className="flex h-20 items-start justify-center truncate rounded-xl bg-white">
        <div className="h-7 w-full rounded-t-md bg-gray-200" />
      </div>
    </div>
  );
}