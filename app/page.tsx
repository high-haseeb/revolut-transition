"use client";
import { useEffect, useState } from "react";

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
            <img
                src="t-img.webp"
                width={1920}
                height={1080}
                alt="bg-image"
                className={`bg-img ${expanded ? "expanded" : ""}`} 
            />
            <div className={ `frame ${expanded ? "expanded" : ""}` }>
                <div className={`frame-inner ${expanded ? "expanded" : ""}`}></div>
            </div>
            <div className={`expanded-mode ${expanded ? "expanded" : ""}`}>
                Expanded Mode
                <div className="click-me">Click me</div>
            </div>

            <img 
                src="t-right.webp"
                width={720}
                height={420}
                className={`t-right ${expanded ? "expanded" : ""}`} 
            />

            <img 
                src="t-left.webp"
                width={720}
                height={420}
                className={`t-left ${expanded ? "expanded" : ""}`} 
            />

            <div className={`normal-mode ${expanded ? "expanded" : ""}`}>
                Normal Mode
            </div>
        </div>
    );
}

export default TransitionPage;
