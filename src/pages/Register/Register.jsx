import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

const Register = () => {
   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await api.post("/register", {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
         });

         navigate("/userlist");
      } catch (error) {
         alert("Erro ao cadastrar usuário.");
      }
   };

   return (
      <div className="flex h-screen items-center justify-center p-5">
         <div className="container mx-auto flex max-w-md flex-col items-center justify-center rounded-xl border-2 p-3 shadow-md">
            <h2 className="mb-5 text-xl font-semibold">Cadastro</h2>
            <form
               className="flex w-full flex-col items-center justify-center gap-2"
               onSubmit={handleSubmit}
            >
               <input
                  className="w-full rounded-lg border px-3 py-1 focus:outline-none"
                  type="text"
                  placeholder="Nome"
                  ref={nameRef}
               />
               <input
                  className="w-full rounded-lg border px-3 py-1 focus:outline-none"
                  type="email"
                  placeholder="E-mail"
                  ref={emailRef}
               />
               <input
                  className="w-full rounded-lg border px-3 py-1 focus:outline-none"
                  type="password"
                  placeholder="Senha"
                  ref={passwordRef}
               />
               <button
                  className="mt-3 w-full rounded-lg border bg-blue-800 px-3 py-1 text-white"
                  type="submit"
               >
                  Cadastrar
               </button>

               <Link className="text-blue-800 hover:underline" to="/">
                  Já possui uma conta? Faça o login
               </Link>
            </form>
         </div>
      </div>
   );
};

export default Register;
