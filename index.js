const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});


const product = [
  {
      id: 1,
      image: 'w.jpg',
      title: 'The Chamber of Secrets',
      monthly: 20000,
      price: 945,
  },
  {
      id: 2,
      image: 'e.jpg',
      title: 'The Prisoner of Azkaban',
       monthly: 20000,
      price: 945,
  }, 
  {
      id: 3,
      image: 'r.jpg',
      title: 'The Goblet of Fire',
       monthly: 20000,
      price: 1020,
  },
  {
      id: 4,
      image: 't.jpg',
      title: 'The Order of Phoenix',
       monthly: 20000,
        price: 999,
  },
  {
      id: 5,
      image: 'y.jpg',
      title: 'The Half-Blood Prince',
      monthly: 20000,
      price: 980,
  },
  {
      id: 6,
      image: 'u.jpg',
      title: 'The Deathly Hallows- Part 1.',
      monthly: 20000,
      price: 1500,
  },
  {
      id: 7,
      image: 'q.jpg',
      title: 'The Deathly Hallows- Part 2',
      monthly: 20000,
      price: 1500,
  },
  {
      id: 0,
      image: 'w.jpg',
      title: 'The Rain in España by 4reuminct',
      monthly: 20000,
      price: 489,
  },
  {
      id: 1,
      image: 'e.jpg',
      title: 'Safe Skies Archer by 4reuminct',
      monthly: 20000,
      price: 500,
  },
  {
      id: 2,
      image: 'r.jpg',
      title: 'Chasing the Wild by 4reuminct',
      monthly: 20000,
      price: 599,
  },
  {
      id: 3,
      image: 't.jpg',
      title: 'Avenues of the Diamond',
      monthly: 20000,
      price: 550,
  },
  {
    id: 4,
      image: 'y.jpg',
      title: 'Golden Scenery of Tomorrow',
      monthly: 20000,
      price: 550,
  },
 
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, monthly, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <h2>${title}</h2>
      <p>SRP ${monthly}.00 &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <button> BUY </button>
      </p>
      <p>Downpayment ${monthly}.00 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>Monthly ${price}.00  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      </div>
      </div>`
  )
}).join('')
