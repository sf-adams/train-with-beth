export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "category",
      type: "reference",
      title: "Post Category",
      to: [{type: "category"}],
    },
  ],
}
