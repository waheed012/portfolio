"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

import { motion } from "framer-motion";

import { ScrollArea } from "../../components/ui/scroll-area";

const Reviews = {
  icon: "/public/assets/resume/badge.svg",
  title: "Customer Review",
  item: [
    { date: "12,02,2024", name: "John Doe", comment: "Great service!" },
    {
      date: "12,02,2024",
      name: "Jane Smith",
      comment: "Had an amazing experience.",
    },
    {
      date: "12,02,2024",
      name: "Michael Johnson",
      comment: "Very satisfied with the quality.",
    },
    {
      date: "12,02,2024",
      name: "Emily Davis",
      comment: "Highly recommend to everyone.",
    },
    {
      date: "12,02,2024",
      name: "Sarah Brown",
      comment: "Support team was very helpful!",
    },
    {
      date: "12,02,2024",
      name: "Chris Lee",
      comment: "Excellent work, will come back again.",
    },
    {
      date: "12,02,2024",
      name: "Jessica Wilson",
      comment: "Good value for the price.",
    },
    {
      date: "12,02,2024",
      name: "David Clark",
      comment: "Fast delivery and great communication.",
    },
  ],
};

const review = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    message: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false);
  // const [ShowMessage, setShowMessage] = useState(false); // State for modal visibility

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, email, message } = formData;
    if (!firstname || !email || !message) {
      toast.error("Please fill out all the fields."); // Show error toast
      // setShowMessage(true);
      return; // Stop form submission if any field is empty
    }

    toast.success("Message sent successfully!");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
    setFormData({
      firstname: "",
      email: "",
      message: "",
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { firstname, lastname, email, phone, service, message } = formData;
  //   if (!firstname || !lastname || !email || !phone || !service || !message) {
  //     toast.error("Please fill out all the fields."); // Show error toast
  //     // setShowMessage(true);
  //     return; // Stop form submission if any field is empty
  //   }
  //   // EmailJS configuration
  //   emailjs
  //     .send(
  //       "service_r3a6qzv",
  //       "template_pr3unic",
  //       formData,
  //       "D6mAb_-0uUQylawoG"
  //     )
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         toast.success("Message sent successfully!"); // Show success toast
  //         // Show the modal
  //         setShowModal(true);
  //         // Hide the modal after 3 seconds
  //         setTimeout(() => setShowModal(false), 3000);
  //         setFormData({
  //           firstname: "",
  //           lastname: "",
  //           email: "",
  //           phone: "",
  //           service: "",
  //           message: "",
  //         });

  //         // Clear the form fields after successful submission
  //       },
  //       (error) => {
  //         console.log("FAILED...", error);
  //         toast.error("Failed to send message."); // Show error toast
  //       }
  //     );
  // };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <ToastContainer
        position="top-right"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[50%] xl:w-[50%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Share Your Experience</h3>
              <p className="text-white/60">
                We truly appreciate you taking the time to share your thoughts
                with us. Your feedback helps us improve our services and deliver
                the best possible experience to our customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={handleInputChange}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your Comments here."
                onChange={handleInputChange}
              />

              <Button type="submit" size="lg" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center  justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <div className="flex flex-col gap-[30px]  text-left">
              <h3 className="text-4xl font-bold text-accent ">
                {Reviews.title}
              </h3>

              <ScrollArea className="h-[500px] ">
                <ul className="grid grid-cols-1  md:w-[100%] gap-[30px]">
                  {Reviews.item.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
    flex-col justify-center items-start gap-1 w-full"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl  ">{item.name}</h3>
                          <span className="text-xl  ">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.comment}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-[#27272c] p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg text-accent font-semibold">
              Thank You for Your Review!
            </h2>
            <p className="text-white/80">We appreciate your feedback</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default review;
