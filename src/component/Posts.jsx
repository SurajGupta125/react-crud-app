
import { useEffect, useState } from "react";
import { getPost, getAdd, getDelete, getEdit } from "../API/PostsAPI";
import { Form } from "./Form";

export const Posts = () => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(null); 
    const [count,setCount] = useState(100)

    const ids = () => {
       const newId = count + 1
       setCount(newId)
       return newId
    }



    // getPost 

    const getData = async () => {
        const res = await getPost();
        setData(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    // Add Post 

    const addPost = async (newPost) => {
        const res = await getAdd(newPost);
       const newPostData = {
        ...res.data,id: ids()
       }
       setData([...data,newPostData])
    };

    // EditPost 

    const editPost = async (id, update) => {
        const res = await getEdit(id, update);

        setData(
            data.map((item) =>
                item.id === id ? res.data : item
            )
        );

        setEdit(null);
    };

    // deletePost

    const deletePost = async (id) => {
        await getDelete(id);
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div>
            <Form addPost={addPost} editPost={editPost} edit={edit} />

            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <p>{item.id}</p>
                        <p><b>Title</b> {item.title}</p>
                        <p><b>Body</b> {item.body}</p>

                        <button
                            onClick={() => setEdit(item)}
                            className="btn1"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deletePost(item.id)}
                            className="btn2"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
