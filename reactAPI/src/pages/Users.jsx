import { useQuery } from "@tanstack/react-query";
// import { getUsers } from "../services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateUser } from "../services/userService";
import { getUsers, updateUser, deleteUser } from "../services/userService";

function Users() {
  const queryCLient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, updatedUser }) => updateUser(id, updatedUser),
    onSuccess: () => {
      queryCLient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryCLient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h1> Daftar Pengguna</h1>
      {updateMutation.isPending && <p>Sedang update...</p>}

      {updateMutation.isSuccess && <p>Update berhasil!</p>}

      {updateMutation.isError && <p>Error: {updateMutation.error.message}</p>}

      {deleteMutation.isPending && <p>Sedang menghapus...</p>}
      {deleteMutation.isSuccess && <p>Hapus berhasil!</p>}

      {deleteMutation.isError && <p>Error: {deleteMutation.error.message}</p>}

      <ul>
        {data.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <button
                onClick={() =>
                  updateMutation.mutate({
                    id: user.id,
                    updatedUser: {
                      name: "Adizero",
                      email: user.email,
                    },
                  })
                }
              >
                update
              </button>
              <button onClick={() => deleteMutation.mutate(user.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => refetch()}>Refresh Data</button>
    </div>
  );
}

export default Users;
