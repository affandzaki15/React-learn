import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/userService";

export function AddUser() {
  const queryCLient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (mutation.isPending) return <p>Menyimpan...</p>;
  if (mutation.isSuccess) return <p>Pengguna berhasil ditambah</p>;
  if (mutation.isError) return <p>Error jir</p>;
  return (
    <div>
      <h2>Data Mutation</h2>

      {mutation.isPending && <p>Menyimpan...</p>}
      {mutation.isSuccess && <p>Pengguna berhasil ditambah</p>}
      {mutation.isError && <p>Gagal menambahkan pengguna</p>}

      <button
        onClick={() =>
          mutation.mutate({
            name: "Affan",
            email: "affandzaki15@gmail.com",
          })
        }
        disabled={mutation.isPending}
      >
        Tambahkan Data
      </button>
    </div>
  );
}
