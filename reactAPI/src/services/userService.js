export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Data gagal dimuat");
  }
  const data = await response.json();
  return data;
}

export async function createUser(user) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Data gagal dimuat");
  }
  const data = await response.json();
  return data;
}

export async function updateUser(id, updatedUser) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    },
  );
  if(!response.ok){
    throw new Error("Gagal update")
  }
  const data = await response.json()
 console.log("Data hasil update:", data);
}


export async function deleteUser(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        }
      },
    );
    if(!response.ok){
      throw new Error("Gagal Menghapus")
    }
   
}