import React from 'react';
import MediaCard from "../component/Card";
const AdminLayout = () => {

    const data = [
        {
            id: "1",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "2",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "3",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "4",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "5",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "6",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "7",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "8",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "9",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "10",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "11",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        },
        {
            id: "12",
            title: "Raspberry Pi User Guide",
            cover: "/image/books.jpg",
            author: "Umidjon",
            published: "2012",
            pages: "350"
        }
    ];

    return (
        <div className="container">
            <div className="row my-5">
                {
                    data && data.map((item, index) => {
                         return(
                            <div className="mt-4 col-12 col-sm-8 offset-sm-2 offset-md-0 col-md-6 col-lg-4 col-xl-3">
                                <MediaCard data={item} key={index}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AdminLayout;