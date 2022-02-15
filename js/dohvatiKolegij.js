$(function () {

  
  $('#txtName').autocomplete({
    source: 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan',
    search: $('#txtName').val(),
    focus: (e, ui) => {
      e.preventDefault();
      $('#txtName').val(ui.item.label);
    },
    select: function (e, ui) {
      e.preventDefault();
      const id = ui.item.value;
      $.ajax({
        url: `http://www.fulek.com/VUA/supit/GetKolegij/${id}`,
        success: function (data) {

          const { id, kolegij, ects, predavanja, sati, vjezbe, tip } = data;
          insertIntoTable(id, kolegij, ects, predavanja, sati, vjezbe, tip);
          $('#txtName').val('');
        }
      })
    }
  });
});
function insertIntoTable(id, kolegij, ects, predavanja, sati, vjezbe, tip) {
  $("#tablica").find('tbody')
    .append($('<tr>')
      .append($('<td>').text(kolegij))
      .append($('<td>').text(ects))
      .append($('<td>').text(sati)) 
      .append($('<td>').text(predavanja)) 
      .append($('<td>').text(vjezbe))
      .append($('<td>').text(tip))
      .append($('<td>').append($(`<button id="btn-${id}" class="btn">Obriši</button>`))
      )
    );
  suma(ects, sati);

  $(`#btn-${id}`).click(function () {
    const id = $(this).prop('id');
    console.log(this);


    removeFromTable(ects, sati);
    $(this).parent().parent().remove();
  });
}

var totalEcts = 0;
var totalH = 0;



function removeFromTable(ects, sati) {
  totalEcts = totalEcts - ects;
  totalH = totalH - sati;
  $('#tects').text(totalEcts);
  $('#tsati').text(totalH);
  console.log("After remove:",totalEcts, totalH);
}

function suma(ects, sati) {
  totalEcts += Number(ects);
  totalH += Number(sati);
  $('#tects').text(totalEcts);
  $('#tsati').text(totalH);
  console.log("After sum: ",totalEcts, totalH); 
}
