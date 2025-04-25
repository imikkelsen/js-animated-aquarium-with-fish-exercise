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
            className: "redfish2",
            art: "Rød Snapper (ung)",
            alder: "1 år",
            længde: "Op til 60 cm",
            vægt: "Op til 2 kg"
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
          },
          {
            className: "codfish2",
            art: "Torsk 2",
            alder: "4 år",
            længde: "Op til 140 cm",
            vægt: "Op til 11 kg"
          },
          {
            className: "codfish3",
            art: "Torsk 3",
            alder: "3,5 år",
            længde: "Op til 130 cm",
            vægt: "Op til 10 kg"
          },
          {
            className: "codfish4",
            art: "Torsk 4",
            alder: "3 år",
            længde: "Op til 120 cm",
            vægt: "Op til 8 kg"
          },
          {
            className: "codfish5",
            art: "Torsk 5",
            alder: "2,5 år",
            længde: "Op til 110 cm",
            vægt: "Op til 6 kg"
          },
          {
            className: "piratefish",
            art: "Piratfisk",
            alder: "2 år",
            længde: "Op til 60 cm",
            vægt: "Ukendt (meget farlig!)"
          },
          {
            className: "colorfulfish",
            art: "Regnbuefisk",
            alder: "1,5 år",
            længde: "Op til 12 cm",
            vægt: "Op til 200 gram"
          },
          {
            className: "yellowgreyfish",
            art: "Gulgrå Revfisk",
            alder: "2 år",
            længde: "Op til 15 cm",
            vægt: "Op til 300 gram"
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


  // Hide tooltip on mouse leave
  anchor.addEventListener("mouseleave", () => {
    anchorTooltip.style.opacity = "0";
  });

  // Toggle audio playback on click
  anchor.addEventListener("click", () => {
    audio.muted = false;
    audio.volume = 0.5;

    if (audio.paused) {
      audio.play().catch(err => {
        console.warn("Playback failed:", err);
      });
    } else {
      audio.pause();
    }
  });

  // Show fish info tooltip on click
  fishInfo.forEach((fish) => {
    const fishElems = document.querySelectorAll("." + fish.className);

    fishElems.forEach((el) => {
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