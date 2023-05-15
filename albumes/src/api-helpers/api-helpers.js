import axios from "axios";
export const getAllAlbums = async () => {
  return await axios
    .get("/album")
    .then((res) => {
      if (res.status !== 200) {
        return "No data";
      }

      const data = res.data;

      return data;
    })
    .catch((err) => console.log(err));
};

export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};
