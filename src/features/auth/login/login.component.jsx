"use client";

import { Formik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { InitialValue, LoginSchema } from "./form.config";
import { LoginForm } from "./login-form.component";

export function Login() {
  const { status } = useSession();
  const { push, back } = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      push("/");
    }
  }, [push, status]);

  const onSubmit = async (value) => {
    const res = await signIn("credentials", {
      redirect: false,
      ...value,
    });
    if (res?.ok) {
      back;
    }
  };

  return (
    <div className="container py-14">
      <div className="xl:w-[1042px] lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto">
        <div className="flex flex-row justify-between mb-9 ">
          <h3 className=" text-xl font-medium text-[#747474]">
            Welcome to Shoplover! Please Login.
          </h3>
          <p>
            <span className="text-[#747474]">
              New member?{" "}
              <Link
                className="text-[#0285A6]"
                href="/auth/signup"
              >
                Register
              </Link>{" "}
              here.
            </span>
          </p>
        </div>
        <Formik
          initialValues={InitialValue}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          <LoginForm />
        </Formik>
      </div>
    </div>
  );
}
