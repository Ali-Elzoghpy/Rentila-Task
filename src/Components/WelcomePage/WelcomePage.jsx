import React from "react";
import logo from "../../assets/logo@2x.png";
import { useForm } from "react-hook-form";
import {
  countryVerfication,
  emailVefication,
  phoneNumberVefication,
  usernameValidation,
} from "./../../services/validators";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  let navigate = useNavigate();
  let {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ mode: "onChange" });
  function sendData(data) {
    console.log(data);
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/landlord", { state: "Welcome!" });
    }
  }
  return (
    <>
      <div className=" container  p-3  flex justify-center items-center  xs:w-[90%]  md:w-[60%] mx-auto ">
        <div className="content">
          <header className="text-center">
            <img src={logo} alt="" className="w-[50%] mx-auto" />
            <p className="mt-5">
              {" "}
              Welcome! To access the site, please enter your details.
            </p>
          </header>

          <main className="bg-white border shadow-md  p-10 rounded-lg my-10">
            <form onSubmit={handleSubmit(sendData)}>
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>

              <div className=" mb-4">
                <input
                  {...register("email", emailVefication)}
                  type="email"
                  id="website-admin"
                  className=" rounded-lg bg-gray-50 border text-gray-900  focus:outline-none  focus:border-mainColor  block flex-1 min-w-0 w-full text-sm  p-2.5 "
                  placeholder=""
                />
                {errors?.email && (
                  <span className="text-red-600">{errors?.email.message}</span>
                )}
              </div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Username
              </label>
              <div className=" mb-4">
                <input
                  {...register("name", usernameValidation)}
                  type="text"
                  id="website-admin"
                  className=" rounded-lg bg-gray-50 border text-gray-900  focus:outline-none  focus:border-mainColor  block flex-1 min-w-0 w-full text-sm  p-2.5 "
                  placeholder=""
                />
                {errors?.name && (
                  <span className="text-red-600">{errors?.name.message}</span>
                )}
              </div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Number
              </label>
              <div className=" mb-4">
                <input
                  {...register("phone", phoneNumberVefication)}
                  type="text"
                  id="website-admin"
                  className=" rounded-lg bg-gray-50 border text-gray-900  focus:outline-none  focus:border-mainColor  block -1 min-w-0 w-full text-sm  p-2.5 "
                  placeholder=""
                />
                {errors?.phone && (
                  <span className="text-red-600">{errors?.phone.message}</span>
                )}
              </div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Country
              </label>
              <div className=" mb-4">
                <input
                  {...register("country", countryVerfication)}
                  type="text"
                  id="website-admin"
                  className=" rounded-lg bg-gray-50 border text-gray-900  focus:outline-none  focus:border-mainColor  block -1 min-w-0 w-full text-sm  p-2.5 "
                  placeholder=""
                />
                {errors?.country && (
                  <span className="text-red-600">
                    {errors?.country.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn  w-full mt-5">
                {" "}
                submit{" "}
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}
