import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex">
          <div className="max-w-340 w-full px-5 mx-auto">
              <div className="flex items-center justify-center w-full">
                  <div className="flex items-center justify-center gap-5">
                      <h1 className="text-white text-lg leading-150">{count}</h1>
                      <button onClick={() => setCount(count + 1)} className="bg-bright-orange rounded-xl border-[0.7px] border-white transition-all duration-300 ease-in cursor-pointer hover:bg-white text-base leading-150 py-3 px-6 text-white hover:text-bright-orange">
                        Increase
                      </button>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default Counter;