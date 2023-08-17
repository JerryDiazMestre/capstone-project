import { Key } from 'swr';
// import { Quiz } from '../model/Quiz';

const getQuiz = async (key: Key) => {
    let url = `/api/${key}`;
    const ret = await fetch(url).then((res) => res.json());
    if (!ret.id){
        console.log(ret);
        const error = Error('Houston, we have a big problem while retrieving the data');
        error.message = await ret.json();
        return error;
    }

    return ret;
}

const getQuestion = async (key: Key) => {
    let url = `https://the-trivia-api.com/v2/question/${key}`;

    const ret = await fetch(url).then((res) => res.json());
    if (!ret.id){
        console.log(ret);
        const error = Error('Houston, we have a big problem while retrieving the data');
        error.message = await ret.json();
        return error;
    }

    return ret;
}

export { getQuiz, getQuestion }