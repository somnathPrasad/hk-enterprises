import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  detail,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  detail?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento p-4 border-slate-700 border justify-between flex flex-col space-y-4 z-0 hover:z-50 hover:scale-105 transition-transform",
        className
      )}
      style={{
        background: "linear-gradient(180deg, #080853, var(--slate-900)",
      }}
    >
      {header}
      <div className="">
        <div className="flex items-center">
          <span className="pr-3">{icon}</span>
          <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 text-lg">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-base text-neutral-300 pb-4 hidden md:block">
          {description}
        </div>
        <div className="font-sans font-medium text-base text-neutral-300">
          {detail}
        </div>
      </div>
    </div>
  );
};
