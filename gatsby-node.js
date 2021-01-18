const path = require("path")
const fs = require("fs-extra")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const descriptionTemplate = path.resolve("./src/templates/img-description.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges;
  posts.forEach((edge, index)=>{
      createPage({
          component: descriptionTemplate,
          path: `/gallery/${edge.node.fields.slug}`,
          context: {
              slug: edge.node.fields.slug,
              prev: index === 0 ? null : posts[index-1].edge,
              next: index === (posts.length-1) ? null : posts[index+1].edge
          }
      })
  })
}
