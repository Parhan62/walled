import { useEffect } from "react";
import { useNavigate } from "react-router";

function SignOut(){
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("login")
        navigate("/login");
    }, []);
    
//     return (
//         <section className="flex flex-col gap-y-4 justify-center items-center w-screen h-screen">
//           <p className="text-xl font-bold text-black">Are you sure?</p>
//           <ActionButton onClick={() => navigate("/")}>Go Back to Login</ActionButton>
//         </section>
//       );
}



export default SignOut