let sp1 = 00;
let sp2 = 00;
let sp3 = 00;

function stopwatch() {
      if (sp1 < 10) {
        sp1++;
        document.querySelector('p1').innerHTML = ('0' + sp3 + ':0' + sp2 + ':0' + sp1);
      }
      else if (sp1 >= 10) {
        sp1++;
        document.querySelector('p1').innerHTML = ('0' + sp3 + ':0' + sp2 + ':' + sp1);
      }
      else if (sp1 >= 60) {
        var sp1 = 0
        if (sp2 >= 10) {
          sp2++;
          document.querySelector('p1').innerHTML = ('0' + sp3 + ':' + sp2 + ':0' + sp1);
        }
        else if (sp2 < 10) {
          sp2++;
          document.querySelector('p1').innerHTML = ('0' + sp3 + ':0' + sp2 + ':0' + sp1);
        }
      }
}
