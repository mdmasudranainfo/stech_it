import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    {
      title: "Services",
      link: "/services",
      dropdownItems: [
        { title: "Service 1", link: "/service1" },
        { title: "Service 2", link: "/service2" },
        { title: "Service 3", link: "/service3" },
      ],
    },
    { title: "Projects", link: "/projects" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <div className=" shadow-xl ">
      <div className=" web-container flex items-center justify-between">
        {/* logo */}
        <div className="w-[150px]">
          <Image
            className="w-24"
            src={
              "https://classicit.com.bd/assets/images/uploads/site-info/logo/2024-02-24-65d9c80f8eedc.png"
            }
            width={400}
            height={300}
            layout="responsive"
            alt=""
          />
        </div>

        {/* nav items  */}

        <div className="">
          <ul className="flex  items-center gap-3 space-x-10 font-bold">
            {navItems.map((item, i) => {
              return (
                <li className="group relative p-4 py-6" key={i}>
                  <Link
                    className="hover:text-primary ease-in-out duration-300"
                    href={item?.link}
                  >
                    {item?.title}
                  </Link>

                  {/* dropdown menu */}
                  {item?.dropdownItems && (
                    <ul className="group-hover:block hidden absolute top-[70px] left-0 w-[200px] bg-white rounded-md shadow-lg">
                      {item?.dropdownItems.map((dropdownItem, index) => (
                        <li className="p-1 pl-4" key={index}>
                          <Link
                            className="hover:text-primary ease-in-out duration-300"
                            href={dropdownItem?.link}
                          >
                            {dropdownItem?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

            <li>
              <Link href={"/"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
