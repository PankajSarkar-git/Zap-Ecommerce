import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { logIn } from "../utills/authenticationSlice";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import { EyeIcon, EyeOffIcon } from "lucide-react";

const LogIn = () => {
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState("password");

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate("/");
    }
  });

  const navigate = useNavigate();

  const authentication = (e) => {
    e.preventDefault();

    if (validetion()) {
      fetch("http://localhost:3000/users/" + userName)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (Object.keys(res).length === 0) {
            toast.error("Enter Valid User Id", {
              position: "bottom-center",
              theme: "colored",
            });
          } else {
            if (res.password === password) {
              toast.success("Login Susccessfull", {
                position: "bottom-center",
                theme: "colored",
              });
              localStorage.setItem("userName", userName);
              dispatch(logIn());
              navigate("/");
            } else {
              toast.error("incorrect PassWord", {
                position: "bottom-center",
                theme: "colored",
              });
            }
          }
        })
        .catch((err) => {
          toast.error("Log in Faild deu to :" + err.message, {
            position: "bottom-center",
            theme: "colored",
          });
        });
    }
  };
  const validetion = () => {
    let result = true;
    if (userName === "" || userName === null) {
      toast.warning("plese enter Username", {
        position: "bottom-center",
        theme: "colored",
      });
      return (result = false);
    }
    if (password === "" || password === null) {
      toast.warning("plese enter password", {
        position: "bottom-center",
        theme: "colored",
      });
      return (result = false);
    }

    return result;
  };

  return (
    <>
      <div className="pt-[10vh] min-h-[80vh] min-w-full backdrop-blur-2xl bg-gray-400">
        <div className="px-28 h-[80vh] flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center text-xl  bg-blue-200 border p-5 h-fit w-96 rounded-2xl">
         
            <h3 className="text-2xl font-bold">Log in page</h3>
            <form action="" className="  " onSubmit={authentication}>
              <label>User Name :</label>
              <input
                type="text"
                name=""
                id=""
                className="w-full bg-slate-400 text-2xl"
                onChange={(e) => SetUserName(e.target.value)}
                value={userName}
              />
              <div className="relative">
              <label>Pasword :</label>
              <input
                type={hidePassword}
                name=""
                id=""
                className="w-full bg-slate-400 text-2xl"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
               {hidePassword === "password" ? <BsEyeFill onClick={()=> setHidePassword("text")} color="blue" className="absolute right-1 bottom-[5px] "/> :  <BsEyeSlashFill onClick={()=> setHidePassword("password")} color="blue" className="absolute right-1 bottom-[6px] "/>}
              </div>
              <input
                type="submit"
                value="Log In"
                className="p-2 rounded-lg bg-green-500 my-5 mr-5"
              />
              <Link to="/sinup">
                <button className="p-2 rounded-lg bg-yellow-500 my-5">
                  Sin Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
