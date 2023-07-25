let offsetX, offsetY;
create_gui();
const $draggableElement = $('#main_div');
let total_count = 0;
let isDragging = false;

$(document).ready(function() {
    $('#open').click(function() {
        if($draggableElement.hasClass('d-none')){
            $draggableElement.removeClass('d-none');
        }else{
            $draggableElement.addClass('d-none');
        }
    });
    
    /*const inputElements = document.getElementsByTagName('input');
    const selectElements = document.getElementsByTagName('select');
    const total_found = document.getElementById('totalfound');
    total_found.textContent = inputElements.length + selectElements.length;
   */
    runCheck();
    
});

function runTest() {
    console.log('setting new values...');
    const inputElements = document.getElementsByTagName('input');
    const selectElements = document.getElementsByTagName('select');
    const textAreaElements = document.getElementsByTagName('textarea');

    for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
          //console.log(input.type);
        if (input.type === 'text') {
          input.value = random_name();
        }else if (input.type === 'email') {
          input.value = random_email();
        }else if (input.type === 'date') {
          input.value = random_date();
        }else if (input.type === 'number') {
          input.value = getRandomInteger(0, 9);
        }else if (input.type === 'password') {
          input.value = 'ABC123';
        }else if (input.type === 'tel') {
          input.value = random_cellphone();
        }else if (input.type === 'radio') {
          $input_radio = input.name;
          $radio_val = input.value;
          $('input[name='+$input_radio+'][value=' + $radio_val + ']').prop('checked', true);
          console.log($radio_val);
          //$('input[name="teste"][value="1"]').prop('checked', true);
        }else if (input.type === 'file') {
          //
        }else if (input.class === 'form-select') {
         // console.log('select');
        }
          total_count ++;
    }
    
    for (let i = 0; i < selectElements.length; i++) {
        const select = selectElements[i];
        select.value = '1';
        total_count ++;
    }


    for (let i = 0; i < textAreaElements.length; i++) {
        const textarea = textAreaElements[i];

        textarea.value = varchar_255();
 
    }
      // You can add more tests here, depending on your requirements.
}

function runCheck() {
    console.log('counting...');
    const inputElements = document.getElementsByTagName('input');
    const selectElements = document.getElementsByTagName('select');
    const textAreaElements = document.getElementsByTagName('textarea');
    let total_text = 0;
    let total_email = 0;
    let total_date = 0;
    let total_number = 0;
    let total_password = 0;
    let total_tel = 0;
    let total_form_select = 0;
    let total_radio = 0;
    let total_textarea = 0;
    let total_file = 0;

    let last_name = "xyz_4513536125131";
    
    for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
          //console.log(input.type);
        if (input.type === 'text') {
            total_text++;
        }else if (input.type === 'email') {
            total_email++;
        }else if (input.type === 'date') {
            total_date++;
        }else if (input.type === 'number') {
            total_number++;
        }else if (input.type === 'password') {
            total_password++;
        }else if (input.type === 'tel') {
            total_tel++;
        }else if (input.type === 'radio') {
          if(last_name != input.name){
            total_radio++;
            last_name = input.name;
          }else{
            last_name = "xyz_4513536125131";
             total_count--;
          }
        }else if (input.type === 'file') {
            total_file++;
        }else if (input.class === 'form-select') {
            
        }
          total_count ++;
    }
    
    for (let i = 0; i < selectElements.length; i++) {
        const select = selectElements[i];
        total_form_select++;
        total_count ++;
    }
    
    for (let i = 0; i < textAreaElements.length; i++) {
        const textarea = textAreaElements[i];
        total_count ++;
        total_textarea++;
    }
    
    $('#totalfound').text(total_count);
    $('#totaltext').text(total_text);
    $('#totalselect').text(total_form_select);
    $('#totalemail').text(total_email);
    $('#totaldate').text(total_date);
    $('#totalradio').text(total_radio);
    $('#totalpassword').text(total_password);
    $('#totaltel').text(total_tel);
    $('#totallargetext').text(total_textarea);
    $('#totalfile').text(total_file);
    $('#totalnumber').text(total_number);
      // You can add more tests here, depending on your requirements.
}

function random_cellphone(){
    let ddd = getRandomInteger(11, 96);
    let number = getRandomInteger(10000000, 90000000);
    
    return "(" +ddd + ")9" + number;
}

function random_date(){
    let day = getRandomInteger(1, 31);
    let month = getRandomInteger(1, 12);
    let year = getRandomInteger(1990, 2023);
    
    if(day <= 9){
        day = '0' + day;
    }
    if(month <= 9){
        month = '0' + month;
    }
    return year + "-" + month + "-" + day;
}

