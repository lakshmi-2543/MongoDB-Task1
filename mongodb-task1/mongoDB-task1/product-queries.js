use products
switched to db products
db.createCollection("productList");
{ ok: 1 }
db.productList.insertMany(
    [
        {
            "id": "1",
            "product_name": "Intelligent Fresh Chips",
            "product_price": 655.00,
            "product_material": "Concrete",
            "product_color": "mint green"
        },
        {
            "id": "2",
            "product_name": "Practical Fresh Sausages",
            "product_price": 911.0,
            "product_material": "Cotton",
            "product_color": "indigo"
        },
        {
            "id": "3",
            "product_name": "Refined Steel Car",
            "product_price": 690.00,
            "product_material": "Rubber",
            "product_color": "gold"
        },
        {
            "id": "4",
            "product_name": "Gorgeous Plastic Pants",
            "product_price": 492.00,
            "product_material": "Soft",
            "product_color": "plum"
        },
        {
            "id": "5",
            "product_name": "Sleek Cotton Chair",
            "product_price": 33.00,
            "product_material": "Fresh",
            "product_color": "black"
        },
        {
            "id": "6",
            "product_name": "Awesome Wooden Towels",
            "product_price": 474.00,
            "product_material": "Plastic",
            "product_color": "orange"
        },
        {
            "id": "7",
            "product_name": "Practical Soft Shoes",
            "product_price": 500.00,
            "product_material": "Rubber",
            "product_color": "pink"
        },
        {
            "id": "8",
            "product_name": "Incredible Steel Hat",
            "product_price": 78.00,
            "product_material": "Rubber",
            "product_color": "violet"
        },
        {
            "id": "9",
            "product_name": "Awesome Wooden Ball",
            "product_price": 28.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "10",
            "product_name": "Generic Wooden Pizza",
            "product_price": 84.00,
            "product_material": "Frozen",
            "product_color": "indigo"
        },
        {
            "id": "11",
            "product_name": "Unbranded Wooden Cheese",
            "product_price":26.00,
            "product_material": "Soft",
            "product_color": "black"
        },
        {
            "id": "12",
            "product_name": "Unbranded Plastic Salad",
            "product_price": 89.00,
            "product_material": "Wooden",
            "product_color": "pink"
        },
        {
            "id": "13",
            "product_name": "Gorgeous Cotton Keyboard",
            "product_price": 37.00,
            "product_material": "Concrete",
            "product_color": "sky blue"
        },
        {
            "id": "14",
            "product_name": "Incredible Steel Shirt",
            "product_price": 54.00,
            "product_material": "Metal",
            "product_color": "white"
        },
        {
            "id": "15",
            "product_name": "Ergonomic Cotton Hat",
            "product_price": 43.00,
            "product_material": "Rubber",
            "product_color": "mint green"
        },
        {
            "id": "16",
            "product_name": "Small Soft Chair",
            "product_price": 47.00,
            "product_material": "Cotton",
            "product_color": "teal"
        },
        {
            "id": "17",
            "product_name": "Incredible Metal Car",
            "product_price":36.00,
            "product_material": "Fresh",
            "product_color": "indigo"
        },
        {
            "id": "18",
            "product_name": "Licensed Plastic Bacon",
            "product_price":88.00,
            "product_material": "Steel",
            "product_color": "yellow"
        },
        {
            "id": "19",
            "product_name": "Intelligent Cotton Chips",
            "product_price": 46.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "20",
            "product_name": "Handcrafted Wooden Bacon",
            "product_price": 36.00,
            "product_material": "Concrete",
            "product_color": "lime"
        },
        {
            "id": "21",
            "product_name": "Unbranded Granite Chicken",
            "product_price": 90.00,
            "product_material": "Metal",
            "product_color": "gold"
        },
        {
            "id": "22",
            "product_name": "Ergonomic Soft Hat",
            "product_price": 99.00,
            "product_material": "Rubber",
            "product_color": "black"
        },
        {
            "id": "23",
            "product_name": "Intelligent Steel Pizza",
            "product_price": 95.00,
            "product_material": "Cotton",
            "product_color": "azure"
        },
        {
            "id": "24",
            "product_name": "Tasty Rubber Cheese",
            "product_price":47.00,
            "product_material": "Frozen",
            "product_color": "orchid"
        },
        {
            "id": "25",
            "product_name": "Licensed Steel Car",
            "product_price":20.00,
            "product_material": "Cotton",
            "product_color": "indigo"
        }
    ]
) 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
    '1': ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
    '2': ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
    '3': ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
    '4': ObjectId("64c0bcf6a0d9e7853d7ab7a7"),
    '5': ObjectId("64c0bcf6a0d9e7853d7ab7a8"),
    '6': ObjectId("64c0bcf6a0d9e7853d7ab7a9"),
    '7': ObjectId("64c0bcf6a0d9e7853d7ab7aa"),
    '8': ObjectId("64c0bcf6a0d9e7853d7ab7ab"),
    '9': ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
    '10': ObjectId("64c0bcf6a0d9e7853d7ab7ad"),
    '11': ObjectId("64c0bcf6a0d9e7853d7ab7ae"),
    '12': ObjectId("64c0bcf6a0d9e7853d7ab7af"),
    '13': ObjectId("64c0bcf6a0d9e7853d7ab7b0"),
    '14': ObjectId("64c0bcf6a0d9e7853d7ab7b1"),
    '15': ObjectId("64c0bcf6a0d9e7853d7ab7b2"),
    '16': ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
    '17': ObjectId("64c0bcf6a0d9e7853d7ab7b4"),
    '18': ObjectId("64c0bcf6a0d9e7853d7ab7b5"),
    '19': ObjectId("64c0bcf6a0d9e7853d7ab7b6"),
    '20': ObjectId("64c0bcf6a0d9e7853d7ab7b7"),
    '21': ObjectId("64c0bcf6a0d9e7853d7ab7b8"),
    '22': ObjectId("64c0bcf6a0d9e7853d7ab7b9"),
    '23': ObjectId("64c0bcf6a0d9e7853d7ab7ba"),
    '24': ObjectId("64c0bcf6a0d9e7853d7ab7bb")
  }
}

