import axios from "axios";

const API = "http://localhost:3000";

export const getPostById = async (postId) => {
  const { data } = await axios.get(`${API}/posts/${postId}`);
  return data;
};

export const getPosts = async () => {
  const { data } = await axios.get(`${API}/posts`);
  return data;
};

export const createNewPost = async (post) => {
  const { data } = await axios.post(`${API}/posts`, post);
  return data;
};