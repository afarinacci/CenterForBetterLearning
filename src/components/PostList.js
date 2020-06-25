import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import postlist from '../posts.json';

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(' ').slice(0, 20).join(' ') + '...';
  });
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="row justify-content-center">
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div class="col-xs-12 col-sm-10 col-lg-6 col-xl-4">
              <div key={i} className="card">
                {post.thumbnail && (
                  <Link
                    className="links"
                    to={`/post/${post.id}`}
                    onClick={scrollTop}
                  >
                    <img
                      className="card-img-top"
                      width={80}
                      src={post.thumbnail}
                      alt={post.title}
                    />
                  </Link>
                )}
                <div className="card-body">
                  <h2 className="card-title">
                    <Link
                      className="links"
                      to={`/post/${post.id}`}
                      onClick={scrollTop}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <h6 className="card-subtitle mb-2 text-muted">
                    Published on {post.date} by {post.author}
                  </h6>
                  <hr />
                  <div className="card-text">
                    <Markdown source={excerptList[i]} escapeHtml={false} />
                  </div>
                  <div>
                    <Link
                      className="card-link"
                      to={`/post/${post.id}`}
                      onClick={scrollTop}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
