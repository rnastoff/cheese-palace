export default {
  name: 'slideshow',
  type: 'document',
  title: 'Front Page Slideshow Images',
  fields: [
    {
      name: "image",
      type: 'image',
      title: "Image"
    },
    {
      name: "image_destination",
      type: 'string',
      title: 'Image Url'
    },
    {
      name: "image_alt",
      type: "string",
      title: "Image Alt"
    }
  ]
}