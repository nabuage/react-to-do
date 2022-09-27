import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description: "App description"
        },
        {
            slug: "about-author",
            title: "About the Author",
            description: "Author description"
        }
    ];
    // const { pathname } = useLocation();
    const { slug } = useParams();console.log(slug);
    const aboutCountent = aboutData.find(item => item.slug === slug);console.log(aboutCountent);
    const {title, description} = aboutCountent;

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default SinglePage;