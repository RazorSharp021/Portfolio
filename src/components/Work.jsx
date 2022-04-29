import React from "react";
import Tic from "../assets/tic.png";
import Jeo from "../assets/jeo.png";
import Shen from "../assets/shen.png";
import todo from "../assets/todo.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#002147]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#EEC373] ">
            Projects
          </p>
          <p className="py-6">Checkout some of my recent projects</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Jeo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div my-auto"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-m font-bold text-white tracking-wider">
                Jeopardy
              </span>
              <p className="text-s">This is a single page application, created as a group project, a digital version of the TV show, "Jeopardy!" where the user is allowed to login, select the difficulty, and access some relative records. 
              </p>
              <p>Tech stack: Express, Node.JS, Axios</p>
              <div className="text-center">
                <a href="https://rezas-quiz.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-m px-2 py-1 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/jeopardy_game" target="_blank">
                  <button className="text-center rounded-m px-2 py-1 m-2 bg-white text-gray-700">
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
              <span className="text-m font-bold text-white tracking-wider">
                Shenanigans
              </span>
              <p>This CRUD (Create, Read, Update, Delete) application allows the sydney party people to login, view the upcoming music events and store the event details for ticketing info etc.</p>
              <p>Tech stack: Ruby, Sinatra, Node.JS</p>
              <div className=" text-center">
                <a href="https://shenanigans021.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/shenanigans" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
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
              <span className="text-m font-bold text-white tracking-wider">
                Tic Tac Toe
              </span>
              <p>A digital recreation of the pen and paper game, "Tic Tac Toe", where the users take turn to select an empty box and the winner would get a score up</p>
              <p>Tech stack: JavaScript, HTML, CSS</p>
              <div className="text-center">
                <a href="https://razorsharp021.github.io/Tic-Tac-Toe/" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/Tic-Tac-Toe" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
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
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-m font-bold text-white tracking-wider">
                Missions
              </span>
              <p>This user friendly to-do application is developed using React.JS to allow the user to create a list of upcoming tasks, edit, delete or mark them as complete</p>
              <p>Tech stack: React.JS, React hooks, Bootsrap</p>
              <div className="text-center">
                <a href="https://missions-mocha.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RazorSharp021/Missions" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
