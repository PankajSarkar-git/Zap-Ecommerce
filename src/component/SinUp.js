import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const SinUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [hidePassword, setHidePassword] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate("/");
    }
  });

  const sinUpHandel = (e) => {
    e.preventDefault();
    const userData = { id, name, email, number, address, password, gender };
    const fetchUrl = "http://localhost:3000/users";

    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        setId("");
        setAddress("");
        setEmail("");
        setName("");
        setNumber("");
        setPassword("");
        setgender("");
        toast.success("register success full");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Registation error for : " + err.message);
      });
  };

  return (
    <>
      <div className="pt-[10vh] min-h-[80vh] min-w-full backdrop-blur-2xl bg-gray-400">
        <div className="px-28 py-6 min-h-[80vh] flex flex-col items-center justify-center ">
          
          <div className="flex flex-col items-center text-xl  bg-blue-200 border p-5 h-fit w-96 rounded-2xl">
            <h3 className="text-2xl font-bold">SinUp page</h3>
            <form action="" className="  " onSubmit={sinUpHandel}>
              <label>User Name :</label>
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e) => setId(e.target.value)}
                value={id}
                className="w-full bg-slate-400 text-2xl"
              />
              <label>Full Name :</label>
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full bg-slate-400 text-2xl"
              />
              <label>Email :</label>
              <input
                type="email"
                name=""
                id=""
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full bg-slate-400 text-2xl"
              />
              <label>Number:</label>
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className="w-full bg-slate-400 text-2xl"
              />
              <label>Address :</label>
              <textarea
                rows={4}
                type="text"
                name=""
                id=""
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="w-full bg-slate-400 text-2xl"
              />
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onClick={(e) => setgender(e.target.value)}
                />
                <label className="pr-2">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onClick={(e) => setgender(e.target.value)}
                />
                <label>Female</label>
              </div>
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
                className="p-2 rounded-lg bg-green-500 my-5 mr-5"
              />
              <Link to="/login">
                <button className="p-2 rounded-lg bg-yellow-500 my-5">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinUp;
