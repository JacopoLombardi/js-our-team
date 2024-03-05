// output cards
const output = document.querySelector('._output');


// array con oggetti all'interno
const team = [
   {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      immagine: 'img/wayne-barnett-founder-ceo.jpg'
   },
   {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      immagine: 'img/angela-caroll-chief-editor.jpg'
   },
   {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      immagine: 'img/walter-gordon-office-manager.jpg'
   },
   {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      immagine: 'img/angela-lopez-social-media-manager.jpg'
   },
   {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      immagine: 'img/scott-estrada-developer.jpg'
   },
   {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      immagine: 'img/barbara-ramos-graphic-designer.jpg'
   },
];


// ciclo for of per ciclare l'array con all'interno gli oggetti con le loro proprietà
for(people of team){

   output.innerHTML += `
   
   <div class="col-3  card  text-center  rounded-0  mx-3  my-5  p-0">
      <img src="${people.immagine}" alt="...">
      <div class="card-body">
         <h5 class="card-title">${people.nome}</h5>
         <p class="card-text">${people.ruolo}</p>
      </div>
   </div>
   
   `;

   console.log(people)

}

