import { motion } from "framer-motion"

function Header() {
    return (
        <div>
            <header className="text-center bg-green-800 font-bold p-4">
                <motion.h1 
                animate={{ x: 1000 }}
                initial={{ x: -1000 }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="text-white text-4xl lg:text-5xl xl:text-6xl">Tim Morgan</motion.h1>
            </header>
        </div>
    );
}

export default Header;