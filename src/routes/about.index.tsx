import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutSummary,
});

function AboutSummary() {
  return <div>this is a summary route</div>;
}
