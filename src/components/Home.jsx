import { useSelector } from "react-redux";
import { Link } from "react-router";
import Typewriter from "./Typewriter";

function Home() {
  const userData = useSelector((state) => state.auth.userData)
  const userName = userData?.name || "Stranger"

  return (
    <div className="bg-gray-900 grow w-full flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center max-w-3xl space-y-6">
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-600 drop-shadow-sm">
          WIREFRAME
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
          Just the words, Nothing else
        </h2>

        <p className="text-lg text-gray-500 font-mono tracking-wide h-8">
          <Typewriter key={userName} text={`> Welcome, ${userName}`} />
        </p>

        <Link to="/all-posts" className="pt-8">
          <button
          className="px-8 py-3 rounded-full bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.15)] hover:shadow-[0_0_25px_rgba(8,145,178,0.4)]">
            Start Reading
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;