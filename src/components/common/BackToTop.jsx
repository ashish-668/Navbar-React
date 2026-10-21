
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = ({ darkMode }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <button
          onClick={backToTop}
          aria-label="Back to top"
          className="cursor-pointer dark:bg-white bg-bright-orange
          size-16 max-sm:size-12 flex items-center justify-center
          rounded-full fixed right-8 bottom-14"
        >
          {darkMode ? (
            <ArrowUp size={22} color="black " />
          ) : (
            <ArrowUp size={22} color="white" />
          )}
        </button>
      )}
    </>
  );
};

export default BackToTop;
