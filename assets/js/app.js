
      window.onload = function() {
          var sendButton = document.getElementById("publication");
          var thinkInput = document.getElementById("mind");
          var timeLine = document.getElementById("publicaciones");

          sendButton.onclick = function(){
              if (thinkInput.value == ""){
                  alert("complete");

              } else {
                  var tuitDiv = document.createElement("div");
                  var nameSpan = document.createElement("span");
                  var dateSpan = document.createElement("span");
                  var tuitP = document.createElement("p");
                  tuitDiv.appendChild(nameSpan);
                  tuitDiv.appendChild(dateSpan);
                  tuitDiv.appendChild(tuitP);
                  tuitDiv.className = "tuit"
                  nameSpan.textContent = "juanita";
                  dateSpan.textContent = new Date();
                  tuitP.textContent = thinkInput.value;
                  timeLine.insertBefore(tuitDiv, timeLine.children[0]);
                  thinkInput.value = "";
              };
          };


      };

      //
      //base de datos contactos
      var contac =[
        {ID:'USU1', img:'CONT1.png', name: 'Andres Jorquera', email: 'ajorquera@locura.cl',
        },
        {ID:'USU2', img:'CONT2.png', name: 'Marcela Gomez', email: 'mgomez@locura.cl',
        },
        {ID:'USU3', img:'CONT3.png', name: 'Antonio Lopez', email: 'alopez@locura.cl',
        },
        {ID:'USU4', img:'CONT4.png', name: 'Marcela Quiroz', email: 'mquiroz@locura.cl',
        },
        {ID:'USU5', img:'CONT5.png', name: 'Katherine Villarroel', email: 'kvillarroel@locura.cl',
        },
        {ID:'USU6', img:'CONT6.png', name: 'Damaris Salinas', email: 'dsalinas@locura.cl',
        },
        {ID:'USU7', img:'CONT7.png', name: 'Pedro Guerra', email: 'pguerra@locura.cl',
        },
        {ID:'USU8', img:'CONT8.png', name: 'Rodolfo Fuentes', email: 'rfuentes@locura.cl',
        },
        {ID:'USU9', img:'CONT2.png', name: 'Camila Ramirez', email: 'cramirez@locura.cl',
        },
        {ID:'USU10', img:'CONT10.png', name: 'Ricardo Hernandez', email: 'rhernandez@locura.cl',
        },
        {ID:'USU11', img:'CONT11.png', name: 'Marcelo Paez', email: 'mpaez@locura.cl',
        },
        {ID:'USU12', img:'CONT12.png', name: 'Luis Rojas', email: 'lrojas@locura.cl',
        },
        {ID:'USU13', img:'CONT1.png', name: 'Renato Nuñez', email: 'rnunez@locura.cl',
        },
        {ID:'USU14', img:'CONT4.png', name: 'Romina Gonzalez', email: 'rgonzalez@locura.cl',
        },
        {ID:'USU15', img:'CONT5.png', name: 'Diana Romero', email: 'dromero@locura.cl',
        },
        {ID:'USU16', img:'CONT6.png', name: 'Natalia Lillo', email: 'nlillo@locura.cl',
        },
        {ID:'USU17', img:'CONT7.png', name: 'David Troncoso', email: 'dtroncoso@locura.cl',
        },
        {ID:'USU18', img:'CONT8.png', name: 'Ivan Fuentes', email: 'ifuentes@locura.cl',
        },
        {ID:'USU19', img:'CONT2.png', name: 'Constanza Rizos', email: 'crizos@locura.cl',
        },

      ];
      //
      //final de base de datos de contactos

      //agregar la base de datos a la pagina
      for(i = 0; i< contac.length ; i++){
        $('.sect-contact').append("<span class='contain-contact'><div class='cont'>" +
        "<a href='#'><img class='cont-img' src='assets/images/"
        + contac[i]['img'] + "'><h5>" + contac[i]['name'] + "</h5><p>" + contac[i]['email'] +
        "</p></a><button class='btn btn-default btn-delet' type='submit'>Eliminar</button></div></>");

      }

        //Contar cantidad de elementos con una clase
      $(document).ready(function(){
         //selecciono todos los elementos de la clase "mitexto"
         var quantityCont = $(".contain-contact");
         console.log(quantityCont);
         //muestro el número de los párrafos encontrados
         $('.count').append("<h1 class='tex-count'>" + quantityCont.length + "</h1>");
      });

      //Eliminar contactos
      $(".btn-delet").on("click",function(){
           $(this).parent().remove();

      });
      //Agregar contacto
      $(".btn-add").on("click",function(){
        // rescatando nombre
        var contName = $(".input-name").val();
        //rescatando el correo electronico
        var contEmail = $("#recipient-email").val();

        $('.sect-contact').append("<span class='contain-contact'><div class='cont'>" +
        "<a href='#'><img class='cont-img' src='assets/images/newcont1.png'><h5>" + 

        contName + "</h5><p>" + contEmail +
        "</p></a><button class='btn btn-default btn-delet' type='submit'>Eliminar</button></div></span>");


      });
      //Agregar imagen
      $(".btn-addima").on("click",function(){
        // rescatando iamgen
        var contIma = $(".input-ima").val();

        $('.new-ima').append("<img class='ima' src='"
        + contIma + "'>");


      });

          $('.muro, .Section-contact, .section-images, .section-message, .section-user, .bar, .login').hide();
            setTimeout(function(){ 
              $('.charge').fadeOut(500);
              $('.login').show();
            },  3000);
      


      $(document).ready(function(){ 

        $('.btn-log').click(function(){
              var user = $('.username').val();
              var password = $('.pass').val();

              if(user === "juanita" && password === "1234"){
                $('.bar').show();
                $('.muro, .Section-contact, .section-images, .section-message, .section-user, .login').hide();
                $('input').val("");
              }else{
                alert("datos incorrectos");
                $('input').val("");
              }
           });

          $('.exit').click(function(){
             $('.muro, .Section-contact, .section-images, .section-message, .section-user, .bar').hide();
             $('.login').show();
          });

           //ocultar resto de elementos y al hacer click mostrar lo solicitado
           $('.muro, .Section-contact, .section-images, .section-message, .section-user, .bar, .login').hide();
           
           $('.contact').click(function(){
            $('.muro, .section-images, .section-message, .section-user, .login').hide();
            $('.Section-contact').show();
           });

           $('.wall').click(function(){
            $('.Section-contact, .section-images, .section-message, .section-user, .login').hide();
            $('.muro').show();
           });

           $('.gallery').click(function(){
            $('.Section-contact, .muro, .section-message, .section-user, .login').hide();
            $('.section-images').show();
           });

           $('.message').click(function(){
            $('.section-images, .Section-contact, .muro, .section-user, .login').hide();
            $('.section-message').show();
           });

           $('.user').click(function(){
            $('.section-images, .Section-contact, .muro, .section-message, .login').hide();
            $('.section-user').show();
           });

          });

      /*-------------mensajes----------------------*/
      $(document).ready(function(){

        var message= $('#chat-message');/*"message"= guardo  el valor de chat-message*/
        var chat= $('#chat');

          message.focus();/*pongo el cursor de texto para escribir un mensaje*/

        $('#message-box').submit(function(e) { /*e de evento*/ /*llamo a mi form en su evento de submit*/
          e.preventDefault(); /*cancelo el refrech cuando clickeo el boton*/
          chat.append(message.val() + "<br/>"); /*al chat le agrego el "message" y todo lo que ponga adentro*/
          message.val(''); /*limpio mi input al enviar un mensaje*/

        });
      });







      /*


        // agrandar la imagen al pasar por encima
        $(".restim").mouseover(function(){
          $(this).css('height','200px');
          $(this).css('width','300px');
        });
        // achicar imagen al sacar el mouse de encima
        $(".restim").mouseout(function(){
          $(this).css('height','150px');
          $(this).css('width','200px');
        });*/
