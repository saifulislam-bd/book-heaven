const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about-us",
    },
    { id: 3, title: "All Book", link: "/all-book" },
    {
      id: 4,
      title: "Cart",
      link: "/cart",
    },
    {
      id: 5,
      title: "Profile",
      link: "/profile",
    },
  ];

  return (
    <nav className="flex bg-zinc-800 text-white px-8 py-4 justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
          alt="logo"
          className="h-10 me-4"
        />
        <h1 className="text-2xl font-semibold">BookHeaven</h1>
      </div>
      <div className="nav-links flex items-center gap-4">
        <div className="flex items-center gap-4 cursor-pointer">
          {links.map((item) => (
            <div
              key={item.id}
              className="hover:text-blue-500 transition-all duration-300"
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Log in
          </button>
          <button className="px-2 py-1 bg-blue-500  rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
