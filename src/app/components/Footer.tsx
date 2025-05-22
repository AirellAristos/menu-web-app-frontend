export default function Footer() {
    return (
        <div className="border border-t-gray-300 px-52 py-6 mt-20">
            <div className="flex justify-between items-center border-b border-b-gray-300 pb-6">
                <p><span className="font-bold">Made With Love by Airell</span> ⸜(｡˃ ᵕ ˂ )⸝♡</p>
                <div className="max-w-xs">
                    <p className="font-bold">Social Media</p>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded transition-colors">
                        <img src="/icons/linkedin-svgrepo-com.svg" alt="Linkedin" className="w-6 opacity-80" />
                        <a href="https://www.linkedin.com/in/airellaristo" className="hover:underline text-sm">
                            LinkedIn Profile
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded transition-colors">
                        <img src="/icons/github-142-svgrepo-com.svg" alt="GitHub" className="w-6 opacity-80" />
                        <a href="https://github.com/AirellAristos" className="hover:underline text-sm">
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center mt-6">
                <img src="/icons/code-box-svgrepo-com.svg" alt="codebox" className="w-10" />
                <p>Airell Restaurant Project Repo</p>
            </div>
        </div>
    )
}