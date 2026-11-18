import {
  Search,
  ShoppingCart,
  User
} from 'lucide-react'

export function Header() {
    return (
        <header className="relative z-20 h-19 shrink-0 border-b border-gray-100 bg-primary">
            <div className="mx-auto flex h-full max-w-area items-center justify-between px-5">

                <a href="/" className="logo">
                    VOGUE.
                </a>

                <nav className="hidden items-center gap-7 md:flex">
                    {["Home", "Shop", "Categories", "Events", "Blog"].map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            className={`text-[14px] ${index === 0 ? "text-active-header-nav" : "text-inactive-header-nav"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-5 text-[#687080]">
                    <button aria-label="Search">
                        <Search size={21} />
                    </button>

                    <button aria-label="Cart" className="relative">
                        <ShoppingCart size={21} />
                        <span className="absolute -right-2 -top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#191a1f] text-[9px] text-primary">
                            3
                        </span>
                    </button>

                    <button aria-label="Account">
                        <User size={21} />
                    </button>
                </div>
            </div>
        </header>
    )
}