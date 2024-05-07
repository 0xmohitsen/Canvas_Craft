"use client"

import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function setting() {
  const router = useRouter();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/');
  //   }, 5000);

  //   // Clear the timer if the component is unmounted
  //   return () => clearTimeout(timer);
  // }, [navigate]);
  return (
    <>
      <div className="flex min-h-screen items-center justify-center mx-2 bg-gray-100 text-lg">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold text-red-600 md:text-5xl">
            You are on setting page
          </h2>
          <p className="text-base ml-2 text-zinc-900 md:text-xl">
            It is under development.
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="mt-4 rounded-md border bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-center text-white "
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </>
  );
}

export default setting;
