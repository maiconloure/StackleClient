import * as TYPE from '../actions/type.action';


const initialState: any = JSON.parse(
  localStorage.getItem('posts') ||
  `{ 
    "posts": [{
      "id": "",
      "title": "",
      "cover": null,
      "public": false,
      "category": [],
      "tags": [],
      "author": "",
      "content": "",
      "likes": 0,
      "starts": 0,
      "created_at": "",
      "updated_at": ""
    }]
  }`
);


export const posts = (state = initialState, action: any): any => {
  switch (action.type) {
    case TYPE.POSTS:
      localStorage.setItem('posts', JSON.stringify({  ...action.payload }));
      return {  ...action.payload };


    default:
      return state;
  }
};