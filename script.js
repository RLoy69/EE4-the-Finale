///مرحبن

window.addEventListener("beforeunload", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
const directLinks = {
  /////lectures///////////

  communicationlectures:
    "https://drive.google.com/file/d/1Qkwd3_XiQnkcAuKJ8ydCIrLqrEYc1dAT/view?usp=sharing",

  controllectures:
    "https://drive.google.com/file/d/1ap2RvGXTtl_XHE-DC6CbYz4osPepxtZ1/view?usp=sharing",

  dsplectures:
    "https://drive.google.com/file/d/1_gzZOg9l1kNooCNcL-0ET_1LhYlj-AFr/view?usp=drive_link",

  computerlectures:
    "https://drive.google.com/file/d/12JhaAiVKfFWULeEQa_q4kESZ57y4enP0/view?usp=sharing",

  electroniclectures:
    "https://drive.google.com/file/d/1cIkEicL-Cy-c06DqZwBGRZqDnmnxmqAS/view?usp=sharing",

  powerElectronicslectures:
    "https://drive.google.com/file/d/1tknJiBiaISi2a0ukHgmf2v7OO2iqe9KL/view?usp=sharing",

  ///sheetsssss//////////

  dspsheet:
    "https://drive.google.com/file/d/1G2t65D3KLp-6lzWsy4SYKsZsyg1JRwxE/view?usp=sharing",

  electronicsheet:
    "https://drive.google.com/file/d/1CRiiLQplywkfLi6n0U6QPKsfr5RVvGQT/view?usp=sharing",

  controlsheet:
    "https://drive.google.com/file/d/1R_4rm0xdNsod0ioImdiQKNyN5BLczdmB/view?usp=sharing",

  powerElectronicssheet:
    "https://drive.google.com/file/d/18qI_TiOeQW1sOf23Q7Qk7KU5BcIHsaW5/view?usp=sharing",

  powerSystemssheet:
    "https://drive.google.com/file/d/1Z6x459hsyKs2C0EjNDapZvuIkNaFoTLf/view?usp=sharing",

  communicationsheet:
    "https://drive.google.com/file/d/1YC09jEgSE3yik1tHtrWh9LOdU0hlI65C/view?usp=sharing",

  ///quizes & finals ///////////

  computerquestions:
    "https://drive.google.com/file/d/15MWPU3n_wIK5LqTTJWfbbvsmrH5SPZ67/view?usp=sharing",

  powerElectronicsquestions:
    "https://drive.google.com/file/d/1GBjzA3D1UTX83AqqdN1ID1k8SdK3t4nW/view?usp=sharing",

  ///LINKS-source///////

  powerElectronicssauce:
    "https://drive.google.com/file/d/1_ZU7XXYU59lZWxdbecmK_iweiMvEEXeC/view?usp=sharing",

  powerSystemssauce:
    "https://drive.google.com/file/d/1lbKwc7S8FxkhAqJDXty58UEXQeBZi7Ui/view?usp=sharing",

  ///LABs//////////////

  communicationLab:
    "https://drive.google.com/file/d/1KGfL9H9KO9t5vZX-Y_U5VnBFgv4ZQrHr/view?usp=sharing",

  machineLab:
    "https://drive.google.com/file/d/1XOqOf6zWyQkfHXxcqfxTnGCwb2nFcOZw/view?usp=sharing",

  powerElectronicsLab:
    "https://drive.google.com/file/d/1Xz94529HbStbqIsV5lVrgiKgr5343xGG/view?usp=sharing",
};
//functions//////////////

//mouse hover animation

$(".mx-auto").mouseenter(function () {
  $(".mx-auto").not(this).addClass("blur shrink");
  $(this).addClass("enlarge");
});
$(".mx-auto").mouseleave(function () {
  $(".mx-auto").removeClass("blur shrink enlarge");
});

//clicking buttons to enter a lecture

// ...

// Clicking buttons to enter a lecture
$(".mainBtn").click(function () {
  let clickedBtn = $(this).attr("class").split(" ")[0]; // Getting the unique class for each button

  // Check if the second page is already open
  if (!isSecondPageOpen) {
    // Disable scrolling on the first page
    $("body").css("overflow", "hidden");

    // Open the second page
    $(".secondary-page").css("display", "block");
    isSecondPageOpen = true;

    // Unbind the click events on the main page
    $(".go-back").off("click");
    $(".direct-pdf").off("click");

    // Go back functionality for the second page
    $(".go-back").click(function () {
      // Remove the overflow: hidden to enable scrolling on the first page
      $("body").css("overflow", "auto");

      $(".secondary-page").css("display", "none");
      isSecondPageOpen = false;
    });

    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        $(".go-back").click();
      }
    });

    // Second-page direct PDFs button
    $(".direct-pdf").click(function () {
      let onClick = $(this).attr("class").split(" ")[1];
      let LinkName = clickedBtn + onClick;

      if (directLinks[LinkName]) {
        window.open(directLinks[LinkName], "_blank");
      } else {
        alert("ماعندي فايلاته");
      }
    });
  }
});

// ...
let isSecondPageOpen = false;
// Similar code for the lab buttons
$(".labBtn").click(function () {
  // Check if the second page is already open
  if (!isSecondPageOpen) {
    // Disable scrolling on the first page
    $("body").css("overflow", "hidden");

    $(".lab-page").css("display", "block");
    isSecondPageOpen = true;

    $(".go-back").off("click");
    $(".direct-pdf").off("click");

    $(".go-back").click(function () {
      // Remove the overflow: hidden to enable scrolling on the first page
      $("body").css("overflow", "auto");

      $(".lab-page").css("display", "none");
      isSecondPageOpen = false;
    });

    $(".direct-pdf").click(function () {
      let LinkName = $(this).attr("class").split(" ")[1];
      if (directLinks[LinkName]) {
        window.open(directLinks[LinkName], "_blank");
      } else {
        alert("ماعندي فايلاته");
      }
    });
  }
});
let sound = null; // Declare sound variable outside the click event handler

$(".logo").click(function () {
  if (sound && !sound.paused) {
    return; // Don't do anything if the sound is already playing
  }

  sound = new Audio("y2mate.com - Satoru Gojo  Yowai Mo.mp3");

  sound.addEventListener("ended", function () {
    // Sound has finished playing; re-enable the button
    $(".logo").prop("disabled", false);
  });

  sound.play();

  // Disable the button to prevent further clicks
  $(".logo").prop("disabled", true);
});
