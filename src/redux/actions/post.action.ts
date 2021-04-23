import * as TYPE from './type.action';
export const postsAction = ({ posts }: any) => ({
  type: TYPE.POSTS,
  payload: posts
})
