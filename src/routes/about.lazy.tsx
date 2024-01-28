import { Link, Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

const aboutLinks = [
  {
    name: "Profile",
    path: "/about/",
  },
  {
    name: "My Posts",
    path: "/about/posts",
  },
];

function About() {
  return (
    <div className="p-2">
      Hello from About!
      <nav>
        <ul className="about-tabs">
          {aboutLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                activeProps={{
                  style: {
                    fontWeight: "bold",
                    background: "blue",
                    color: "#fff",
                  },
                }}
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
