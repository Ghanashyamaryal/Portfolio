import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const schema = yup.object().shape({
  user_name: yup.string().required("Name is required"),
  user_email: yup
    .string()
    .email("Email is invalid")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  if (typeof window !== "undefined") {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }

  const sendEmail = (data) => {
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setIsSending(false);
          reset();
        },
        (error) => {
          console.error(error);
          toast.error("Unable to send message! Please try again.");
          setIsSending(false);
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-4 max-w-[1400px]  md:px-8 xl:px-4 py-5 mx-auto text-center md:mt-7 ">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Get In Touch
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            Let's keep in touch
          </p>
        </div>

        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="hidden md:block text-2xl lg:text-3xl text-dark-orange font-medium mb-3 lg:mb-4"
            >
              Let's Work Together
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles textColor="white" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaEnvelope className="text-white" />
              <a href={`mailto:${ContactData.email}`} className="text-white md:text-lg">
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center md:gap-2 lg:gap-5"
            >
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5"
          >
            <div className="p-2 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                {...register("user_name")}
                className="mb-1 w-full bg-gray-50 rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.user_name && (
                <span className="text-red-500">{errors.user_name.message}</span>
              )}
            </div>
            <div className="p-2 w-full">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                {...register("user_email")}
                className="mb-1 w-full bg-gray-50 rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.user_email && (
                <span className="text-red-500">{errors.user_email.message}</span>
              )}
            </div>
            <div className="p-2 w-full">
              <textarea
                name="message"
                placeholder="Message"
                {...register("message")}
                className="mb-1 w-full bg-gray-50 rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                disabled={isSending}
                className="leading-none text-whitesmoke cursor-pointer bg-black border border-whitesmoke hover:border-black hover:bg-whitesmoke hover:text-black py-3 px-4 rounded-lg font-medium text-lg"
              >
                {isSending ? "Sending..." : "Send Your Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
