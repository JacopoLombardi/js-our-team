
const output = document.querySelector('._output');

// array con oggetti all'interno
const team = [
   {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      immagine: ''
   },
   {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      immagine: ''
   },
   {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      immagine: ''
   },
   {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      immagine: ''
   },
   {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      immagine: ''
   },
   {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      immagine: ''
   },
];



for(people of team){

   output.innerHTML += `
   
   <div class="col-3  card  text-center  rounded-0  mx-1  mt-5  p-0">
      <img src="img/wayne-barnett-founder-ceo.jpg" alt="...">
      <div class="card-body">
         <h5 class="card-title">${people.nome}</h5>
         <p class="card-text">${people.ruolo}</p>
      </div>
   </div>
   
   `;

   console.log(people)

}



