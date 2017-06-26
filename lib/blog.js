// Blog.config({
//   title: "Portfolio Website",

//   rss: {
//     title: 'My Portfolio Website',
//     description: 'This is an example of a portfolio website'
//   }
// });

Blog.config({
  title: "Portfolio Website",
  blogIndexTemplate: 'blog', // '/blog' route
  blogShowTemplate: 'slug' ,   // '/blog/:slug' route
  // authorRole: 'blogAuthor',
  // adminRole: 'blogAdmin',
  // postVisibilityAdmins: 'Me & Admins only',
  // postVisibilityAdmins: 'Admins only',
  // visibleTo: 'Admins',
  // basePath: '/blog/tag/english',

  language: {
  	// adminHeader: 'Blog Admin',
  	addPost: 'Add Blog Post',
    // postVisibilityEN: 'EN',
  	// postVisibilityAdmins: 'Admins only',
  },
  rss: {
    title: 'My Portfolio Website',
    description: 'This is an example of a portfolio website'
  }
});