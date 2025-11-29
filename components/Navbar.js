import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b mb-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold text-red-700 cursor-pointer">
            हिंदुस्तान
          </div>
        </Link>

        {/* Categories */}
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/category/business">Business</Link>
          <Link href="/category/entertainment">Entertainment</Link>
          <Link href="/category/general">General</Link>
          <Link href="/category/health">Health</Link>
          <Link href="/category/science">Science</Link>
          <Link href="/category/sports">Sports</Link>
          <Link href="/category/technology">Technology</Link>
        </div>

      </div>
    </nav>
  );
}
