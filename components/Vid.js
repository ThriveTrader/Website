import { useState } from "react";
import Container from "./container";

const Vid = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Container>
      <div className="w-full flex gap-4 mx-auto  rounded-2xl overflow-hidden">
        {/* First Video */}
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative flex-shrink-0 w-1/2 h-0 aspect-w-16 aspect-h-9 bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700"
        >
          {!playVideo && (
            <button className="absolute inset-auto w-8 h-8 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-12 lg:h-12 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 lg:w-12 lg:h-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube.com/watch?v=Pn7kx04LegE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>

        {/* Second Video */}
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative flex-shrink-0 w-1/2 h-0 aspect-w-16 aspect-h-9 bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700"
        >
          {!playVideo && (
            <button className="absolute inset-auto w-8 h-8 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-12 lg:h-12 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 lg:w-12 lg:h-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube.com/watch?v=Pn7kx04LegE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Vid;