function random_name(){
    
    let random_nam = getRandomInteger(0, 9);
    const fullNames = [
      "John Smith",
      "Emma Johnson",
      "Michael Williams",
      "Olivia Brown",
      "James Davis",
      "Sophia Martinez",
      "William Anderson",
      "Ava Wilson",
      "David Taylor",
      "Isabella Thomas"
    ];
    return fullNames[random_nam];
}

function random_email(){
    
    let random_ema = getRandomInteger(0, 9);

    const emails = [
      "john.smith@example.com",
      "emma.johnson@example.com",
      "michael.williams@example.com",
      "olivia.brown@example.com",
      "james.davis@example.com",
      "sophia.martinez@example.com",
      "william.anderson@example.com",
      "ava.wilson@example.com",
      "david.taylor@example.com",
      "isabella.thomas@example.com"
    ];
    return emails[random_ema];
}

function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create_gui(){
    const box = ` <style>.drag-box {
                      position: fixed;
                      cursor: move;
                    } </style>
                      <div id="main_div" class="drag-box" style="width: 90%;max-width: 350px;height: 80vh;max-height: 400px;background: #000000;color: var(--bs-green);font-family: 'Allerta Stencil', sans-serif;border-style: solid;border-color: var(--bs-red);position: fixed;top: 0;right: 0;border-bottom-left-radius: 15px;border-top-left-radius: 15px;">
                <div class="container d-flex">
                    <p style="border-radius: 15px;padding: 10px;width: fit-content;">AUTO_TESTER_3000</p><button id="open" class="btn btn-primary" type="button" style="height: 30px;padding-top: 3px;margin-left: 110px;margin-top: 0px;border-left-color: var(--bs-pink);background: var(--bs-indigo);">X</button>
                </div>
                <div class="container d-flex" style="margin-bottom: 5px;">
                    <p style="margin-bottom: 0PX;width: fit-content;">Inputs encontrados:</p>

                    <p id="totalfound" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>
                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--TEXT:</p>
                    <p id="totaltext" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--EMAIL:</p>
                    <p id="totalemail" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--SELECT:</p>
                    <p id="totalselect" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--RADIO:</p>
                    <p id="totalradio" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--LARGE-TEXT:</p>
                    <p id="totallargetext" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--DATE:</p>
                    <p id="totaldate" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--PASSWORD:</p>
                    <p id="totalpassword" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--PHONE-NUMBER:</p>
                    <p id="totaltel" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--NUMBER:</p>
                    <p id="totalnumber" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;">
                    <p style="margin-bottom: 0px;width: fit-content;">--FILE:</p>
                    <p id="totalfile" class="not-to-test" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">50</p>
                </div>

                <div class="container d-flex" style="font-size: 14px;margin-top: 20px;">
                    <p style="margin-bottom: 0px;width: fit-content;">**LOG:</p>
                    <p id="log-text" style="margin-bottom: 0px;width: fit-content;margin-left: 10px;">xxxx</p>
                </div>

                <div class="container" style="text-align: center;margin-top: 15px;"><button class="btn" type="button" style="color: var(--bs-green);border-radius: 20px;border-style: solid;border-color: var(--bs-red);padding-top: 3px;padding-bottom: 3px;" onclick="runTest()">Start process</button></div>
            </div>`;

    document.body.innerHTML += box;
}


function dragStart(event) {
  if (isDragging) return; // Prevent multiple drag starts when already dragging
  isDragging = true;

  offsetX = event.clientX - $draggableElement.offset().left;
  offsetY = event.clientY - $draggableElement.offset().top;

  // Add event listeners for the drag events
  $(document).on('mousemove', drag);
  $(document).on('mouseup', dragEnd);
}

function drag(event) {
   if (!isDragging) return; // Prevent dragging when not initiated
    event.preventDefault();

    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    $draggableElement.css({ left: x, top: y });
}

function dragEnd(event) {
  isDragging = false;

  // Remove event listeners after dragging ends
    $(document).off('mousemove', drag);
    $(document).off('mouseup', dragEnd);
}

function varchar_255(){
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mi non libero pharetra, 
      eget rhoncus est scelerisque. Quisque eget est non velit euismod rhoncus. Vestibulum vel mi nisi. Aenean facilisis ultrices libero, 
      ut semper elit volutpat in. Curabitur elementum, quam vel convallis consectetur, neque libero pellentesque nibh, vel posuere justo purus et velit. 
      Nullam bibendum consectetur elit, sit amet lacinia turpis dignissim at. 
      Integer eget eros dolor. Vivamus sagittis, dui et semper malesuada, arcu tellus varius mauris, a convallis tortor purus non nulla. 
      Cras id efficitur odio, eu interdum elit. Vestibulum vitae mauris lectus. Nunc suscipit erat sit amet metus malesuada iaculis. 
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Sed sollicitudin, eros a scelerisque consectetur, tortor arcu tempus nulla, eget ultricies nulla purus a nunc.`;
}

$draggableElement.on('mousedown', dragStart);
