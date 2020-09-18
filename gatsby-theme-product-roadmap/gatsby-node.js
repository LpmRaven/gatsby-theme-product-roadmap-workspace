const fs = require("fs")

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath;
  //const contentPath = "data";


  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// Define the "Event" type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
      type RoadmapEvent implements Node @dontInfer {
        id: ID!
        title: String!
        content: String!
        startDate: Date! @dateformat @proxy(from: "start_date")
        endDate: Date @dateformat @proxy(from: "end_date")
        url: String
      }
    `)
}

// query for RoadmapEvents and create pages
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath;
  //const basePath = '/';

  const result = await graphql(`
    query {
      allRoadmapEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading allRoadmapEvent", result.errors)
    return
  }

  const roadmapEvents = result.data.allRoadmapEvent.nodes

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/roadmap.js"),
    context: {
      roadmapEvents
    },
  })
}

