



                     //-------------login admin Email validation--------------

      function mailvalidate()
      {
          var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
          var useremail=document.getElementById("adminloginemail").value;

          if(emailexp.test(useremail))
          {
              document.getElementById("inv-mail").style.display="none";
          }
          else{
              document.getElementById("inv-mail").style.display="inline";
          }
      }
