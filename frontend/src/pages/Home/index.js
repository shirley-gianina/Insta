import React, { Component } from "react"

import Post from "../../components/Post";


import "./style.css"

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Post
                            author="Faye Kautzer"
                            avatar="https://cdn.fakercloud.com/avatars/adityasutomo_128.jpg"
                            image="http://placeimg.com/640/480/nature"
                            likes={54}
                            liked={true}
                            createdAt="2021-08-12T15:47:38.580Z"
                            description="Ratione voluptas aperiam est praesentium excepturi facere odit et. Cum voluptas facere quis voluptatem adipisci qui et praesentium ea. Quia dolores quae voluptas esse ex sit voluptatem quis placeat.\n \rRerum repudiandae nihil vero vero aliquam voluptas. In adipisci dignissimos molestias voluptas omnis quia amet in. Debitis voluptatem omnis architecto. Repellendus aut sint et eligendi provident ad rem consequatur. Quisquam nam quis. Corporis nisi odio possimus tenetur aut.\n \rConsequatur voluptate quam voluptatum est velit nihil. Culpa hic ut et id omnis. Dolore qui iusto culpa possimus neque in aliquam. Mollitia voluptatem quaerat. Molestiae ut vel dolor fugiat qui quaerat nihil similique."
                        />
                        <Post
                            author="Faye Kautzer"
                            avatar="https://cdn.fakercloud.com/avatars/adityasutomo_128.jpg"
                            image="http://placeimg.com/640/480/city"
                            likes={20}
                            liked={false}
                            createdAt="2021-08-12T15:47:38.580Z"
                            description="Ratione voluptas aperiam est praesentium excepturi facere odit et. Cum voluptas facere quis voluptatem adipisci qui et praesentium ea. Quia dolores quae voluptas esse ex sit voluptatem quis placeat.\n \rRerum repudiandae nihil vero vero aliquam voluptas. In adipisci dignissimos molestias voluptas omnis quia amet in. Debitis voluptatem omnis architecto. Repellendus aut sint et eligendi provident ad rem consequatur. Quisquam nam quis. Corporis nisi odio possimus tenetur aut.\n \rConsequatur voluptate quam voluptatum est velit nihil. Culpa hic ut et id omnis. Dolore qui iusto culpa possimus neque in aliquam. Mollitia voluptatem quaerat. Molestiae ut vel dolor fugiat qui quaerat nihil similique."
                        />
                        <Post
                            author="Faye Kautzer"
                            avatar="https://cdn.fakercloud.com/avatars/adityasutomo_128.jpg"
                            image="http://placeimg.com/640/480/dog"
                            likes={16}
                            liked={true}
                            createdAt="2021-08-12T15:47:38.580Z"
                            description="Ratione voluptas aperiam est praesentium excepturi facere odit et. Cum voluptas facere quis voluptatem adipisci qui et praesentium ea. Quia dolores quae voluptas esse ex sit voluptatem quis placeat.\n \rRerum repudiandae nihil vero vero aliquam voluptas. In adipisci dignissimos molestias voluptas omnis quia amet in. Debitis voluptatem omnis architecto. Repellendus aut sint et eligendi provident ad rem consequatur. Quisquam nam quis. Corporis nisi odio possimus tenetur aut.\n \rConsequatur voluptate quam voluptatum est velit nihil. Culpa hic ut et id omnis. Dolore qui iusto culpa possimus neque in aliquam. Mollitia voluptatem quaerat. Molestiae ut vel dolor fugiat qui quaerat nihil similique."
                        />
                        <Post
                            author="Faye Kautzer"
                            avatar="https://cdn.fakercloud.com/avatars/adityasutomo_128.jpg"
                            image="http://placeimg.com/640/480/cat"
                            likes={14}
                            liked={false}
                            createdAt="2021-08-12T15:47:38.580Z"
                            description="Ratione voluptas aperiam est praesentium excepturi facere odit et. Cum voluptas facere quis voluptatem adipisci qui et praesentium ea. Quia dolores quae voluptas esse ex sit voluptatem quis placeat.\n \rRerum repudiandae nihil vero vero aliquam voluptas. In adipisci dignissimos molestias voluptas omnis quia amet in. Debitis voluptatem omnis architecto. Repellendus aut sint et eligendi provident ad rem consequatur. Quisquam nam quis. Corporis nisi odio possimus tenetur aut.\n \rConsequatur voluptate quam voluptatum est velit nihil. Culpa hic ut et id omnis. Dolore qui iusto culpa possimus neque in aliquam. Mollitia voluptatem quaerat. Molestiae ut vel dolor fugiat qui quaerat nihil similique."
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

// {
//     "createdAt": "2021-08-12T15:47:38.580Z",
//     "name": "Faye Kautzer",
//     "avatar": "https://cdn.fakercloud.com/avatars/adityasutomo_128.jpg",
//     "post_img": "http://placeimg.com/640/480/city",
//     "comment": "Ratione voluptas aperiam est praesentium excepturi facere odit et. Cum voluptas facere quis voluptatem adipisci qui et praesentium ea. Quia dolores quae voluptas esse ex sit voluptatem quis placeat.\n \rRerum repudiandae nihil vero vero aliquam voluptas. In adipisci dignissimos molestias voluptas omnis quia amet in. Debitis voluptatem omnis architecto. Repellendus aut sint et eligendi provident ad rem consequatur. Quisquam nam quis. Corporis nisi odio possimus tenetur aut.\n \rConsequatur voluptate quam voluptatum est velit nihil. Culpa hic ut et id omnis. Dolore qui iusto culpa possimus neque in aliquam. Mollitia voluptatem quaerat. Molestiae ut vel dolor fugiat qui quaerat nihil similique.",
//     "id": "49"
//   },