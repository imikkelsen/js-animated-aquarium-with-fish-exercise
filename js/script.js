"use strict";

const fishInfo = [
        {
          className: "redfish",
          art: "Rød Snapper",
          alder: "2 år",
          længde: "Op til 100 cm",
          vægt: "optil 4 kg",
        },
        {
          className: "bluefish",
          art: "Blåfisk",
          alder: "3 år",
          længde: "Op til 120 cm",
          vægt: "Op til 14 kg",
        },
        {
          className: "tropicalfish",
          art: "papegøjefisk",
          alder: "1 år",
          længde: "Op til 41 cm",
          vægt: "Op til 40 kg",
        },
        {
            className: "orangefish",
            art: "Orange Koralrevsfisk",
            alder: "1,5 år",
            længde: "Op til 11 cm",
            vægt: "op til 250 gram",
          },
          {
            className: "flatbluefish",
            art: "Blå Kirurgfisk",
            alder: "3 år",
            længde: "Op til 30 cm",
            vægt: "Op til 600 gram",
          },
          {
            className: "codfish",
            art: "Torsk",
            alder: "4 år",
            længde: "Op til 150 cm",
            vægt: "op til 12 kg",
          }
    ];



document.addEventListener("DOMContentLoaded", function () {

    const anchor = document.querySelector(".anchor");
    const anchorTooltip = document.getElementById("anchor-tooltip");
    const audio = document.querySelector("audio");
    const tooltip = document.getElementById("tooltip");


    anchor.addEventListener("mouseenter", () => {
    const rect = anchor.getBoundingClientRect();
    anchorTooltip.style.opacity = "1";
    anchorTooltip.style.left = `${rect.left + 60}px`;
    anchorTooltip.style.top = `${rect.top - 30}px`;

    if (audio.paused) {
        anchorTooltip.innerText = "Klik for at starte musikken";
    } else {
        anchorTooltip.innerText = "Klik for at stoppe musikken";
    }
    });


    anchor.addEventListener("mouseleave", () => {
        anchorTooltip.style.opacity = "0";
    });

    anchor.addEventListener("click", () => {
        audio.muted = false;
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });


      fishInfo.forEach((fish) => {
        const fishElem = document.querySelectorAll("." + fish.className);
      
        fishElem.forEach((el) => {
            el.addEventListener("click", (e) => {
              tooltip.innerHTML = `
                <strong>${fish.art}</strong><br>
                Alder: ${fish.alder}<br>
                Længde: ${fish.længde}<br>
                Vægt: ${fish.vægt}
              `;
              tooltip.style.top = `${e.pageY - 40}px`;
              tooltip.style.left = `${e.pageX + 20}px`;
              tooltip.style.opacity = "1";
              tooltip.style.fontSize = "1.05rem";

            setTimeout(() => {
              tooltip.style.opacity = "0";
            }, 3000);
          });
        });
      });


      


    









});