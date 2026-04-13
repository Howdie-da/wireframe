import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { deleteOne } from "../store/postSlice";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const dispatch = useDispatch()

    const allPosts = useSelector((state) => state.posts.allPosts);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            const cachedPost = allPosts.find((p) => p.$id === slug);

            if(cachedPost) {
                setPost(cachedPost)
            }else {
                appwriteService.getPost(slug).then((post) => {
                    if (post) setPost(post);
                    else navigate("/");
                });
            }
        } else navigate("/");
    }, [slug, navigate, allPosts]);


    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                dispatch(deleteOne(post.$id))
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border border-gray-700 bg-gray-900/50 rounded-xl p-2">
                    <img
                        src={appwriteService.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl object-contain max-h-125" 
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="mr-3 shadow-lg">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" className="shadow-lg" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                
                <div className="w-full mb-6">
                    <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                </div>
                
                <div className="browser-css text-gray-300 leading-relaxed">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="w-full mt-8 text-center">
            <h1 className="text-2xl font-bold text-gray-400">
                Loading...
            </h1>
            <p className="text-gray-500 mt-2">Post is Loading!</p>
        </div>
    )
}