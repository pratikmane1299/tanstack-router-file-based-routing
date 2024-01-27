import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

export default function Root() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link
                to={"/"}
                activeOptions={{ exact: true }}
                activeProps={{ style: { fontWeight: "bold" } }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                activeOptions={{ exact: true }}
                activeProps={{ style: { fontWeight: "bold" } }}
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to={"/posts"}
                activeOptions={{ exact: true }}
                activeProps={{ style: { fontWeight: "bold" } }}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
