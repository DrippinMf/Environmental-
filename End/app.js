
var data = [
    {
        id: 1,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/08/Image-by-Sprout-World--683x1024.jpg",
        des: "SPROUT WORLD REPLANTALBLE PENCILS",
        price: "3k"
    },
    {
        id: 2,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/08/Image-by-Amber-Rose--683x1024.jpg",
        des: "AMBER + ROSE RECYCLED NEWSPAPER PENCILS",
        price: "15k"
    },
    {
        id: 3,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Agood-Company-683x1024.jpg",
        des: "AGOOD COMPANY Eco Friendly PENS",
        price: "20k"
    },
    {
        id: 4,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Onyx-Green-1-683x1024.jpg",
        des: "B ONYX + GREEN SCISSORS, GLUE, & RUBBER ERASERS",
        price: "50k"
    },
    {
        id: 5,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Plastic-Free-Zone-1-683x1024.jpg",
        des: "PLASTIC FREE Bamboo Pencil Sharpener",
        price: "35k"
    },
    {
        id: 6,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Firiri-1-683x1024.jpg",
        des: "FIRIRI HANDWOVEN COTTON PENCIL CASE",
        price: "45k"
    },
    {
        id: 7,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Decomposition-Book-683x1024.jpg",
        des: "DECOMPOSITION Eco Friendly NOTEBOOKS",
        price: "7k"
    },
    {
        id: 8,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-PLM-Studios-683x1024.jpg",
        des: "PML STUDIO PLANTER JOTTER NOTEBOOKS",
        price: "5k"
    },
    {
        id: 9,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/08/Image-by-United-by-Blue--683x1024.jpg",
        des: "UNITED BY BLUE ECO FRIENDLY BACKPACKS",
        price: "150k"
    },
    {
        id: 10,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-BY-COPALA-1-683x1024.jpg",
        des: "BY COPALA LAPTOP SLEEVES",
        price: "100k"
    },
    {
        id: 11,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-Earth-Grown-1-683x1024.jpg",
        des: "EARTH GROWN ZERO WASTE CRAYONS",
        price: "100k"
    },
    {
        id: 12,
        picture: "https://www.sustainablejungle.com/wp-content/uploads/2020/03/Image-by-eco-kids-683x1024.jpg",
        des: "ECO-KIDS ECO ART SUPPLIES",
        price: "70k"
    },
];
for(let i =0; i < data.length; i++){
    addDiv(i)
}
function addDiv(i){
    var add = document.createElement("div")
    Pdes = data[i].des
    Pimg = data[i].picture
    Pprice = data[i].price
    var inside = '<div class = "bs"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><td><p><span class = "Price">'+Pprice+'</span><sup>đ</sup></p></td><button>Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".best .item")
    Price.append(add)
}