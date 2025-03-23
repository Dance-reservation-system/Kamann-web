import { Button } from "@/components/ui/button.tsx";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-svh">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Dashboard
      </h1>
      <Button
        onClick={() => {
          alert("nothing");
        }}
      >
        Click me
      </Button>
    </div>
  );
}
