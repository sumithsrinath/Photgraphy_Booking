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
  return await axios
    .get(`/user/login`, {
      params: {
        name: signup ? data.inputs.name : "",
        email: data.inputs.email,
        password: data.inputs.password,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return "No data";
      }

      const data = res.data;

      return data;
    })
    .catch((err) => {
      return err;
    });
};
