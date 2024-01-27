import { Link, Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      Hello from About!
      <nav>
        <ul className="about-tabs">
          <li>
            <Link
              activeProps={{
                style: {
                  fontWeight: "bold",
                  background: "blue",
                  color: "#fff",
                },
              }}
              activeOptions={{ exact: true }}
              to="/about"
            >
              Summary
            </Link>
          </li>
          <li>
            <Link
              activeProps={{
                style: {
                  fontWeight: "bold",
                  background: "blue",
                  color: "#fff",
                },
              }}
              to={"/about/posts"}
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
