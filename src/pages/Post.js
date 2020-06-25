import React from 'react';
import Helmet from 'react-helmet';
import Markdown from 'react-markdown';
import postlist from '../posts.json';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.id = post.id ? post.id : 'No id given';
      fetchedPost.title = post.title ? post.title : 'No title given';
      fetchedPost.date = post.date ? post.date : 'No date given';
      fetchedPost.author = post.author ? post.author : 'No author given';
      fetchedPost.content = post.content ? post.content : 'No content given';
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div>
      <Helmet>
        <title>Blog Post</title>
        <meta
          property="og:title"
          content={`Center for Better Learning | ${fetchedPost.title}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={`Blog Post: ${fetchedPost.title}`}
        />
        <meta name="description" content={`Blog Post: ${fetchedPost.title}`} />
        <meta
          property="og:url"
          content={`https://www.centerforbetterlearning.com/post/${fetchedPost.id}`}
        />
        <meta
          property="twitter:image"
          content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">Blog Post</h1>
        </div>
        <main className="container-fluid paddingAround max800">
          <div className="post">
            <h1 className="text-center">{fetchedPost.title}</h1>
            <br />
            <h6 className="text-center text-muted">
              Published on {fetchedPost.date} by {fetchedPost.author}
            </h6>
            <hr style={{ marginTop: 30, marginBottom: 30 }} />
            <Markdown source={fetchedPost.content} escapeHtml={false} />
          </div>
          <hr style={{ marginTop: 30, marginBottom: 30 }} />
          <div className="text-right">
            <Link
              to="/blog"
              className="paragraphLinkPrimary"
              onClick={scrollTop}
            >
              All Blog Posts <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Post;
