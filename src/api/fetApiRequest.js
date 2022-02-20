import axios from "axios";
const baseUrl = "https://api.unsplash.com";
const apiKey = "pQQhV3jE-_SjRr2-YG6uk89jLXhcOjMQo5cmJ0uFQTo";

export const getPhoto = () => {
  return axios
    .get(`${baseUrl}/photos/random?client_id=${apiKey}`)
    .then((res) => {
      return res.data;
    });
};
