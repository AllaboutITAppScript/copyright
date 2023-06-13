    $('#btn').hide()
  const cr = "พัฒนาโดย:นายธีรพงศ์ พรหมวัง <img src='https://i.im.ge/2022/12/18/dnNRqa.2564-01-03-094436.png' width='25' height='25' alt='ครบเครื่อง เรื่องไอที'>"
  $(document ).ready(async function() {
      document.getElementById('message').innerHTML= cr;
      document.getElementById('text').innerHTML= text;
      document.getElementById('message').className = 'msgBg';
      document.getElementById('loader').style.display = "none";
     const location =  await loatStart();
      //console.log(location)
        // $('#canvas').show()
  });

function loatStart(){
    $.LoadingOverlaySetup({
    background      : "rgba(0, 0, 0, 0.5)",
    image           : "https://i.im.ge/2022/12/18/dnNRqa.2564-01-03-094436.png",
    imageAnimation  : "1.5s fadein",
    imageColor      : "#ffcc00"
});

$.LoadingOverlay("show");
}
