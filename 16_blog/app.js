const { connect } = require("mongoose");
const User = require("./schemaes");
const users = require("./users");

connect(
  "mongodb://localhost/blog-test",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createUser = async () => {
  try {
    const data = await User.create(users);
    console.log(data);
    console.log("User Created");
  } catch (e) {
    console.log(e);
  }
};

const createPost = async ({ email, post }) => {
  try {
    const filter = { "details.email": email };
    const update = {
      posts: {
        post,
      },
    };
    const data = await User.findOneAndUpdate(filter, update);
    console.log("Post Created");
  } catch (e) {
    console.log(e);
  }
};

const createComment = async ({ postOwner, emailOfCommentor, content }) => {
  try {
    const filter = { "details.email": postOwner };
    const update = {
      $push: { "posts.comments": { content, email: emailOfCommentor } },
    };
    const data = await User.findOneAndUpdate(filter, update);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
//createUser(users);
createPost("Monika@gmail.com", "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem")