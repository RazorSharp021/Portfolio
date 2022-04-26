import React from "react";
import Tic from "../assets/tic.png";
import Jeo from "../assets/jeo.png";
import Shen from "../assets/shen.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#002147]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#EEC373] ">
            Projects
          </p>
          <p className="py-6">// Checkout some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Jeo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div my-auto"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Jeopardy
              </span>
              <div className="pt-8 text-center">
                <a href="https://rezas-quiz.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/jeopardy_game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <p>
            This is a SPA and a recreation of the television game show Jeopardy,
            where the user is allowed to play through a set of quiz questions,
            by picking the difficulty.
          </p> */}

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Shen})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shenanigans
              </span>
              <div className="pt-8 text-center">
                <a href="https://shenanigans021.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/shenanigans">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <p>
            CRUD application for Sydney party people to view a list of upcoming
            events, and store or edit the event data.
          </p> */}

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Tic})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic Tac Toe
              </span>
              <div className="pt-8 text-center">
                <a href="https://razorsharp021.github.io/Tic-Tac-Toe/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/Tic-Tac-Toe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <p>
            Computer version of the Tic Tac Toe game with a retro Mortal Kombat
            theme, that keeps a record of player scores.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
