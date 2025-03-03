import { toast, Bounce } from "react-toastify";

export const Sucesstoast = (msg = "SucessToast message Missing") => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

   
}

export const Errortoast = (msg = "ErrorToast message Missing") => {
   toast.error(msg, {
     position: "top-left",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     transition: Bounce,
   });
   
}
