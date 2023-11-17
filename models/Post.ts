import { model, Schema, models } from "mongoose";

const PostSchema = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
  photos: [String],
  profilePhoto: { type: String, required: true },
  numberOfImages: { type: Number },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
