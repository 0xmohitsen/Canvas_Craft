"use client";

import { TSignInSchema, signInSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";

export default function signin() {
  const router = useRouter();

  const session = useSession();
  const convex = useConvex();
  const user: any = session?.data?.user;
  console.log(session);

  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    console.log("User team detail: ", result);

    if (result.length) {
      router.push("/dashboard");
    } else {
      router.push("/teams/create");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

  const onSubmit = async (data: FieldValues) => {
    try {
      const { email, password } = data;

      // const response = await axios.post(
      //   import.meta.env.VITE_API_PATH + '/api/auth/email-password/signin',
      //   {
      //     email,
      //     password,
      //   }
      // );
      // setUser(response.data.accessToken);
      // localStorage.setItem('isLoggedIn', 'true');
      // toast.success(response.data.message);

      reset();
      // navigate('/');
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  if (session.status === "unauthenticated") {
    return (
      <div className="m-4 flex-grow cursor-default bg-white py-4">
        <div className="mb-4 flex justify-center">
          <div className="flex w-full items-center justify-center">
            <h2 className="w-3/4 text-center text-lg font-bold text-black sm:text-xl">
              Sign in to CanvasCraft
            </h2>
          </div>
        </div>
        <div className="m-2 mt-8 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => signIn("google")}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-b-4 border-gray-300 p-3 text-center hover:bg-gray-50 md:w-3/4 lg:w-2/5"
          >
            <Image
              src="/google-color-icon.svg"
              width={18}
              height={20}
              alt="Google"
            />
            <span className="text-sm sm:text-base">Continue with Google</span>
          </button>

          <button
            onClick={() => signIn("github")}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-b-4 border-gray-300 p-3 text-center hover:bg-gray-50 md:w-3/4 lg:w-2/5"
          >
            {/* <img className="h-4 w-6 sm:h-5 sm:w-10" src={AddGithubIcon} /> */}
            <Image src="/github-icon.svg" width={18} height={20} alt="Github" />
            <span className="text-sm sm:text-base">Continue with Github</span>
          </button>
        </div>
      </div>
    );
  }
}
