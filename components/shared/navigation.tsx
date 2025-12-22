import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-6xl h-20 mx-auto ">
      <h1 className="font-semibold text-lg" >Derren Amadeo</h1>

      <div className="flex items-center gap-6">
        <div className="flex gap-6 text-sm">
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Home</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
