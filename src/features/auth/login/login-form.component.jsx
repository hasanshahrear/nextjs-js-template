"use client";

import { Form } from "formik";

export function LoginForm() {
  return (
    <Form>
      <div className="flex lg:flex-row flex-col justify-between gap-12 bg-white p-8">
        <div className="flex-1">
          <br />
          <div className="flex justify-end">
            <p className="text-[#0285A6]">Reset Your Password</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[#999999] my-4">Or, login with</p>
        </div>
      </div>
    </Form>
  );
}
