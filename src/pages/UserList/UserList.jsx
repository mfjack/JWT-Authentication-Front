import { useEffect, useState } from "react";
import api from "../../services/api";

const UserList = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      try {
         const loadUsers = async () => {
            const { data } = await api.get("/userList", {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            });
            setUsers(data.users);
         };
         loadUsers();
      } catch (error) {
         console.log("Erro ao carregar lista de usuários.");
      }
   }, []);

   return (
      <section className="flex h-screen items-center justify-center">
         {users.length > 0 ? (
            <div className="flex max-w-lg flex-col items-center justify-center gap-4 rounded-lg border-2 p-5 shadow-md">
               <>
                  <h2 className="text-xl font-semibold">Lista de Usuários</h2>
                  {users.map((user) => (
                     <ul
                        className="w-[30rem] rounded-lg border-2 bg-gray-200 p-3 shadow-md"
                        key={user.id}
                     >
                        <li className="font-semibold">Nome: {user.name}</li>
                        <li className="font-semibold">E-mail: {user.email}</li>
                     </ul>
                  ))}
               </>
            </div>
         ) : (
            <p>Não existe usuário cadastrado.</p>
         )}
      </section>
   );
};

export default UserList;
