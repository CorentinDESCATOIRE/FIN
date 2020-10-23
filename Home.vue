<template>
  
      <md-app-content>
        <p>
          En raison des mesures sanitaire due au COVID 19 le port du masque est obligatoire 
          dans l'enceinte de l'etablidement et ces abords
        </p>
        <p>
          Nous vous prions également de respecter au maximum la distanciation social ( 1m50 d'écart ) dans les salles de classes , couloir , et au refectoir
        </p>
        <p>
           <div>
    <div class="viewport">
      
      <md-toolbar :md-elevation="3">
        <span class="md-title">Contact</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <span>Numéro de téléphone </span>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span> 03 28 58 72 10</span>
            <span>Fixe</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>
        

        <md-list-item >
         
          <md-icon class="md-primary">phone</md-icon>
          <div class="md-list-item-text">
            <span> 03 28 58 72 49</span>
            <span>Fax</span>
          </div>

           <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item >
         
          <md-icon class="md-primary">phone</md-icon>
          <div class="md-list-item-text">
            <span> 03 28 58 72 41</span>
            <span>Intendance</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>vie-scolaire1.0590072h@ac-lille.fr</span>
            <span>Intendance</span>
          </div>
        </md-list-item>
      </md-list>

       <md-divider></md-divider>
        <md-subheader>Adresse</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">room</md-icon>

          <div class="md-list-item-text">
            <span><p>809 rue du Banc Vert</p>
                  <p>BP 58<p/>
                  <p> 59944 Dunkerque Cedex 2</p></span>
          </div>
        </md-list-item>
      </md-list>

      
    </div>
    </span>
    </div>


          </p>


        
      <p>
        <img src="https://www.justacote.com/photos_entreprises/lycee-de-l-europe-dunkerque-1321748968.jpg" alt="Avatar">
      </p>
      </md-app-content>
</template>


<style lang="scss" scoped>
.md-app {
  max-height: 800px;
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
.viewport {
  width: 420px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
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