//1. Find all the information about each products
db.productList.find().toArray();

[
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a7"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a8"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a9"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7aa"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ab"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ad"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ae"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7af"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b0"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b1"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b2"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b4"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b5"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b6"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b7"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b8"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b9"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ba"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7bb"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]

// Find the product price which are between 400 to 800
db.productList.find({product_price: {$gte:400, $lte:800}});
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a8"),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a9"),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink'
}

// Find the product price which are not between 400 to 600 
db.productList.find({product_price: { $not : {$gte:400, $lte:800} } }).toArray();

[
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a7"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7aa"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ab"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ad"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ae"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7af"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b0"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b1"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b2"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b4"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b5"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b6"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b7"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b8"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b9"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ba"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7bb"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]

// List the four product which are grater than 500 in price 
db.productList.find({product_price: {$gt:500}}); 


{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
// 3 products found

db.productList.find({product_price: {$gte:500}});

{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
//4 products found inclusive of 500


// Find the product name and product material of each products
db.productList.find().forEach( (prod) => {print("Product Name: "+ prod.product_name+" - Product Material: "+prod.product_material)} );


Product Name: Intelligent Fresh Chips - Product Material: Concrete
Product Name: Practical Fresh Sausages - Product Material: Cotton
Product Name: Refined Steel Car - Product Material: Rubber
Product Name: Gorgeous Plastic Pants - Product Material: Soft
Product Name: Sleek Cotton Chair - Product Material: Fresh
Product Name: Awesome Wooden Towels - Product Material: Plastic
Product Name: Practical Soft Shoes - Product Material: Rubber
Product Name: Incredible Steel Hat - Product Material: Rubber
Product Name: Awesome Wooden Ball - Product Material: Soft
Product Name: Generic Wooden Pizza - Product Material: Frozen
Product Name: Unbranded Wooden Cheese - Product Material: Soft
Product Name: Unbranded Plastic Salad - Product Material: Wooden
Product Name: Gorgeous Cotton Keyboard - Product Material: Concrete
Product Name: Incredible Steel Shirt - Product Material: Metal
Product Name: Ergonomic Cotton Hat - Product Material: Rubber
Product Name: Small Soft Chair - Product Material: Cotton
Product Name: Incredible Metal Car - Product Material: Fresh
Product Name: Licensed Plastic Bacon - Product Material: Steel
Product Name: Intelligent Cotton Chips - Product Material: Soft
Product Name: Handcrafted Wooden Bacon - Product Material: Concrete
Product Name: Unbranded Granite Chicken - Product Material: Metal
Product Name: Ergonomic Soft Hat - Product Material: Rubber
Product Name: Intelligent Steel Pizza - Product Material: Cotton
Product Name: Tasty Rubber Cheese - Product Material: Frozen
Product Name: Licensed Steel Car - Product Material: Cotton

// Find the product with a row id of 10
db.productList.find({"id":"10"});

{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}

db.productList.find().limit(1).skip(9);

{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}

// Find only the product name and product material 
db.productList.find( {}, {product_name:1, product_material:1}).toArray();

[
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a3"),
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a5"),
    product_name: 'Refined Steel Car',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
    product_name: 'Gorgeous Plastic Pants',
    product_material: 'Soft'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a7"),
    product_name: 'Sleek Cotton Chair',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a8"),
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a9"),
    product_name: 'Practical Soft Shoes',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7aa"),
    product_name: 'Incredible Steel Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ab"),
    product_name: 'Awesome Wooden Ball',
    product_material: 'Soft'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
    product_name: 'Generic Wooden Pizza',
    product_material: 'Frozen'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ad"),
    product_name: 'Unbranded Wooden Cheese',
    product_material: 'Soft'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ae"),
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7af"),
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b0"),
    product_name: 'Incredible Steel Shirt',
    product_material: 'Metal'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b1"),
    product_name: 'Ergonomic Cotton Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b2"),
    product_name: 'Small Soft Chair',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
    product_name: 'Incredible Metal Car',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b4"),
    product_name: 'Licensed Plastic Bacon',
    product_material: 'Steel'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b5"),
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b6"),
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b7"),
    product_name: 'Unbranded Granite Chicken',
    product_material: 'Metal'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b8"),
    product_name: 'Ergonomic Soft Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b9"),
    product_name: 'Intelligent Steel Pizza',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ba"),
    product_name: 'Tasty Rubber Cheese',
    product_material: 'Frozen'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7bb"),
    product_name: 'Licensed Steel Car',
    product_material: 'Cotton'
  }
]

db.productList.find( {}, {product_name:1, product_material:1, _id:0}).toArray();

[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  },
  {
    product_name: 'Unbranded Granite Chicken',
    product_material: 'Metal'
  },
  { product_name: 'Ergonomic Soft Hat', product_material: 'Rubber' },
  {
    product_name: 'Intelligent Steel Pizza',
    product_material: 'Cotton'
  },
  { product_name: 'Tasty Rubber Cheese', product_material: 'Frozen' },
  { product_name: 'Licensed Steel Car', product_material: 'Cotton' }
]


// Find all products which contain the value of soft in product material 
db.productList.find({product_material:"Soft"}).toArray();

[
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ab"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7ad"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("64c0bcf6a0d9e7853d7ab7b5"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]

// Find products which contain product color indigo  and product price 492.00
db.productList.find({$or:[{product_color: {$eq:"indigo"}}, {product_price: {$eq:492}}] });

{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7bb"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}

db.productList.find({$or:[{product_color: "indigo"}, {product_price: 492}] }); 

{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a4"),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7a6"),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7ac"),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7b3"),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
{
  _id: ObjectId("64c0bcf6a0d9e7853d7ab7bb"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}

db.productList.find({$and:[{product_color: {$eq:"indigo"}}, {product_price: {$eq:492}}] }); 


// Delete the products which product price value are same 
db.productList.aggregate([{$group :{ _id:"$product_price",duplicate:{$addToSet:"$_id"}, Totalcount : {$sum :1}}},{$match : {Totalcount : {$gt:1} }}]).forEach((doc)=>{doc.duplicate.shift(); print(doc);db.productList.deleteMany({_id:{$in:doc.duplicate}})})


{
  _id: 47,
  duplicate: [ ObjectId("64c0bcf6a0d9e7853d7ab7b2") ],
  Totalcount: 2
}
{
  _id: 36,
  duplicate: [ ObjectId("64c0bcf6a0d9e7853d7ab7b3") ],
  Totalcount: 2
}

db.productList.aggregate([
    {$group :{
        _id:"$product_price", 
        duplicate:{$addToSet:"$_id"},
        Totalcount : {$sum :1}
    }},
    {
        $match : {
            Totalcount : {$gt:1} 
        }
    }
]).forEach((doc)=>{
    doc.duplicate.shift(); 
    db.productList.deleteMany({_id:{$in:doc.duplicate}})
})
