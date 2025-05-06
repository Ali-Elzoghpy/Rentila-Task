import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { privateApiInstance } from "../../../services/api/apiInstance";
import { Tenants_EndPoints } from "./../../../services/api/apiConfig";
import { toast } from "react-toastify";
import {
  ageVefication,
  dateVefication,
  jopVefication,
  nameVefication,
} from "./../../../services/validators";

export default function Modal({ closeMod, onOpen, editId, reFetch }) {
  let [Load, setLoad] = useState(false);
  console.log(editId)

  let {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (onOpen) {
      reset({
        job: "",
        name: "",
        age:"",
        leaseEnd: "",
        leaseStart: "",
        maritalStatus: "",
        rentStatus: "",
      });
    }
  }, [onOpen, reset]);

  function sendData(data) {
    setLoad(true);
    console.log(data);
    privateApiInstance
      .put(Tenants_EndPoints.EditTenant(editId), data)
      .then((res) => {
        console.log(res);
        if (res?.status == 200) {
          setLoad(false);
          closeMod();
          toast.success("edit success");
          reFetch();
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoad(false);
      });
  }
  function closeModal(e) {
    let parntModal = document.getElementById("parntModal");
    if (e.target.getAttribute("id") == "parntModal") {
      closeMod();
    }
  }

  return (
    <>
      {onOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 py-4"
          onClick={closeModal}
          id="parntModal"
        >
          {Load ? (
            <Loader />
          ) : (
            <div className="relative w-full max-w-md mx-4 my-4">
              <div className="relative bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-y-auto max-h-[90vh]">
                <form onSubmit={handleSubmit(sendData)} className="space-y-3">
                  <div className="mb-4 min-h-[72px]">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      {...register("name", nameVefication)}
                      type="text"
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor"
                    />
                    {errors?.name && (
                      <span className="block text-xs text-red-600 mt-1">
                        {errors?.name.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 min-h-[72px]">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Job
                    </label>
                    <input
                      {...register("job", jopVefication)}
                      type="text"
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor"
                    />
                    {errors?.job && (
                      <span className="block text-xs text-red-600 mt-1">
                        {errors?.job.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 min-h-[72px]">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      {...register("age", ageVefication)}
                      type="text"
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor"
                    />
                    {errors?.age && (
                      <span className="block text-xs text-red-600 mt-1">
                        {errors?.age.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="mb-4 min-h-[72px]">
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Start Date
                      </label>
                      <input
                        {...register("leaseStart", dateVefication)}
                        type="text"
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor"
                      />
                      {errors?.leaseStart && (
                        <span className="block text-xs text-red-600 mt-1">
                          {errors?.leaseStart.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 min-h-[72px]">
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        End Date
                      </label>
                      <input
                        {...register("leaseEnd", dateVefication)}
                        type="text"
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor"
                      />
                      {errors?.leaseEnd && (
                        <span className="block text-xs text-red-600 mt-1">
                          {errors?.leaseEnd.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 min-h-[72px]">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Marital Status
                    </label>
                    <select
                      {...register("maritalStatus", {
                        required: "Marital status is required",
                      })}
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                    >
                      <option value="">Select status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                    {errors?.maritalStatus && (
                      <span className="block text-xs text-red-600 mt-1">
                        {errors?.maritalStatus.message}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 mb-4 min-h-[72px]">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Payment Status
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          {...register("rentStatus", {
                            required: "This field is required",
                          })}
                          type="radio"
                          value="Unpaid"
                          className="text-mainColor focus:ring-mainColor"
                        />
                        <span className="text-sm">Unpaid</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          {...register("rentStatus", {
                            required: "This field is required",
                          })}
                          type="radio"
                          value="Paid"
                          className="text-mainColor focus:ring-mainColor"
                        />
                        <span className="text-sm">Paid</span>
                      </label>
                    </div>
                    {errors.rentStatus && (
                      <span className="block text-xs text-red-600 mt-1">
                        {errors.rentStatus.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 mt-2 font-medium text-white rounded-lg bg-mainColor hover:bg-mainColorDark focus:outline-none focus:ring-2 focus:ring-mainColor focus:ring-offset-2"
                  >
                    {isSubmitting ? "Loading.." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
