$('#camera').hide()
  const owner = "©Copyright 2023  <img src='https://i.im.ge/2022/12/18/dnNRqa.2564-01-03-094436.png' width='25' height='25' alt='AllaboutITAppScript
'> Teerapong Promwang"

/** ตั้งค่าเริ่มต้น และโหลดพิกัดตำแหน่งที่อยู่ **/
  $(document ).ready(async function() {
      document.getElementById('message').innerHTML= owner;
      document.getElementById('message').className = 'msgBg';
      document.getElementById('loader').style.display = "none";
      const location =  await getlocation();
      //console.log(location)
      init(location)
  });
