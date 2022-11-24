import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewPost, deletePost, getPostById, getPosts } from "../api/posts";

const key = "posts";

export const usePosts = () => {
  return useQuery([key], getPosts);
};

export const usePost = (postId) => {
  return useQuery([key, postId], () => getPostById(postId));
};

export const useNewPost = () => {
  const queryClient = useQueryClient();

  return useMutation(createNewPost, {
    onSuccess: (post) => {
      queryClient.setQueryData([key], (prevPosts) => prevPosts.concat(post));
      queryClient.invalidateQueries([key]);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSuccess: (post) => {
      // queryClient.setQueryData([key], (prevPosts) => prevPosts);
      queryClient.invalidateQueries([key]);
      
    },
  });
};