import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
// https://github.com/vantezzen/autoform
export default function Index() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
