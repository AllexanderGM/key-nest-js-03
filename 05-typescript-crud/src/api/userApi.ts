async function callApi() {
  try {
    const result = await fetch("https://dummyjson.com/users");
    const data = result.ok ? await result.json() : undefined;
    return data;
  } catch (error) {
    console.error("Error en el llamado a la API de usuarios:", error);
    return undefined;
  }
}

const data = await callApi();

console.log(data);
