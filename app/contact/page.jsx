"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+92 345 9265012" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdulwaheedkhan748@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Street no 4 Aliabad Allah Abad Chour Harpal Rawalpindi ",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
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
    const { firstname, lastname, email, phone, service, message } = formData;

    if (!firstname || !lastname || !email || !phone || !service || !message) {
      toast.error("Please fill out all the fields."); // Show error toast
      // setShowMessage(true);
      return; // Stop form submission if any field is empty
    }
    // EmailJS configuration
    emailjs
      .send(
        "service_r3a6qzv",
        "template_pr3unic",
        formData,
        "D6mAb_-0uUQylawoG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!"); // Show success toast
          // Show the modal
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
          setShowModal(true);
          // Hide the modal after 3 seconds
          setTimeout(() => setShowModal(false), 3000);
          // Clear the form fields after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message."); // Show error toast
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[50%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">let`s work together</h3>
              <p className="text-white/60">
                I’m always open to new opportunities, collaborations, and
                exciting projects! If you have any questions or would like to
                discuss a potential partnership, feel free to get in touch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleInputChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                />
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Full-Stack Development">
                      Full-Stack Development
                    </SelectItem>
                    <SelectItem value="Landing Page Development">
                      Landing Page Development
                    </SelectItem>
                    <SelectItem value="E-commerce Development">
                      E-commerce Development
                    </SelectItem>
                    <SelectItem value="Single Page Application">
                      Single Page Application
                    </SelectItem>
                    <SelectItem value="Progressive Web App">
                      Progressive Web App
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="CMS Integration">
                      CMS Integration
                    </SelectItem>
                    <SelectItem value="Website Optimization">
                      Website Optimization
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                onChange={handleInputChange}
              />

              {/* {ShowMessage && (
                <p className="text-red-500 text-base  ">
                  Please fill out all the fields.
                </p>
              )} */}
              <Button type="submit" size="lg" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl break-all sm:break-normal">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-10 z-50">
          <div className="bg-[#27272c] p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg text-accent font-semibold">Thank You!</h2>
            <p className="text-white/80">
              We will respond to your query as soon as possible.
            </p>
          </div>
        </div>
      )}
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.section>
  );
};

export default Contact;
