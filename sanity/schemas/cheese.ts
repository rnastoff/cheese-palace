export default {
  name: 'cheese',
  type: 'document',
  title: 'Cheese',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Cheese'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size'
    },
    {
      name: 'age',
      type: 'string',
      title: 'Age'
    },
    {
      name: 'milk',
      title: 'Milk',
      type: 'reference',
      to: [
        {
          type: 'milk'
        }
      ]
    },   
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [
        {
          type: 'country'
        }
      ]
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Strip Price ID'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'sale',
      type: 'boolean',
      title: 'Is this on sale?',
      initialValue: false,
      options: {
        layout: "checkbox"
      }
    },
    {
      name: 'sale_price',
      type: 'number',
      title: 'Sale Price'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name'
      }
    }
  ]
}