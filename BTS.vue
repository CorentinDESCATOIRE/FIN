<template>
 
      <md-app-content>
        <p>  <h1> Les BTS </h1> </p>

        <p> <h3> BTS </h3></p>
      <p> Le brevet de technicien supérieur se prépare en section de technicien supérieur dans un lycée. Cette formation accessible après le baccalauréat ou équivalent dispense des enseignements spécialisés. Elle est accompagnée d'un ou de plusieurs stages en entreprise. Elle permet d'obtenir un diplôme professionnalisé en deux ans.
          
       <p> <img src=https://www.lycee-europe-dunkerque.fr/userfiles/images/habillage/bts.png></p>
       <p> <h3> Mini site </h3></p>
       <div class="logo">
       <a href="http://snir.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_crci.png"  width="70" height="75" /> </a>
       <a href="http://snir.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_crsa.png"  width="70" height="75" /> </a>
       <a href="http://snir.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_tset.png"  width="70" height="75" /> </a>
       <a href="http://snir.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="https://www.lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_cprp.png"  width="70" height="75" /> </a>
       <a href="http://snir.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_tssn.png"  width="70" height="75" /> </a>
       </div>
      </p>
      
      </md-app-content>
   
</template>


<style lang="scss" scoped>
.md-app {
  max-height: 2000px;
  border: 1px solid rgba(#000, 0.14);
}

.md-app-toolbar {
  height: 196px;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
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