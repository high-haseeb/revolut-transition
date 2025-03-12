"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TransitionPage = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 30 && !expanded) {
                setExpanded(true);
            } else if (scrollTop <= 30 && expanded) {
                setExpanded(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [expanded]);

    return (
        <div className="w-full h-[250vh] bg-[#4D8BCD] flex justify-center items-center overflow-x-hidden p-0 m-0">
            <motion.img
                src="t-img.webp"
                width={1920}
                height={1080}
                alt="bg-image"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                transition={expanded 
                        ? { type: "spring", stiffness: 50, damping: 25 }
                        : { type: "spring", stiffness: 120, damping: 15 }
                    }
                animate={{
                    width: expanded ? "60%" : "100%",
                }}
            />
            <motion.div 
                animate={{
                    width: expanded ? "15vw" : "20vw",
                    height: expanded ? "400px" : "80vh",
                    borderRadius: "20px",
                    bottom: expanded ? "40%" : "20%",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className={ `duration-500 ease-in-out bg-transparent text-white outline-white text-2xl font-bold absolute left-1/2 -translate-x-1/2 overflow-x-hidden translate-y-1/2 border-2 transition-[outline] ${expanded ? "outline-[100vw]" : "outline-2"}` }
            />
            <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 40 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="absolute top-1/4 -translate-x-1/2 -translate-y-1/2 left-1/2 text-black text-8xl font-bold flex items-center justify-center flex-col gap-4"
            >
                Expanded Mode
                <div className="bg-black rounded-full text-white px-4 py-2 text-xl font-semibold w-max">Click me</div>
            </motion.div>

            <motion.img 
                src="t-right.webp"
                width={720}
                height={420}
                initial={{ opacity: 0, x: 0 }}
                animate={{ 
                    opacity: expanded ? 1 : 0,
                    x: expanded ? -100 : 0,
                    scale: expanded ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="w-40 h-auto rounded-lg bg-black absolute top-2/3 -translate-y-1/2 left-2/3 text-black text-8xl font-bold"
            >
            </motion.img>

            <motion.img 
                src="t-left.webp"
                width={720}
                height={420}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                    opacity: expanded ? 1 : 0,
                    x: expanded ? 100 : 0,
                    scale: expanded ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="w-40 h-auto rounded-lg bg-black absolute top-2/3 -translate-y-1/2 right-2/3 text-black text-8xl font-bold"
            >
            </motion.img>

            {/* Text that disappears when expanded */}
            <motion.div 
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: expanded ? 0 : 1, y: expanded ? -50 : 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="absolute top-40 -translate-y-1/2 left-40 text-white text-8xl font-bold"
            >
                Normal Mode
            </motion.div>

        </div>
    );
}

export default TransitionPage;
