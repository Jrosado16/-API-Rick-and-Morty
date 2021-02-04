import getData from '../utils/getData';
const Home = async() => {
  const characters = await getData();
  console.log(characters.results)
return ( 
  `
  <div class="Characters">
  ${characters.results.map(character => `
    <article class="Characters-item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
  `).join('')}
    
  </div>
  `
  );
}
 
export default Home;