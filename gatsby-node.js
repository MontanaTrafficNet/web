const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const Axios = require('axios');
const pdfreader = require('pdfreader');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const pdfPath = path.resolve(__dirname, 'public', 'members.pdf')
  const writer = fs.createWriteStream(pdfPath)

  const url = `https://docs.google.com/spreadsheets/d/1l8RBVzVa7y7oFf5wtARpqoEPDGOb2TpTcGS-NYYk8kE/export?exportFormat=pdf&format=pdf&size=LETTER&portrait=true&fitw=true&top_margin=0.137&bottom_margin=0&right_margin=0.30&left_margin=0.30&sheetnames=false&printtitle=false&pagenum=false&gridlines=false&fzr=FALSE&gid=972151208`;

   const response = await Axios.default({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  await new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  });

  const date = await new Promise((resolve, reject) => {
    let lastText = "";
    let foundText;
    new pdfreader.PdfReader().parseFileItems(pdfPath, function(err, item) {
      if (err) reject(err);
      else if (!item) resolve(foundText);
      else if (!foundText && item.text && lastText.includes("Montana")) foundText = item.text;
      lastText = item && (item.text || "");
    });
  });

  // if (text.length < 1) {
  //   // endJob({id: "create-members-pdf"});
  //   console.log("Error parsing members list", error);
  //   throw new Error("Error parsing members list");
  // }
  const pdfData = { date, path: 'members.pdf' };
  const id = createNodeId(`members-pdf`);
  const nodeMeta = {
    id, 
    parent: null,
    children: [],
    internal: {
      type: `rollCall`,
      mediaType: `application/pdf`,
      content: date,
      contentDigest: createContentDigest(date)
    }
  }

  const node = Object.assign({}, pdfData, nodeMeta)
  createNode(node)
}
