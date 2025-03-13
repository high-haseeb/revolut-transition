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
        <div className="m-0 flex h-[250vh] w-full items-center justify-center overflow-x-hidden overflow-y-scroll bg-[#4D8BCD] p-0 snap-parent-y-mandatory">
            <motion.img
                src="t-img.webp"
                width={1920}
                height={1080}
                alt="bg-image"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
                transition={expanded 
                    ? { type: "spring", stiffness: 40, damping: 35 }
                    : { type: "spring", stiffness: 100, damping: 25 }
                }
                animate={{
                    width: expanded ? "60%" : "100%",
                }}
            />
            <motion.div 
                animate={{
                    width: expanded ? "15vw" : "20vw",
                    height: expanded ? "400px" : "80vh",
                    bottom: expanded ? "40%" : "20%",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                className={ `absolute left-1/2 -translate-x-1/2 translate-y-1/2 overflow-x-hidden text-2xl font-bold text-white outline-white transition-[outline] duration-700 ease-in-out ${expanded ? "outline-[100vw]" : "outline-0 "}` }
            >
                <div className={`rounded-4xl duration-200 h-full w-full bg-transparent outline-white transition-all ${expanded ? "outline-[50px]" : "outline-0 border-2"}`}></div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 40 }}
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                className="absolute left-1/2 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 text-8xl font-bold text-black " 
            >
                Expanded Mode
                <div className="w-max rounded-full bg-black px-4 py-2 text-xl font-semibold text-white">Click me</div>
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
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                className="absolute left-2/3 top-2/3 h-auto w-40 -translate-y-1/2 rounded-lg bg-black text-8xl font-bold text-black"
            />

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
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                className="absolute right-2/3 top-2/3 h-auto w-40 -translate-y-1/2 rounded-lg bg-black text-8xl font-bold text-black"
            />
            <motion.div 
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: expanded ? 0 : 1, y: expanded ? -50 : 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                className="absolute left-40 top-40 -translate-y-1/2 text-8xl font-bold text-white"
            >
                Normal Mode
            </motion.div>
        </div>
    );
}

export default TransitionPage;
