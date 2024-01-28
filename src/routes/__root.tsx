import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Me" },
  { path: "/posts", name: "Posts" },
];

export default function Root() {
  return (
    <div className="app">
      <header>
        <nav>
          <ul className="navlinks">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  activeOptions={{ exact: true }}
                  activeProps={{ style: { fontWeight: "bold" } }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
