export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Product",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
    },
    {
      name: "description",
      type: "text",
      title: "Description of Product",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
}
