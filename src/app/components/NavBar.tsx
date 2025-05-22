export default function NavBar() {
    return (
        <section id="navBar" className="bg-white mb-12 px-52 shadow-md">
            <div className="flex flex-col">
                {/* Baris atas (logo dan ikon kanan) */}
                <div className="flex justify-between items-center pt-6">
                    {/* Kiri */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/icons/code-box-svgrepo-com.svg"
                            alt="MyLogo"
                            className="w-10"
                        />
                        <p className="font-semibold text-2xl">Airell Restaurant</p>
                    </div>

                    {/* Kanan */}
                    <div>
                        <img
                            src="/icons/note-svgrepo-com.svg"
                            alt="MyLogo"
                            className="w-10"
                        />
                    </div>
                </div>

                {/* Baris bawah (menu navigation) */}
                <div className="flex justify-center">
                    <nav className="flex gap-6">
                        <ul className="flex gap-10">
                            <li>
                                <p className="border-b-4 border-b-red-500 font-bold text-red-500 cursor-pointer pb-2">Home</p>
                            </li>
                            <li><p className="cursor-pointer font-bold hover:text-red-500 pb-2">Menu</p></li>
                            <li><p className="cursor-pointer font-bold hover:text-red-500 pb-2">Combo Set</p></li>
                            <li><p className="cursor-pointer font-bold hover:text-red-500 pb-2">Value Set</p></li>
                            <li><p className="cursor-pointer font-bold hover:text-red-500 pb-2">Kiddie Set</p></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}