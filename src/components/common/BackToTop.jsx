import { useEffect, useState } from "react";
import Icons from "./Icons";

const BackToTop = () => {
  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    function handelScroll() {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      {ShowButton && (
        <button
          onClick={backToTop}
          className="cursor-pointer bg-bright-orange size-16 max-sm:size-12 flex items-center justify-center rounded-full fixed right-8 bottom-14"
        >
         <Icons icon="backarrow"/>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
