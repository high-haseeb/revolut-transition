
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
                // stop scrolling
                window.scrollTo({
                    top: 200,
                    behavior: "smooth"
                });
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = "15px";
                setTimeout(() => {
                    // enable scrolling again
                    document.body.style.overflow = "auto";
                    document.body.style.paddingRight = "0px";
                }, 1000);
            } else if (scrollTop <= 30 && expanded) {
                setExpanded(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [expanded]);

    return (
        <div className="container">
            <motion.img
                src="t-img.webp"
                width={1920}
                height={1080}
                alt="bg-image"
                className={`bg-img ${expanded ? "expanded" : ""}`} 
                transition={expanded 
                    ? { type: "spring", stiffness: 40, damping: 35 }
                    : { type: "spring", stiffness: 100, damping: 25 }
                }
                animate={{ 
                    width: expanded ? "60%" : "100%",
                    top: expanded ? "70%" : "50%",
                }}
            />
            <div className={ `frame ${expanded ? "expanded" : ""}` } >
                <div className={ `frame-inner ${expanded ? "expanded" : ""}` }></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 200 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className={`expanded-mode`}
            >
                Expanded Mode
                <div className="click-me">Click me</div>
            </motion.div>

            <motion.img 
                initial={{ opacity: 0, x: 0 }}
                animate={{ 
                    opacity: expanded ? 1 : 0,
                    x: expanded ? -100 : 0,
                    scale: expanded ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 60, damping: 30 }}
                src="t-right.webp"
                width={720}
                height={420}
                className={`t-right`} 
            />

            <motion.img 
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                    opacity: expanded ? 1 : 0,
                    x: expanded ? 100 : 0,
                    scale: expanded ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                src="t-left.webp"
                width={720}
                height={420}
                className={`t-left`} 
            />

            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ 
                    opacity: expanded ? 0 : 1,
                    y: expanded ? -200 : 0 
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className={`normal-mode`}
            >
                Normal Mode
            </motion.div>
            <div className="next-section"></div>
        </div>
    );
}

export default TransitionPage;
