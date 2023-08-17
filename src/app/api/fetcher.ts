// import { Key } from 'swr';
// import { Post } from '../model/Post';

const fetcher = async (query: string) => {
    let url = `https://the-trivia-api.com/v2/questions?limit=50${query}`;
    console.log(url);
    const ret = await fetch(url).then((res) => res.json());
    // if (!ret.ok){
    //     const error = Error('Houston, we have a big problem while retrieving the data');
    //     error.message = await ret.json();
    //     return error;
    // }

    return await ret.json();
}

// const postNewPost = async (body: Partial<Post>) => {
//     const r = await fetch('http://localhost:3001/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });

//   return await r.json();
// };

export { fetcher } //, postNewPost };