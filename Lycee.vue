<template>

      <md-app-content>

        <p> 
          <h1>
            Le Lycée
          </h1>
        </p>
    
            <p>
           Depuis son ouverture en 1989, le lycée de l'Europe
            implanté à Dunkerque accueille un public varié 
            en raison de ses spécificités. 
           </p>
          <p>
            En effet, c'est un établissement polyvalent où 
            l'on trouve des formations générales et 
            technologiques, du baccalauréat aux classes
             préparatoires aux grandes écoles.
          </p>
          <p>
             <img src=https://www.lycee-europe-dunkerque.fr/userfiles/images/photos/legt.jpg>
           </p>
      <p>
      </p>
           
           <p>
               <div class="viewport1">
      <md-toolbar :md-elevation="1">
      </md-toolbar>
               </div>
        </p>
        <p>
          Le lycée possède aussi une unité de formation
          par apprentissage pour la préparation de 3 BTS
          industriels (BTS Electrotechnique - 
          BTS Systèmes Numériques / Informatique et Réseaux 
        - BTS Conception et Réalisation en Chaudronnerie Industrielle)
           </p>
           <p> 
        <img src=https://www.lycee-europe-dunkerque.fr/userfiles/images/logosdivers/cfa1.jpg>
      </p>
       <p>
               <div class="viewport2">
      <md-toolbar :md-elevation="1">
      </md-toolbar>
               </div>
        </p>

        <p>
   Toutes ces facettes font de cet établissement 
   un lieu de vie unique et serein dans un cadre 
   particulièrement soigné. En effet, le bâtiment
   de briques rouges abrite de nombreuses galeries 
   itrées et des courettes à thèmes pour les moments
   de pause des lycéens et étudiants.
       </p>
       <p>
   C'est un établissement qui cultive l'ouverture 
   qu'elle soit locale (notamment avec le tissu 
   industriel important sur le secteur) ou internationale
    (les projets Comenius, et ERASMUS+ par exemple ).
       </p>
       <p>
   Pour cette rentrée 2018, 1269 lycéens, étudiants
   et apprentis sont encadrés par plus de 130 enseignants.
       </p>
       <p>
   Stephane GOGET ( Provisseur )
       </p>
      <p>
        <img src=https://www.lycee-europe-dunkerque.fr/userfiles/images/photos/3.jpg>
      </p>
           
           
      
      </md-app-content>
  
</template>


<style lang="scss" scoped>
.md-app {
  max-height: 2800px;
  border: 1px solid rgba(#000, 0.14);
}

.viewport1 {
  width: 800px;
  height: 4px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 2px solid rgba(#000, 0.5);
}

.viewport2 {
  width: 800px;
  height: 4px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 2px solid rgba(#000, 0.5);
}
</style>

<script>
export default {
  name: "Flexible",
  data: () => ({
    menuVisible: false,
  }),
};
</script>