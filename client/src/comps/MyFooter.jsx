import SimpleReactFooter from "simple-react-footer";

const MyFooter = () => {

    const description = "News is information that is published in newspapers and broadcast on radio and television about recent events in the country or world or in a particular area of activity.";
    const title = "News in Journalism";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                    // link: "#"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/login"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
    ];


    return (
        <div>
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="fluffy_cat_on_linkedin"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="black"
                iconColor="black"
                backgroundColor="#cacaca00"
                fontColor="black"
                copyrightColor="darkgrey"
            />;

        </div>
    )
}

export { MyFooter }