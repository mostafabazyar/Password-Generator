var password = document.getElementById('password')
   function genPassword(){
      var chars = '0987654321abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFJHIGKLMNOPQRSTUVWXYZ'
      var passwordLength = 12
      var password = ''
      for(var i = 0; i< passwordLength; i++){
         var random = Math.floor(Math.random() * chars.length)
         password += chars.substring(random, random + 1)
      }
      document.getElementById('password').value = password
   }
   function copyPassword(){
      var copyText = document.getElementById('password')
      copyText.select()
      copyText.setSelectionRange(0, 999)
      document.execCommand("copy")
      console.log(copyText);
   }