import { Link, NavLink } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    { id: 2, title: "All Book", link: "/all-book" },
    {
      id: 3,
      title: "Cart",
      link: "/cart",
    },
    {
      id: 4,
      title: "Profile",
      link: "/profile",
    },
  ];

  return (
    <>
      <nav className="relative flex bg-zinc-800 text-white px-8 py-4 justify-between items-center z-20">
        <div className="nav-links block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className="text-white font-semibold text-4xl hover:text-blue-500 mb-8 transition-all duration-300"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/login"
              className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="px-4 py-1 bg-blue-500  rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Sign up
            </Link>
          </div>
          <button className="text-white text-2xl hover:text-zinc-400">
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className="absolute bg-zinc-800 h-screen top-0 left-0 w-full z-10 flex flex-col items-center justify-center">
        {links.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className="text-white font-semibold text-4xl hover:text-blue-500 mb-8 transition-all duration-300"
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
