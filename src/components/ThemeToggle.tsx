import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
/* eslint-disable */
export default function ThemeToggle(props: any) {
    return (
        <button
            onClick={() => {
                var theme =
                    localStorage.getItem("theme") === "dark" ? "dark" : "light";
                if (theme === "light") {
                    localStorage.setItem("theme", "dark");
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                } else {
                    localStorage.setItem("theme", "light");
                    document.documentElement.classList.remove("dark");
                    document.documentElement.classList.add("light");
                }
            }}
        >
            <MdOutlineDarkMode
                size={25}
                className="block dark:hidden"
                id="darkIcon"
            ></MdOutlineDarkMode>
            <MdOutlineLightMode
                size={25}
                className="hidden dark:block"
                id="lightIcon"
            ></MdOutlineLightMode>
        </button>
    );
}
