function calculaNota(ex, p1, p2) {
   const provaFinal = (ex + p1 + p2) / 3
 
 if (provaFinal >= 9) {
   return 'A'
 } else if (finalAverage >= 7.5) {
   return 'B'
 } else if (finalAverage >= 6) {
   return 'C'
 } else {
   return 'D'
 }
 