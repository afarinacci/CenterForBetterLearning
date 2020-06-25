import React from 'react';
import Helmet from 'react-helmet';
import PostList from './../components/PostList';

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
        <meta property="og:title" content="Center for Better Learning | Blog" />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/blog"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="The Center for Better Learning Blog."
        />
        <meta
          name="description"
          content="The Center for Better Learning Blog."
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">Blog</h1>
        </div>
        <main className="container-fluid paddingAround">
          <h5 style={{ paddingBottom: '30px' }} className="text-center">
            Check out our latest blog posts.
          </h5>
          <PostList />
        </main>
      </div>
    </div>
  );
}

export default Blog;
