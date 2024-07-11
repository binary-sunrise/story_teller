var config = {
  accessToken:"pk.eyJ1Ijoid2FnZWgyIiwiYSI6ImNscWM4a3d0ZDAwc3Uya3NhNGIzdGxoNzUifQ.9_mFaXK7nHlQk3bkkd64Qw",
  // style: "mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
  inset: false,
  theme: "white",
  use3dTerrain: false,
  auto: false,
  title: "",
  subtitle: "",
  chapters: [
    {
      id: "chapter-0",
      alignment: "full",
      hidden: false,
      title: " ",
      description: `
            <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body style="margin: 1rem 3rem 2rem;">
          <div class="main" style="width: 70%;margin: auto;display: flex;flex-direction: column;align-items: center;">
              <div class="date-country" style="display: flex;justify-content: right;justify-content: space-between;width: 60%;">
                  <div class="date">
                      <p>JAN 17 2024</p>
                  </div>
                  <div class="country">
                      <p>LONDON, UK</p>
                  </div>
              </div>
              <div class="main-heading" style="font-size: 40px; width: 60%; font-family: 'Angie Pro Extrabold', sans-serif;">
                  <h1 style="margin: 0;">TicketsMarche</h1>
              </div>

              <div class="sub-head" style="display: flex;justify-content: space-between;width: 60%;">
                  <div class="sub-head-1">
                      <p>journey worth sharing</p>
                  </div>
                  <div class="head-2">
                      <p>CONFIDENTAL</p>
                  </div>
              </div>
          </div>
      </body>
      </html>`,
      location: {
        center: [30.84641, 28.72701],
        zoom: 3.57,
        pitch: 56.50,
        bearing: 28,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_1",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_1",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-1",
      alignment: "full",
      hidden: false,
      title: "",
      description: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
            <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
              <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
                <h3>TicketsMarche</h3>
                <p style="font-weight: 50px">Journey Worth Sharing</p>
              </div>
              <p>CONFIDENTIAL</p>
            </div>
            <hr style = "margin-top: -3.5rem"/>
            <p style="font-size: 21px">Beginning</p>
            <p style="font-size: 24px; margin-top: -18px">Egypt - 2008</p>
            <div style="height: 60dvh; align-items: flex-end; display: flex;padding-left:0px">
              <p style="font-size: 40px";>First ticketing company in MENA</p>
            </div>
            <p style="margin-top: -2.5rem">100% Self Funded</p>
          </body>
        </html>
      `,
      location: {
        center: [30.84641, 28.72701],
        zoom: 3.57,
        pitch: 56.50,
        bearing: 28,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_1",
          opacity: 1,
        },
        {
          layer: "PL_1",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_1",
          opacity: 0,
        },
        {
          layer: "PL_1",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-1a",
      alignment: "full",
      hidden: false,
      title: "",
      description: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style = "margin-top: -3.5rem"/>
            <p style="font-size: 21px">Beginning</p>
            <p style="font-size: 24px; margin-top: -18px">Egypt - Milestones</p>
            <div style="/* display: flex; */align-items: center;height: 70vh;padding-left: 0;/* width: 93px; */width: 28%;">
            <div style="background-color: white; padding: 8px; border-radius: 15px; gap: 5px;font-size:12px">
              <div style="display: flex; align-items: center;padding: 15px 15px 0px 15px;">
                <img src="images/star-05.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>2008-2012<br>Bootstrapped</span>
              </div>
              <div class="vl" style="border-left: 0.99px solid grey;width: 17px;margin-left: 29px;height: 31px;padding: 0px;"></div>
              <div style="display: flex; align-items: center;padding: 0px 15px 0px 15px;">
                <img src="images/scales-02.svg" alt="Broke Even" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span style="
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;">
                <p style="margin:0">2013</p>
                <p style="margin:0">Broke Event</p>
                </span>
              </div>
              <div class="vl" style="border-left: 0.99px solid grey;width: 17px;margin-left: 29px;height: 31px;padding: 0px;"></div>
              <div style="display: flex; align-items: center;padding: 0px 15px 0px 15px;">
                <img src="images/compass-03.svg" alt="Expanded" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>2015<br>Expanded</span>
              </div>
              <div style="border-left: 0.99px solid grey;width: 17px;margin-left: 29px;height: 31px;padding: 0px;"></div>
              <div style="display: flex; align-items: center;padding: 0px 15px 0px 15px;">
                <img src="images/globe-02.svg" alt="Gone Global" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>2017<br>Gone Global</span>
              </div>
            </div>
          </div>
          </body>
        </html>
      `,
      location: {
        center: [30.84641, 28.72701],
        zoom: 3.57,
        pitch: 56.50,
        bearing: 28,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true  ,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_1a",
          opacity: 1,
        },
        {
          layer: "PL_1a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_1a",
          opacity: 0,
        },
        {
          layer: "PL_1a",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-1b",
      alignment: "full",
      hidden: false,
      title: "",
      description: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
        </head>
        <body style="margin: 1rem 3rem 2rem">
        <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
          <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
            <h3>TicketsMarche</h3>
            <p style="font-weight: 50px">Journey Worth Sharing</p>
          </div>
          <p>CONFIDENTIAL</p>
        </div>
          <hr style = "margin-top: -3.5rem"/>
          <p style="font-size: 21px">Beginning</p>
          <p style="font-size: 24px; margin-top: -18px">Egypt - Major Achievements</p>
          <div style="display: flex; align-items: center; height: 60vh;padding-left:0">
            <div style="background-color: white;padding: 8px;border-radius: 15px;margin-top:32px;display: flex;flex-direction: column;">
              <div style="display: flex;align-items: center;padding:0px 15px !important;margin-top:20px">
                <img src="images/image 1.png" alt="Bootstrapped" style="height: 60px; width: 60px; margin-right: 5px;" />
                <span>2013<br>World Cup Trophy Tour</span>
              </div>
              <div style="display: flex;align-items: center;padding: 15px;padding: 0px 15px !important;margin-top:20px">
                <img src="images/image 2.png" alt="Bootstrapped" style="height: 60px; width: 60px; margin-right: 5px;" />
                <span>2015<br>Ice Age ticket sales world record</span>
              </div>
              <div style="display: flex;align-items: center;padding: 15px;padding: 0px 15px !important;margin-top:20px">
                <img src="images/image 3.png" alt="Bootstrapped" style="height: 60px; width: 60px; margin-right: 5px;" />
                <span>2017<br>Sold biggest one day ticketed event, <br>
                in Egypt to date ,Last Mashrou' Leila<br>
                Concert </span>
              </div>
              <div style="display: flex;align-items: center;padding: 15px;padding: 0px 15px !important;margin-top:20px">
                <img src="images/image 4.png" alt="Bootstrapped" style="height: 60px; width: 60px; margin-right: 5px;" />
                <span>2019<br>Highest sales for Disney or <br>
                Cirque Du Soleil to date in <br>
                Egypt </span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
      location: {
        center: [30.84641, 28.72701],
        zoom: 3.57,
        pitch: 56.50,
        bearing: 28,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_1b",
          opacity: 1,
        },
        {
          layer: "PL_1b",
          opacity: 1,
        },
        // {
        //   layer: "circles_chap_1",
        //   opacity: 1,
        // },
        // {
        //   layer: "lines_chap_1",
        //   opacity: 1,
        // },

      ],
      onChapterExit: [
        {
          layer: "Chapter_1b",
          opacity: 0,
        },
        {
          layer: "PL_1b",
          opacity: 0,
        },
        // {
        //   layer: "circles_chap_1",
        //   opacity: 0,
        // },
        // {
        //   layer: "lines_chap_1",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "chapter-2",
      alignment: "full",
      hidden: false,
      title: "",
      description: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
      </head>
      <body style="margin: 1rem 3rem 2rem;">
        <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
          <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
            <h3>TicketsMarche</h3>
            <p style="font-weight: 50px">Journey Worth Sharing</p>
          </div>
          <p>CONFIDENTIAL</p>
        </div>
          <hr style="margin-top: -3.5rem" />
          <p style="font-size: 21px">Expansion</p>
          <p style="font-size: 24px; margin-top: -18px">Aggregating Events - 2019</p>
          <div style="display: flex; align-items: center; height: 50vh; padding:25px 50px 25px 0px">
          <div style="background-color: white;padding: 8px; border-radius: 15px; gap: 5px;">
                  <div style="background-color: white; padding: 2px; border-radius: 15px; gap: 5px;">
                      <div style="height: 40px;display: flex;align-items: center;justify-content: center;padding: 15px;">
                          <img src="images/image 9.png" alt="Bootstrapped" style="height: 52px;w;width: 152px; margin-right: 5px;" />
                          <img src="images/image 7.png" alt="Bootstrapped" style="height: 68px;w;width: 135px; margin-right: 5px;" />
                      </div>
                      <div style="height: 40px;display: flex;align-items: center;justify-content: center;padding: 15px;">
                          <img src="images/image 5.png" alt="Bootstrapped" style="height: 66px;w;width: 192px; margin-right: 5px;" />
                          <img src="images/image 6.png" alt="Bootstrapped" style="height: 41px;w;width: 125px; margin-right: 5px;" />
                      </div>
                      <div style="height: 40px;display: flex;align-items: center;justify-content: center;padding: 15px;">
                          <img src="images/image 8.png" alt="Bootstrapped" style="height: 34px;w;width: 135px; margin-right: 5px;" />
                      </div>
                  </div>
              </div>
          </div>

          <div style="height: 5dvh; align-items: flex-end; display: flex;padding-left:0px">
              <p style="font-size: 40px";>Forming Partnerships, Jvs and Mergers</p>
            </div>
            <p style="margin-top: -2.5rem">Going Beyond Egyptian Borders</p>
          </div>
      </body>
      </html>
        `,
      location: {
        center: [24.20880, 37.70356],
        zoom: 3.28,
        pitch: 37,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_2",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_2",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-3",
      alignment: "full",
      hidden: false,
      title: "",
      description:
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style="margin-top: -3.5rem" />
            <p style="font-size: 21px">Expansion</p>
            <p style="font-size: 24px; margin-top: -18px">UK -2023</p>
            <div style="display: flex; align-items: center; height: 70dvh;padding-left:0px">
            <div style="background-color: white;width: 250px;padding: 8px;border-radius: 15px;">
                2023 we started our English endeavour <br>
                by JVing with one of the biggest <br>
                ticketing platforms in UK in terms of  <br>
              <div style="display: flex;align-items: center;padding: 3px;justify-content: space-evenly;">
                <img src="images/Football.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>Football</span>
                <img src="images/Rugby.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-left: 10px; margin-right: 5px;" />
                <span>Rugby</span>
              </div>
              <div style="display: flex;align-items: center;padding: 3px;justify-content: space-evenly;">
                <img src="images/Ice_hockey.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>Ice Hockey</span>
                <img src="images/Hockey.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-left: 10px; margin-right: 5px;" />
                <span>Cricket</span>
              </div>
              <div style="display: flex;align-items: center;padding: 6px;">
                  <img src="images/Equestrian.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>Equestrain Activities</span>
              </div>

              while also reinforcing our system <br>
              through <br>
              <div style="display: flex; align-items: center; padding: 3px;">
                  <img src="images/ticket-01.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>Ticket office</span>
              </div>
              <div style="display: flex; align-items: center; padding: 3px;">
                  <img src="images/scan.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>Access Control & Scanning</span>
              </div>
              <div style="display: flex; align-items: center; padding: 3px;">
                  <img src="images/shield-zap.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>Security & Perfomance</span>
              </div>
              <div style="display: flex; align-items: center; padding: 3px;">
                  <img src="images/certificate-02.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>GDPR Compliance</span>
              </div>
              <div style="display: flex; align-items: center; padding: 3px;">
                  <img src="images/face-smile.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                  <span>24/7 Support</span>
              </div>
            </div>
          </body>
        </html>`,
      location: {
        center: [6.65379, 43.26357],
        zoom: 3.23,
        pitch: 39,
        bearing: 22.99,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_3",
          opacity: 1,
        },
        {
          layer: "PL_3",
          opacity: 1,
        },

      ],
      onChapterExit: [
        {
          layer: "Chapter_3",
          opacity: 0,
        },
        {
          layer: "PL_3",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-3a",
      alignment: "full",
      hidden: false,
      title: "",
      description:
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style="margin-top: -3.5rem" />
            <p style="font-size: 21px">Expansion</p>
            <p style="font-size: 24px; margin-top: -18px">UK -2023</p>
            <div style="display: flex;align-items: center;height: 70dvh;padding-left: 0px;">
              <div style="background-color: white;width: 250px;padding: 10px;border-radius: 15px;height: 280px;">
                  We are working with partners focused <br>
                  on fan engagement and business <br>
                  expansion <br>
                <div style="display: flex;align-items: center;padding: 5px;justify-content: space-between;">
                  <img src="images/image 18.png" alt="Bootstrapped" style="height: 50px; width: 50px;margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 19.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 20.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                </div>
                <div style="display: flex;align-items: center;padding: 5px;justify-content: space-between;">
                  <img src="images/image 21.png" alt="Bootstrapped" style="height: 50px; width: 50px;margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 22.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 23.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                </div>
                <div style="display: flex;align-items: center;padding: 5px;justify-content: space-between;">
                  <img src="images/image 24.png" alt="Bootstrapped" style="height: 50px; width: 50px;margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 25.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 26.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                </div>
              </div>
            </div>
          </body>
        </html>`,
      location: {
        center: [6.65379, 43.26357],
        zoom: 3.23,
        pitch: 39,
        bearing: 22.99,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_3a",
          opacity: 1,
        },
        {
          layer: "PL_3a",
          opacity: 1,
        },

      ],
      onChapterExit: [
        {
          layer: "Chapter_3a",
          opacity: 0,
        },
        {
          layer: "PL_3a",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-3b",
      alignment: "full",
      hidden: false,
      title: "",
      description:
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body style="margin: 1rem 3rem 2rem;">
        <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
          <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
            <h3>TicketsMarche</h3>
            <p style="font-weight: 50px">Journey Worth Sharing</p>
          </div>
          <p>CONFIDENTIAL</p>
        </div>
          <hr style="margin-top: -3.5rem" />
          <p style="font-size: 21px">Expansion</p>
          <p style="font-size: 24px; margin-top: -18px">UK -2023</p>
          <div style="background-color: white;width: 300px;padding: 10px;border-radius: 15px;margin-top: 80px;">
          With a client list including <br>
            <div style="display: flex;align-items: center;padding: 5px;height: 100px;">
                <p style="font-size: 50px; padding: 5px">51</p>
                <p>Race courses across UK,<br> Ireland, and US, 6 Million tickets<br> per annum</p>
            </div>
            <div style="display: flex;align-items: center;padding: 5px;height: 100px;">
                <p style="font-size: 50px; padding: 5px"">53</p>
                <p>Professional football clubs<br> across 5 Leagues, including English <br>& Scottish Professional Football <br>League clubs</p>
            </div>
            <div style="display: flex;align-items: center;padding: 5px;height: 100px;">
                <p style="font-size: 50px; padding: 5px"">45</p>
                <p>Outdoor shows including the three<br> largest agricultural events on<br> the island of Ireland</p>
            </div>
          </div>
        </body>
      </html>`,
      location: {
        center: [6.65379, 43.26357],
        zoom: 3.23,
        pitch: 39,
        bearing: 22.99,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_3b",
          opacity: 1,
        },
        {
          layer: "PL_3b",
          opacity: 1,
        },

      ],
      onChapterExit: [
        {
          layer: "Chapter_3b",
          opacity: 0,
        },
        {
          layer: "PL_3b",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-4",
      alignment: "full",
      hidden: false,
      title: "",
      description:
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style="margin-top: -3.5rem" />
            <p style="font-size: 21px">Expansion</p>
            <p style="font-size: 24px; margin-top: -18px">Presence in Europe</p>
            <div style="background-color: white;width: 300px;padding: 10px;border-radius: 15px;margin-top: 100px;">
              This partnership resulted in TM having<br>
              <div style="display: flex;align-items: center;padding: 5px;height: 70px;">
                  <p style="font-size: 45px; padding: 5px">70%</p>
                  <p>of Slovenia's Tourism Tickets</p>
              </div>
              <div style="display: flex;align-items: center;padding: 5px;height: 70px;">
                  <p style="font-size: 45px; padding: 5px"">50k</p>
                  <p>Seat venue for FC Red Star Serbia</p>
              </div>
              <div style="display: flex;align-items: center;padding: 5px;height: 70px;">
                  <p style="font-size: 45px; padding: 5px"">38k</p>
                  <p>Seat stadium for FC Hajduk Spli Croatia</p>
              </div>
            </div>
          </body>
        </html>`,
      location: {
        center: [25.04480, 33.51156],
        zoom: 3.32,
        pitch: 34.13,
        bearing: -15.12,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_4",
          opacity: 1,
        },
        {
          layer: "PL_4",
          opacity: 1,
        },

      ],
      onChapterExit: [
        {
          layer: "Chapter_4",
          opacity: 0,
        },
        {
          layer: "PL_4",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-4a",
      alignment: "full",
      hidden: false,
      title: "",
      description:
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body style="margin: 1rem 3rem 2rem;">
        <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
          <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
            <h3>TicketsMarche</h3>
            <p style="font-weight: 50px">Journey Worth Sharing</p>
          </div>
          <p>CONFIDENTIAL</p>
        </div>
          <hr style="margin-top: -3.5rem" />
          <p style="font-size: 21px">Expansion</p>
          <p style="font-size: 24px; margin-top: -18px">Presence in Europe</p>
          <div style="background-color: white;width: 300px;padding: 10px;border-radius: 15px;margin-top: 100px;">
              This partnership resulted in TM having<br>
              <div style="display: flex; align-items: center; padding: 5px;">
                <img src="images/coins-stacked-04.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>More Cost-Efficient Development</span>
              </div>
              <div style="display: flex; align-items: center; padding: 5px;">
                <img src="images/refresh-ccw-05.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>Having Constant Plan B</span>
              </div>
              <div style="display: flex; align-items: center; padding: 5px;">
                <img src="images/coins-swap-02.svg" alt="Bootstrapped" style="height: 30px; width: 30px; margin-right: 5px;" />
                <span>Increasing number of tickets and <br>
                being able to take over a country fully <br>
                if we decide to lower cost through <br>
                utilizing Egypt based back office <br>
                teams <br></span>
              </div>
          </div>
        </body>
      </html>`,
      location: {
        center: [25.04480, 33.51156],
        zoom: 3.32,
        pitch: 34.13,
        bearing: -15.12,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_4a",
          opacity: 1,
        },
        {
          layer: "PL_4a",
          opacity: 1,
        },

      ],
      onChapterExit: [
        {
          layer: "Chapter_4a",
          opacity: 0,
        },
        {
          layer: "PL_4a",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-5",
      alignment: "full",
      hidden: false,
      title: "",
      description:
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style="margin-top: -3.5rem" />
            <p style="font-size: 21px">Expansion</p>
            <p style="font-size: 24px; margin-top: -18px">France & Africa - 2023</p>
            <div style="background-color: white;width: 290px;padding: 10px;border-radius: 15px;margin-top: 100px;">
                In 2023 we started the negotiations and<br />
                we are in the process of launching our<br />
                French company in partnership with<br />
                Vivendi Sports that's aiming to replace <br>
                <b>See Tickets</b>
              <div style="display: flex; align-items: center; padding: 5px;">
                <p style="font-size: 20px">TicketsMarche + </p>
                <img src="images/image 27.png" alt="Bootstrapped" style="height: 50px;w;width: 110px;argin-left: 10px;margin-right: 5px;" />
              </div>
            </div>
          </body>
        </html>`,
      location: {
        center: [10.81847, 37.25931],
        zoom: 3.57,
        pitch: 44.50,
        bearing: 15.98,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_5",
          opacity: 1,
        },
        {
          layer: "PL_5",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_5",
          opacity: 0,
        },
        {
          layer: "PL_5",
          opacity: 0,
        },
      ],
    },

    {
      id: "chapter-6",
      alignment: "full",
      hidden: false,
      title: "",
      description:
        `<!DOCTYPE html>
 
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: 1rem 3rem 2rem;">
          <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
          </div>
            <hr style="margin-top: -3.5rem" />
            <p style="font-size: 21px">Expansion</p>
            <p style="font-size: 24px; margin-top: -18px">France & Africa - 2023</p>
            <div style="background-color: white;width: 311px;padding: 10px;border-radius: 15px;margin-top: 100px;">
              <p> This company is aiming at being the African Ticketing<br />
                system. we are in last phase discussions of sealing<br />
                deals with most of the African leagues and we have<br />
                secured the AFCON and finalizing with the BAL
              </p>
              <div style="display: flex; align-items: center; padding: 5px;">
                  <img src="images/image 28.png" alt="Bootstrapped" style="height: 50px; width: 50px;margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 29.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 30.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 31.png" alt="Bootstrapped" style="height: 50px; width: 50px;margin-left: 10px; margin-right: 5px;" />
              </div>
              <div style="display: flex; align-items: center; padding: 5px;">
                  <img src="images/image 32.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 33.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 34.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
                  <img src="images/image 35.png" alt="Bootstrapped" style="height: 50px; width: 50px; margin-left: 10px; margin-right: 5px;" />
              </div>
            </div>
          </body>
        </html>`,
      
      location: {
        center: [-4.72846, 29.10743],
        zoom: 2.53,
        pitch: 23.37,
        bearing: 39.60,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_6",
          opacity: 1,
        },
        {
          layer: "PL_6",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_6",
          opacity: 0,
        },
        {
          layer: "PL_6",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-7",
      alignment: "full",
      hidden: false,
      title: "",
      description:`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body style="margin: 1rem 3rem 2rem;">
        <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;">
            <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
              <h3>TicketsMarche</h3>
              <p style="font-weight: 50px">Journey Worth Sharing</p>
            </div>
            <p>CONFIDENTIAL</p>
        </div>
          <hr style="margin-top: -3.5rem" />
          <p style="font-size: 21px;";>Future</p>
          <p style="font-size: 24px; margin-top: -18px;">Middle East & Black Sea</p>
          <div style="background-color: white;width: 270px;padding: 10px;border-radius: 15px;margin-top: 100px;">
            <p style="background- width: fit-content; padding: 10px; border-radius: 15px;">
              We are a part of the NextGen initiative,<br />
              aiming and excelling to being present in <br />
              all Middle East countries, with the <br />
              addition of the Black Sea territory
            </p>
          </div>
        </body>
      </html>`,
      location: {
        center: [31.56543, 29.11581],
        zoom: 3.12,
        pitch: 34.13,
        bearing: 22.40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrcd835v00a701qt3q7ifsil",
      onChapterEnter: [
        {
          layer: "Chapter_7",
          opacity: 1,
        },
        {
          layer: "PL_7",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_7",
          opacity: 0,
        },
        {
          layer: "PL_7",
          opacity: 0,
        },
      ],
    },
    {
        id: "chapter-8",
        alignment: "full",
        hidden: false,
        title: "",
        description:`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="margin: calc(1rem + 40vh) 3rem 2rem;">
          <div style ="color:white">
              <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;color: white;">
                <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
                    <h3>TicketsMarche</h3>
                    <p style="font-weight: 50px">Journey Worth Sharing</p>
                  </div>
                  <p>CONFIDENTIAL</p>
                </div>
                  <hr style="margin-top: -3.5rem;"/>
                  <p style="font-size: 21px">Joining Forces</p>
                  <p style="font-size: 24px; margin-top: -18px">TM + Webook</p>
                <div style="height: 60dvh; align-items: flex-end; display: flex;padding-left:0px">
                  <p style="font-size: 40px";>Global Presence</p>
                 </div>
                <p style="margin-top: -2.5rem">Projection Q4 2025</p>
              </div>
            </div>
          </body>
        </html>`,
        location: {
          center: [15.93027, 24.53060],
          zoom: 2.03,
          pitch: 18.75,
          bearing: 28,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
        callback: "",
        mapStyle:"mapbox://styles/wageh2/clrca1gzw00a101qtb3jy8bjh",
        onChapterEnter: [
          {
            layer: "Chapter_8",
            opacity: 1,
          },
          {
            layer: "PL_8",
            opacity: 1,
          },
        ],
        onChapterExit: [
          {
            layer: "Chapter_8",
            opacity: 0,
          },
          {
            layer: "PL_8",
            opacity: 0,
          },
        ],
      },
    {
      id: "chapter-8a",
      alignment: "full",
      hidden: false,
      title: "",
      description:
       `<!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Document</title>
         </head>
         <body style="margin: calc(1rem + 40vh) 3rem 2rem;">
         <div style ="color:white">
         <div style="display: flex;align-items: center;justify-content: space-between;padding-left: 0px;color: white;">
           <div style="display: flex; align-items: center; gap: 1rem;padding-left:0px;">
               <h3>TicketsMarche</h3>
               <p style="font-weight: 50px">Journey Worth Sharing</p>
             </div>
             <p>CONFIDENTIAL</p>
           </div>
             <hr style="margin-top: -3.5rem;"/>
             <p style="font-size: 21px">Joining Forces</p>
             <p style="font-size: 24px; margin-top: -18px">TM + Webook</p>
            <div style="height: 60dvh; align-items: flex-end; display: flex;padding-left:0px">
             <p style="font-size: 40px";>Global Presence</p>
            </div>
           <p style="margin-top: -2.5rem">Projection Q4 2025</p>
         </div>
       </div>
       </body>
       </html>`,
      location: {
        center: [15.93027, 24.53060],
        zoom: 2.03,
        pitch: 18.75,
        bearing: 28,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      mapStyle:"mapbox://styles/wageh2/clrca1gzw00a101qtb3jy8bjh",
      onChapterEnter: [
        {
          layer: "Chapter_8a",
          opacity: 1,
        },
        {
          layer: "PL_8a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Chapter_8a",
          opacity: 0,
        },
        {
          layer: "PL_8a",
          opacity: 0,
        },
      ],
    },
  ],
};