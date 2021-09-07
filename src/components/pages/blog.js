import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import heart from "../../assets/heart.svg";
import share from "../../assets/share.svg";
import eye from "../../assets/eye.svg";
import chevronDown from "../../assets/chevron-down.svg";
import authorPic from "../images/img-2.jpg";
import pic from "../images/img-1.jpg";
import dateFormatter from "../Global/dateFormatter";
import "./blog.css";

const replies = [
  {
    user: "santaslabs",
    content:
      "Lol! Says the one who was literally on four legs last night at the bar XD",
  },
  { user: "notanimposter", content: "This is cringe worthy" },
  {
    user: "goldenduck04",
    content:
      "It's very sad how people misinterpret things for their own benefit",
  },
];

var blogID = "";

function Replies() {
  if (replies.length === 0)
    return (
      <div id="replies-list">
        <div>No replies to show</div>
      </div>
    );

  var replyHolder = [];
  replies.map((reply) =>
    replyHolder.push(
      <div id="reply-box">
        <div id="reply-username">{reply.user}</div>
        <div id="reply">{reply.content}</div>
      </div>
    )
  );

  return <div id="replies-list">{replyHolder}</div>;
}

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    blogID = window.location.href.split("/").slice(-1)[0];
  }, []);

  useEffect(() => {
    function axe() {
      axios({
        method: "post",
        url: "https://dnul4ngbfk.execute-api.ap-south-1.amazonaws.com/Prod/read1Blog",
        data: { id: blogID },
      })
        .then((response) => {
          setTitle(response.data.message.Item.Title.S);
          setContent(response.data.message.Item.Content.S);
          setDate(response.data.message.Item.Date.S);
          setAuthor(response.data.message.Item.Author.S);
          setFeaturedImage(response.data.message.Item.Feature_Img);
        })
        .catch((err) => console.log(err));
    }
    axe();
  }, []);

  const [showReplies, setShowReplies] = useState(false);
  return (
    <div id="page">
      <div id="author-info">
        <img id="profilepic" src={authorPic} />
        <div id="info">
          <div id="username-blog">silverduck04</div>
          <div id="badge-info">Silver Badge Owner</div>
        </div>
      </div>
      <div id="body">
        <div id="sidebar">
          <div id="author">
            Author
            <hr /*style={width:"fit-content"}*/ />
          </div>
          <div>
            <div id="author-username">{author}</div>
            <div id="author-bio">
              I am a jobless, hopeless, senseless individual who's still
              struggling to figure out why he's alive :)
            </div>
            <hr />
          </div>
          <div id="icons">
            <img id="like" src={heart} />
            <img id="share" src={share} />
          </div>
        </div>
        <div id="content">
          <div id="head">
            <div id="title">{title}</div>
            <div id="head-info">
              <div id="time-date">15:03 {dateFormatter(date)}</div>
              <div id="views">
                {" "}
                <img id="eye" src={eye} /> 204
              </div>
            </div>
          </div>
          <div id="image">
            <img id="featured-image" src={pic} />
            <div>Image Courtesy: Leon Tusk</div>
          </div>

          <div id="blog-body">
            <ReactMarkdown>
              {content}
              {/* **What is Lorem Ipsum?**

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        *Why do we use it?*

                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                        **Where does it come from?**

                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        *Where can I get some?*

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. */}
            </ReactMarkdown>
          </div>
          <div id="comments-box">
            <div id="comments">
              Comments <hr />{" "}
            </div>
            <textarea
              id="comment-input"
              placeholder="Write your comments"
            ></textarea>
            <div id="post-btn">
              <div id="post">Post</div>
            </div>
            <div id="replies">
              <img id="userpic" src={authorPic} />
              <div>
                <div id="profile-name">silverduck04</div>
                <div id="comment">
                  Alcohol based exposures through inadvertently consuming hand
                  sanitizers have been observed to produce more negative side
                  effects for children than non-alcohol based.
                </div>
                <div
                  id="reply-dropdown"
                  onClick={() => {
                    setShowReplies(!showReplies);
                  }}
                >
                  Replies{" "}
                  <img
                    id={showReplies ? "chevron-up" : "chevron-down"}
                    src={chevronDown}
                  />
                </div>
                <div id="reply-btn">Click here to reply</div>
                {showReplies ? <Replies /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
