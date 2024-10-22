"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const ToastProvider = () => {
  return       <ToastContainer
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
};

export default ToastProvider;
