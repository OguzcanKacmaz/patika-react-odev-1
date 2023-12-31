import axios from 'axios';

export default async function getData(number) {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
    const userData = { ...user.data };
    userData.posts = post.data;
    return userData;
}
