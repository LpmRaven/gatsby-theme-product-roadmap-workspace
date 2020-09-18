// module.exports = ({ contentPath = "data", basePath = "/" }) => ({
//     plugins: [
//         {
//             resolve: "gatsby-source-filesystem",
//             options: {
//                 path: contentPath,
//             },
//         },
//         {
//             resolve: "gatsby-transformer-yaml",
//             options: {
//                 typeName: "RoadmapEvent",
//             },
//         },
//     ],
// })

module.exports = {
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "data",
            },
        },
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                typeName: "RoadmapEvent",
            },
        },
    ],
}