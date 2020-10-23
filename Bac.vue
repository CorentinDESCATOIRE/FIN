<template>
  <template>
      <md-app-content>
        <p>
       <h1> La reforme du Baccalauréa </h1>
      </p>
    <p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TNzvEbJdNPY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p> 
     <p>
               <div class="viewport2">
      <md-toolbar :md-elevation="1">
      </md-toolbar>
               </div>
        </p>
    <p>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SaF71ZadHGg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
      <p>
        Diaporama et Plaquette
      </p>
     <p> 
       
      <a href="https://view.genial.ly/5c0637826f191d2ca33a5640/interactive-content-1"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_diapo_2019.jpg"  width="200" height="200" /> </a>
       
      <a href="https://drive.google.com/file/d/1MhvRlbdAM-jkkF9nGZ-R-zJLUeh7xrwZ/view"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_plaq_SG_01.png"  width="150" height="100" /> </a>
     
     </p>  
      
      </md-app-content>
</template>


<style lang="scss" scoped>
.md-app {
  max-height: 2800px;
  border: 1px solid rgba(#000, 0.14);
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