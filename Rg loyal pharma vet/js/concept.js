document.addEventListener("DOMContentLoaded",
  function (event) {
  
  ahr = [['VETERNIARY| HEPA-SAFE LIQ|1 LITRE', 'VETERNIARY|ALBIDOL 150MG TAB|4 PCS', 'VETERNIARY|ALBIDOL BOLUS 1500MG|4 PCS', 'VETERNIARY|ALBIDOL SUSP|30 ML', 'VETERNIARY|BINOCIN ING|1 GM', 'VETERNIARY|BINOCIN INJ|2 5 GM', 'VETERNIARY|BINOCIN INJ|2000 MG', 'VETERNIARY|BINOCIN INJ|500 MG', 'VETERNIARY|BUTAGESIC-K INJ|30 ML', 'VETERNIARY|CALCI-ROYAL|100 GM', 'VETERNIARY|CEFLACTUM INJ|3 GM', 'VETERNIARY|CEFLACTUM INJ|600 MG', 'VETERNIARY|CONCIMIN POWDER|1 KG', 'VETERNIARY|CONCIMIN POWDER|2 5 KG', 'VETERNIARY|CONCIMIN POWDER|2 KG', 'VETERNIARY|CONCIMIN POWDER|800 GM', 'VETERNIARY|CONCIPLEX INJ|10 ML', 'VETERNIARY|CONCIPLEX INJ|30 ML', 'VETERNIARY|CONCITON LIQ|30 ML', 'VETERNIARY|CONCITONE LIQ|100 ML', 'VETERNIARY|CONCITONE LIQ|500 ML', 'VETERNIARY|CONFLOX ORAL SOL|100 ML', 'VETERNIARY|CONFLOX ORAL SOL|500 ML', 'VETERNIARY|CONMOX INJ|3 GM', 'VETERNIARY|CONTROX-3GM|3 GM', 'VETERNIARY|CURADEX INJ|10 ML', 'VETERNIARY|CUTIROSE|15 ML', 'VETERNIARY|CUTIROSE|50 ML', 'VETERNIARY|FLORATON FORTE BOLUS|3 PCS', 'VETERNIARY|FLORATONE BOLUS|4 PCS'], ['VETERNIARY|GENTAVET INJ|30 ML', 'VETERNIARY|HEPA-SAFE LIQ|5 LITRE', 'VETERNIARY|LEPTAMILK -FORTE|1 LITRE', 'VETERNIARY|LEPTAMILK FORTE|5 LITRE', 'VETERNIARY|PEPCID C|10 ML', 'VETERNIARY|PEPSID-C INJ|30 ML', 'VETERNIARY|PRAZICON TAB|10 PCS', 'VETERNIARY|RAFOMISOLE FORTE|100 ML', 'VETERNIARY|SULCOPRIM POWDER|100 GM', 'VETERNIARY|SULCOPRIM POWDER|500 GM', 'VETERNIARY|SULCOPRIM TAB|4 PCS', 'VETERNIARY|VITACEPT INJ|10 ML', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA']];
  prd_id = ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10','P11','P12','P13','P14','P15','P16','P17','P18','P19','P20',
                'P21','P22','P23','P24','P25','P26','P27','P28','P29','P30'];

    cat_id = ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','E16','E17','E18','E19','E20',
                'E21','E22','E23','E24','E25','E26','E27','E28','E29','E30'];
    count = 0;

    cmp = ahr;

    function changecontent(names,content){
      function insert(element,id) {
            document
            .getElementById(id)
                .innerHTML = element;
            }
    for (i = 0; i < content.length; i++) {
        if (names[i] == 'NA'){
            document.getElementById(cat_id[i]).remove();
        }
    else {
        insert(names[i],content[i]);
         }
      }
    }
  function change(event) {
      count += 1;
      if (count<cmp.length){
          changecontent(cmp[count],prd_id);
      }
      else{
        count = 0;
        history.go(0);
        changecontent(cmp[count],prd_id);
          }
    }
// Unobtrusive event binding
document.querySelector("#product-next")
  .addEventListener("click", change);

(function firstpage(){
  for (i=0; i<=30;i++){
    if(cmp[0][i]=='NA'){
        document.getElementById(cat_id[i]).remove();
    }
    else{
      document.getElementById(prd_id[i]).innerHTML = cmp[0][i];
    }
  }
})();
}
);