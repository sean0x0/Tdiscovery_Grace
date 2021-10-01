
window.onload = function () {
  const windowTop = $(window).scrollTop();
  $(".list-bullet ul li").removeClass("hollow");
  $(".map section").removeClass("read");
  $("body, html").animate({ scrollTop: windowTop }, 1000); //頁面跳回頂部

  var timer

  $(window).on("resize", function () {
    
      window.clearTimeout(timer)
      timer = window.setTimeout(function () {
        $(".list-bullet ul li").removeClass("hollow");
      $(".map section").removeClass("read");
      }, 100)
      
    


  });

  //修正花魁車次選單底線樣式
  if ($("#orianTab > a").hasClass("active")) {
    $("#orianTab").addClass("orian-btline");

    $("#orian-tab").css("border", "0");
    $("#orianTab").removeClass("brown-underline");
  } else {
    $("#orianTab").removeClass("orian-btline");

    $("#orianTab").addClass("brown-underline");
    $("#orianTab").removeClass("orian-btline");
  }

  //線上探索分類


  const renova = [//高鐵創生
    {
      number: "01",
      img: [
        {
          l: "./img/renova/01/0101_1x.jpg",
          m: "./img/renova/01/0101_2x.jpg",
          h: "./img/renova/01/0101_3x.jpg"
        },
        {
          l: "./img/renova/01/0102_1x.jpg",
          m: "./img/renova/01/0102_2x.jpg",
          h: "./img/renova/01/0102_3x.jpg"
        },
        {
          l: "./img/renova/01/0103_1x.jpg",
          m: "./img/renova/01/0103_2x.jpg",
          h: "./img/renova/01/0103_3x.jpg"
        }
      ],
      map: "./img/renova/01/mapA_01.svg",
      venue: "A",
      title: "輪轉世紀 — 軌跡百年",
      desciption:
        "火車的發明，是人類進步史的一部分，為了讓生活過得更便利，動力的改變從人力、獸力、到了蒸汽機的出現，開始了鐵道（火車）的生涯，發明家所製造出的這些金屬大怪物們，是導向我們進入進步社會的元素之一。台灣高鐵探索館特別於入館處打造充滿科技性與互動性的藍晒圖展示牆，以蒸汽火車、電力火車、柴電火車及軌道等元素，製作成動態多媒體，投影於入口空間，來賓可藉由圖像的觸碰，來一窺世界火車進化論。"
    },
    {
      number: "02",
      img: [
        {
          l: "./img/renova/02/0201_1x.jpg",
          m: "./img/renova/02/0201_2x.jpg",
          h: "./img/renova/02/0201_3x.jpg"
        },
        {
          l: "./img/renova/02/0202_1x.jpg",
          m: "./img/renova/02/0202_2x.jpg",
          h: "./img/renova/02/0202_3x.jpg"
        }
      ],
      map: "./img/renova/02/mapA_02.svg",
      venue: "A",
      title: "從台灣鐵道BOT史說起",
      desciption:
        "許多國家鐵道的開始，多起於煤礦的運送，台灣也不例外。清代福建巡撫丁日昌因軍事需求而開採煤礦，在基隆八斗子建立一段長2公里的鐵道，是台灣最早的鐵路。直到劉銘傳接任台灣第一任巡撫後，才正式建造可供人員乘坐的鐵路。日治時期，重新鋪設鐵道與拓展路線，從基隆到高雄的鐵路貫通，方便了日軍的運行與民間物品的流通。戰後，歷經鐵路柴油化、電氣化，於1992年完成環島鐵路網。而台灣高速鐵路也在2007年，正式成為台灣鐵道一份子。"
    },
    {
      number: "03",
      img: [
        {
          l: "./img/renova/03/0301_1x.jpg",
          m: "./img/renova/03/0301_2x.jpg",
          h: "./img/renova/03/0301_3x.jpg"
        }
      ],
      map: "./img/renova/03/mapA_03.svg",
      venue: "A",
      title: "台灣高鐵的創生 (1996~2000)",
      desciption:
        "台灣高鐵的創生，是台灣鐵道的一大革命，以嶄新的技術，縮短了往返台灣南北的交通時間，也拉近了人與人之間的距離。台灣高鐵公司於1998年5月正式成立，高速鐵路的建造，除了政府大力支持，還包括大陸工程、太平洋電線電纜集團、長榮集團、東元集團及富邦集團等五大原始股東，投資組成「台灣高鐵聯盟」，促使台灣高鐵興建工程於2000年開工，讓台灣邁向世界的新潮流，也推動台灣的第三次鐵道空間大革命。"
    },
    {
      number: "04",
      img: [
        {
          l: "./img/renova/04/0401_1x.jpg",
          m: "./img/renova/04/0401_2x.jpg",
          h: "./img/renova/04/0401_3x.jpg"
        },
        {
          l: "./img/renova/04/0402_1x.jpg",
          m: "./img/renova/04/0402_2x.jpg",
          h: "./img/renova/04/0402_3x.jpg"
        }
      ],
      map: "./img/renova/04/mapA_04.svg",
      venue: "A",
      title: "高鐵工程之最 (2000~2006)",
      desciption:
        "在台灣高鐵興建期間，採取了許多當時在台灣從未應用過的工程工法與技術，例如:挖掘隧道的「新奧工法」與第一次引進橋樑工程中的「全跨預鑄吊裝工法」等，也整合國際出色的廠商及人才，提供台灣本地營造廠學習國外精湛技術和管理模式，滋養台灣營造技術的茁壯與躍進，並成就高鐵行車安全的基石。來賓可藉由本區寓教於樂的拍照互動裝置「安全裝備確認鏡」，來了解台灣高鐵對於工程安全的重視，同時一窺興建工法的品質及內涵。"
    },
    {
      number: "05",
      img: [
        {
          l: "./img/renova/05/0501_1x.jpg",
          m: "./img/renova/05/0501_2x.jpg",
          h: "./img/renova/05/0501_3x.jpg"
        }
      ],
      map: "./img/renova/05/mapA_05.svg",
      venue: "A",
      title: "台灣永續生態的守護",
      desciption:
        "台灣高鐵建設理念，以尊重人文、生態與自然為首要考量，興建過程中採取最先進及對環境影響最微小的興建規劃與技術，讓高鐵沿線上各種生態與人文及信仰，得以獲得最深切的守護與保存。例如：台南官田的水雉、林口的流蘇樹、新竹300年的老樟樹等復育與維護工作成果，充分展現出高鐵科技與台灣人文生態共存共榮的美景。"
    },
    {
      number: "06",
      img: [
        {
          l: "./img/renova/06/0601_1x.jpg",
          m: "./img/renova/06/0601_2x.jpg",
          h: "./img/renova/06/0601_3x.jpg"
        },
        {
          l: "./img/renova/06/0602_1x.jpg",
          m: "./img/renova/06/0602_2x.jpg",
          h: "./img/renova/06/0602_3x.jpg"
        }
      ],
      map: "./img/renova/06/mapA_06.svg",
      venue: "A",
      title: "探索鐵道工程",
      desciption:
        "台灣高鐵承攬商於軌道施工期間，打造專用的巡軌腳踏車，擔任「守衛高鐵」的重責大任，以防堵宵小覬覦高鐵電纜線與鋼材，亦是高鐵工程師進行路線巡視的最佳交通工具。巡軌腳踏車最大的特色，就是輪寬距與鐵軌等寬，宛如蜘蛛腳般的四個輪子，故而俗稱「蜘蛛車」。本區實際模擬台灣高鐵軌道，背景彩繪日出日落景色，呈現巡軌腳踏車作業時的時空變換，讓來賓回顧高鐵興建期的歷史樣貌。"
    },
    {
      number: "07",
      img: [
        {
          l: "./img/renova/07/0701_1x.jpg",
          m: "./img/renova/07/0701_2x.jpg",
          h: "./img/renova/07/0701_3x.jpg"
        }
      ],
      map: "./img/renova/07/mapA_07.svg",
      venue: "A",
      title: "鋪天蓋地 — 軌道路床形式",
      desciption:
        "台灣高鐵因為沿線地理及地質環境的需求，必須「適得其地」選用不同的軌道工程技術來鋪設鐵路，以確保行車安全，包括：基地與左營車站所使用的道碴軌道、配合轉轍器設計布設在各車站內的德式軌道版、用在台北與新北市區地下段，防止振動影響附近住戶的LVT低振動軌道、以及全線主要使用達80.9%的日本版式軌道J-SLAB。"
    },
    {
      number: "08",
      img: [
        {
          l: "./img/renova/08/0801_1x.jpg",
          m: "./img/renova/08/0801_2x.jpg",
          h: "./img/renova/08/0801_3x.jpg"
        },
        {
          l: "./img/renova/08/0802_1x.jpg",
          m: "./img/renova/08/0802_2x.jpg",
          h: "./img/renova/08/0802_3x.jpg"
        }
      ],
      map: "./img/renova/08/mapA_08.svg",
      venue: "A",
      title: "安全告示牌 — 守護工安的共通語言",
      desciption:
        "台灣高鐵興建期，整合來自世界各國的工程人員，參與此項重大的交通建設，而分布於各地的工程基地，可見多國語言的安全告示牌，成為這些異鄉人在工程基地上溝通、傳達與交流的媒介。本區陳列各式來自不同國籍團隊所使用的安全告示牌， 來賓可以看到不同族群、國情及文化，所展現的不同美學風格，甚至是幽默感。"
    },
    {
      number: "09",
      img: [
        {
          l: "./img/renova/09/0901_1x.jpg",
          m: "./img/renova/09/0901_2x.jpg",
          h: "./img/renova/09/0901_3x.jpg"
        },
        {
          l: "./img/renova/09/0902_1x.jpg",
          m: "./img/renova/09/0902_2x.jpg",
          h: "./img/renova/09/0902_3x.jpg"
        }
      ],
      map: "./img/renova/09/mapA_09.svg",
      venue: "A",
      title: "向高鐵幕後英雄致敬",
      desciption:
        "台灣高鐵興建期的幕後英雄，來自 26個國家，當年忍受離鄉背井的思念，為台灣高速鐵路貢獻付出，而在功成身退之時，捐贈出伴隨他們客居異鄉時所使用的生活娛樂物件，涵蓋泰籍工作人員所信仰謨拜的泰王和泰后肖像及休閒運動所使用的藤球，也包括各國人員的往返的機票與健保卡，特別是他們所留下大量的工程安全帽，台灣高鐵探索館以「裝置藝術」的展陳手法將其排列成連，展現團結合力的歷史力量。"
    }
  ];
  const era = [//高速時代
    {
      number: "10",
      img: [
        {
          l: "./img/era/10/1001_1x.jpg",
          m: "./img/era/10/1001_2x.jpg",
          h: "./img/era/10/1001_3x.jpg"
        },
        {
          l: "./img/era/10/1002_1x.jpg",
          m: "./img/era/10/1002_2x.jpg",
          h: "./img/era/10/1002_3x.jpg"
        }

      ],
      map: "./img/era/10/mapA_10.svg",
      venue: "A",
      title: "700T 的誕生",
      desciption:
        "台灣高鐵700T列車是由日本川崎重工、日本車輛及日立製作所共同製作的，設計概念源自於日本新幹線700系與500系，傳承兩代優良的基因。700T以700系為藍本，將車頭由鴨嘴形狀改為尖銳狀，考量空氣動力學及台灣高鐵的隧道淨空標準而設計；同時使用500系的動力系統，最高時速可達350公里。由於是專為台灣環境需求所設計製造的列車，形式編號以台灣英文Taiwan的第一個字母T，作為700T車型的代號。"
    },
    {
      number: "11",
      img: [
        {
          l: "./img/era/11/1101_1x.jpg",
          m: "./img/era/11/1101_2x.jpg",
          h: "./img/era/11/1101_3x.jpg"
        },
        {
          l: "./img/era/11/1102_1x.jpg",
          m: "./img/era/11/1102_2x.jpg",
          h: "./img/era/11/1102_3x.jpg"
        },
        {
          l: "./img/era/11/1103_1x.jpg",
          m: "./img/era/11/1103_2x.jpg",
          h: "./img/era/11/1103_3x.jpg"
        }

      ],
      map: "./img/era/11/mapA_11.svg",
      venue: "A",
      title: "一日生活圈",
      desciption:
        "本區動態模型展台，擷取台灣由南到北重要的人文地景、民俗信仰活動及觀光地標等主題，刻劃製作出生動精緻的微型造景，再鋪陳700T的運轉路線，藉此營造出台灣南北城市意象，以及高鐵一日生活圈的風貌。同時經由定時發車的700T動態列車，行經台灣由南到北的重要人文藝術與歷史建築等名勝景觀，勾勒出台灣西部走廊一日生活圈的願景，引領來賓跟著台灣高鐵探索台灣之美。"
    },
    {
      number: "12",
      img: [
        {
          l: "./img/era/12/1201_1x.jpg",
          m: "./img/era/12/1201_2x.jpg",
          h: "./img/era/12/1201_3x.jpg"
        },
        {
          l: "./img/era/12/1202_1x.jpg",
          m: "./img/era/12/1202_2x.jpg",
          h: "./img/era/12/1202_3x.jpg"
        },
        {
          l: "./img/era/12/1203_1x.jpg",
          m: "./img/era/12/1203_2x.jpg",
          h: "./img/era/12/1203_3x.jpg"
        }
      ],
      map: "./img/era/12/mapA_12.svg",
      venue: "A",
      title: "700T 上的伸展台",
      desciption:
        "制服，代表著企業形象的識別符號。對台灣高鐵來說，制服不僅是塑造專業形象的重要表徵，更能在與旅客接觸的第一時間準確傳達「質感、進步、真實、熱情」的品牌精神。"
    },
    {
      number: "13",
      img: [
        {
          l: "./img/era/13/1301_1x.jpg",
          m: "./img/era/13/1301_2x.jpg",
          h: "./img/era/13/1301_3x.jpg"
        },
        {
          l: "./img/era/13/1302_1x.jpg",
          m: "./img/era/13/1302_2x.jpg",
          h: "./img/era/13/1302_3x.jpg"
        },

      ],
      map: "./img/era/13/mapA_13.svg",
      venue: "A",
      title: "700T 駕駛艙",
      desciption:
        "本展示區域擬真打造一座1:1比例的700T駕駛模擬艙，讓來賓可以身歷其境體驗坐在駕駛艙內，操控著眼前繁複的儀表及按鈕，宛如化身成700T列車的駕駛員，感受並想像700T高速運行的精密科技感。"
    },
    {
      number: "14",
      img: [
        {
          l: "./img/era/14/1401_1x.jpg",
          m: "./img/era/14/1401_2x.jpg",
          h: "./img/era/14/1401_3x.jpg"
        }
      ],
      map: "./img/era/14/mapA_14.svg",
      venue: "A",
      title: "高鐵聲光電",
      desciption:
        "台灣高鐵的「天然災害告警系統」是具有智慧化安全應變及管理功能的系統。它以高鐵行控中心為管理中樞，在沿線密集布設各項偵測設備，隨時偵測地震、強風、豪雨、邊坡滑動、坍方、落石及洪水等狀況，透過列車自動控制系統，即時傳送警訊至列車及行控中心，以有效迅速進行各項反應措施，確保高鐵的行車安全。"
    },
    {
      number: "15",
      img: [
        {
          l: "./img/era/15/1501_1x.jpg",
          m: "./img/era/15/1501_2x.jpg",
          h: "./img/era/15/1501_3x.jpg"
        },
        {
          l: "./img/era/15/1502_1x.jpg",
          m: "./img/era/15/1502_2x.jpg",
          h: "./img/era/15/1502_3x.jpg"
        }
      ],
      map: "./img/era/15/mapA_15.svg",
      venue: "A",
      title: "智慧化旅客服務",
      desciption:
        "台灣高鐵為運用鐵道資訊科技的先驅者，首創即時列車座位資訊，優化查驗票流程，亦為國際首創結合驗票與旅客服務之SMIS APP，並取得國內發明專利。T Express更結合乘車購票、產品查詢與最新營運訊息的功能，強化旅客溝通及提高便利性。TOMIS則整合列車即時資訊，提供圖像化資料並可交叉查詢，提升列車運行管理之效率。遇緊急狀況時，可即時回傳現場影像資訊，提升決策效率與品質。"
    }
  ];
  const repair = [//維修解密
    {
      number: "16",
      img: [
        {
          l: "./img/repair/16/1601_1x.jpg",
          m: "./img/repair/16/1601_2x.jpg",
          h: "./img/repair/16/1601_3x.jpg"
        },
        {
          l: "./img/repair/16/1602_1x.jpg",
          m: "./img/repair/16/1602_2x.jpg",
          h: "./img/repair/16/1602_3x.jpg"
        },

      ],
      map: "./img/repair/16/mapB_16.svg",
      venue: "B",
      title: "轉向架清洗機",
      desciption:
        "轉向架為鐵道車輛最重要的部件之一，它直接乘載車體自重和載重，引導車輛沿鐵路軌道運行，保證車輛順利通過曲線，並減緩來自車輛運行時帶來震動及衝擊作用。每輛700T列車有24組轉向架，當列車行駛時間達一年半，或里程數達60萬公里時，即需要卸載進行車削、預檢、清洗、拆檢與磁粉探傷等週期性保養作業。"
    },
    {
      number: "17",
      img: [
        {
          l: "./img/repair/17/1701_1x.jpg",
          m: "./img/repair/17/1701_2x.jpg",
          h: "./img/repair/17/1701_3x.jpg"
        },

      ],
      map: "./img/repair/17/mapB_17.svg",
      venue: "B",
      title: "安全是回家唯一的路",
      desciption:
        "安全是台灣高鐵的基石-沒有安全就沒有高鐵。本區以安全維護內容，介紹高鐵的車輛維修、號誌通訊維修、電力維修、軌道維修，以及分置台灣各地的維修基地與其負責檢修的任務內容，讓來賓認識台灣高鐵秉持「安全是回家唯一的路」的用心。"
    },
    {
      number: "18",
      img: [
        {
          l: "./img/repair/18/1801_1x.jpg",
          m: "./img/repair/18/1801_2x.jpg",
          h: "./img/repair/18/1801_3x.jpg"
        }
      ],
      map: "./img/repair/18/mapB_18.svg",
      venue: "B",
      title: "高鐵星光英雄",
      desciption:
        "台灣高鐵午夜停止營運後即進入線上維修時間帶，各種維修人員需在清晨營運準備作業前的短暫時間內，完成軌道檢查與磨軌、電車線檢查與更換、沿線機房檢查與保養等作業，全年深夜在高鐵軌道上四處奔走，他們是旅客看不見的一群人，卻是旅客安全、快速及舒適乘車背後關鍵的星光英雄。"
    },
    {
      number: "19",
      img: [
        {
          l: "./img/repair/19/1901_1x.jpg",
          m: "./img/repair/19/1901_2x.jpg",
          h: "./img/repair/19/1901_3x.jpg"
        }
      ],
      map: "./img/repair/19/mapB_19.svg",
      venue: "B",
      title: "解讀 700T 維修",
      desciption:
        "台灣高鐵700T列車在行駛滿120萬公里或達36個月後，必須進行「車輛全檢（GI）」，將車體的所有部件一一拆卸下來檢修。本展示區特別陳列700T列車車鼻罩、煞車碟片與來令片、車廂間緩衝桿及鼠籠式非同步三相交流馬達等重要部件，讓來賓可以近距離一窺700T列車高速運行的其中奧妙。"
    },
    {
      number: "20",
      img: [
        {
          l: "./img/repair/20/2001_1x.jpg",
          m: "./img/repair/20/2001_2x.jpg",
          h: "./img/repair/20/2001_3x.jpg"
        }
      ],
      map: "./img/repair/20/mapB_20.svg",
      venue: "B",
      title: "高鐵列車維修及清洗作業",
      desciption:
        "台灣高鐵700T列車藉由定期的檢修及清洗計畫，來完成車體的維護作業，確保乘車的安全與品質。列車維修作業分別以「日檢（DI）」、「月檢（MI）」、「轉向架檢查（BI）」與「車輛全檢（GI）」等固定時程，進行不同程度及面向的檢修工作。而列車在行駛過程中，也遭受到的各種空汙及酸雨等外在環境的考驗，藉由定期的清洗計畫，便可讓列車煥然一新。"
    }
  ];
  const glory = [//榮耀願景
    {
      number: "21",
      img: [
        {
          l: "./img/glory/21/2101_1x.jpg",
          m: "./img/glory/21/2101_2x.jpg",
          h: "./img/glory/21/2101_3x.jpg"
        },
        {
          l: "./img/glory/21/2102_1x.jpg",
          m: "./img/glory/21/2102_2x.jpg",
          h: "./img/glory/21/2102_3x.jpg"
        },
        {
          l: "./img/glory/21/2103_1x.jpg",
          m: "./img/glory/21/2103_2x.jpg",
          h: "./img/glory/21/2103_3x.jpg"
        }
      ],
      map: "./img/glory/21/mapB_21.svg",
      venue: "B",
      title: "大火車微觀園",
      desciption:
        "鐵道車輛模型為交通歷史及科技教育最直接又有效的媒介，大火車微觀園展區介紹鐵道發明一百多年來，蒸汽火車、柴油動力車輛、電力車輛及國車國造之高鐵維修車輛等重要模型。"
    },
    {
      number: "22",
      img: [
        {
          l: "./img/glory/22/2201_1x.jpg",
          m: "./img/glory/22/2201_2x.jpg",
          h: "./img/glory/22/2201_3x.jpg"
        }
      ],
      map: "./img/glory/22/mapB_22.svg",
      venue: "B",
      title: "世界高鐵",
      desciption:
        "世界第一條高速鐵路，為1964年10月1日通車的日本東海道新幹線，並開行新幹線0系列車，時速最高可達210公里。目前有28個國家擁有高速鐵路系統，以日本新幹線、法國TGV、德國ICE為主要研發製造高鐵列車與核心系統的國家，世界各國改良或研發高鐵，如西班牙的Talgo是開發自法國TGV技術；中國和諧號CRH是集結瑞典Regina C2008、日本新幹線E2系及德國ICE3車體與技術發展出來。台灣在2007年完成通車，加入世界高鐵的大家庭。"
    },
    {
      number: "23",
      img: [
        {
          l: "./img/glory/23/2301_1x.jpg",
          m: "./img/glory/23/2301_2x.jpg",
          h: "./img/glory/23/2301_3x.jpg"
        },
        {
          l: "./img/glory/23/2302_1x.jpg",
          m: "./img/glory/23/2302_2x.jpg",
          h: "./img/glory/23/2302_3x.jpg"
        }
      ],
      map: "./img/glory/23/mapB_23.svg",
      venue: "B",
      title: "高速傳愛與榮耀",
      desciption:
        "台灣高鐵基於「企業社會責任」，積極參與各項社會愛心與救援活動。自2010年起推動「高速傳愛 助學計畫」，與伊甸基金會、兒福聯盟、為台灣而教、快樂學習協會及唐氏症基金會等公益團體合作，在廣大旅客的愛心支持下，12年來累計募得超過1.48億元，超過2萬7千多位學童獲得幫助。此外，台灣高鐵自通車以來，亦獲得許多國內外獎項的肯定，例如：公司治理評鑑前5％佳績、文馨獎的藝文人才培育獎及國家產業創新獎等肯定。"
    },
    {
      number: "24",
      img: [
        {
          l: "./img/glory/24/2401_1x.jpg",
          m: "./img/glory/24/2401_2x.jpg",
          h: "./img/glory/24/2401_3x.jpg"
        },
        {
          l: "./img/glory/24/2402_1x.jpg",
          m: "./img/glory/24/2402_2x.jpg",
          h: "./img/glory/24/2402_3x.jpg"
        }
      ],
      map: "./img/glory/24/mapB_24.svg",
      venue: "B",
      title: "速度與文化的連結",
      desciption:
        "台灣高鐵每日以時速300公里奔馳在寶島西部，路途的搭乘時光，讓旅客有更多時間去發現這片土地的美好，秉持以「引領進步、創造美好的生活平台」為理念，帶出高鐵不僅是便捷的交通工具，更是文化創意推動的平台！從車上刊物「TLife」，提供旅客愉悅的旅讀時光，以及各式的高鐵紀念商品，充分展現高鐵對於速度與文化的連結，創造專屬台灣土地的人情味。"
    },
    {
      number: "25",
      img: [
        {
          l: "./img/glory/25/2501_1x.jpg",
          m: "./img/glory/25/2501_2x.jpg",
          h: "./img/glory/25/2501_3x.jpg"
        },
        {
          l: "./img/glory/25/2502_1x.jpg",
          m: "./img/glory/25/2502_2x.jpg",
          h: "./img/glory/25/2502_3x.jpg"
        },
        {
          l: "./img/glory/25/2503_1x.jpg",
          m: "./img/glory/25/2503_2x.jpg",
          h: "./img/glory/25/2503_3x.jpg"
        }
      ],
      map: "./img/glory/25/mapB_25.svg",
      venue: "B",
      title: "願景 ‧ 未來",
      desciption:
        "此區意象牆運用影像合成技術，將來賓於館內拍攝的照片，結合動態高鐵列車，呈現搭台灣高鐵經過從北到南代表性的地標，象徵「一日生活圈」便捷旅運的新生活就此展開。"
    }
  ];
  const areaAll = [renova, era, repair, glory];

  const rightBox = (indexArea) => {//右邊展區內容

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      let carouselContainer = "";
      let carouselLi = "";
      value.img.forEach((photo, photoIndex) => {
        carouselContainer += `<div class="carousel-item ${photoIndex === 0 ? "active" : ""
          }">
              <img data-src="${photo.l}" data-srcset="${photo.l} 1x, ${photo.m} 2x, ${photo.h
          } 3x" class="lazyload d-block w-100" alt="${value.title}">
            </div>`;
        carouselLi += `<li data-target="#carouselExampleIndicators${indexArea}${index}" data-slide-to="${photoIndex}" class="${photoIndex === 0 ? "active" : ""
          }"></li>`;
      });

      html += `<section class="list-sec${index + 1}">

          <figure class="row d-flex figure mx-auto pt-md-5 pt-xl-6 pb-md-5 container-xxl p-4 px-xxl-0">

<div id="carouselExampleIndicators${indexArea}${index}" class="col-xxl-7 col-md-10 col-lg-9 carousel slide carousel-fade px-0 ml-xxl-0 mx-lg-auto" data-ride="false" data-touch="false" data-interval="false" >
  <ol class="carousel-indicators">
  ${carouselLi}

  </ol>
  <div class="carousel-inner">
    ${carouselContainer}
  </div>
  <a class="carousel-control-prev d-sm-none" href="#carouselExampleIndicators${indexArea}${index}" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next d-sm-none" href="#carouselExampleIndicators${indexArea}${index}" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>



<figcaption class="col-xxl-5 figure-caption text-left info-box z-nav mt-xxl-0 px-0 ml-md-auto ml-xxl-0 mr-md-4 mr-xxl-0 pt-md-3 pt-lg-5 pt-xxl-0">
                  <div class="mx-xl-3 display-1 text-right d-none d-md-block text-toupe-30 d-xxl-none d-none d-md-block">${value.number
        }</div>
                  <div class="text-left bg-white shadow p-4 mx-xl-3 mx-xxl-0 h-xxl-100 pt-xxl-4">
                      <div class="mb-xxl-4 display-1 text-left text-toupe-30 d-none d-xxl-block">${value.number
        }</div>
                      <div class="h5 text-left text-warm-grey d-xxl-none">展區${value.number
        } | ${value.venue}館</div>
                      <h2>${value.title}</h2>
                      <p class="card-text text-justify">${value.desciption}
                      </p>
                  </div>
              </figcaption>
          </figure>
          
          
  
      </section>


         `;
    });
    document.querySelector(`.area-${1 + indexArea} .list-sec`).innerHTML = html;
    $(`.list-sec section:odd div`).addClass("order-xxl-2");
  };
  const leftBox = (indexArea) => {//左邊展區小圓圈連結

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      html += `
    <li class='bullet${index + 1}' class="" href="#" onclick="gtag('event', 'bullet_click', {
      'event_category': '展區連結',
      'event_label': '展區${value.number
      }_btn'});"><span class="h5">${value.number
        }</span></li>
    
   `;
    });

    document.querySelector(
      `.area-${1 + indexArea} .list-bullet ul`
    ).innerHTML = html;
  };
  const map = (indexArea) => {//左邊小地圖

    let html = "";
    areaAll[indexArea].forEach((value, index) => {
      html += `<section class="map-sec${index + 1}">
      <figcaption class="">
          <div class="h5 text-greyish-brown-three">${value.venue}館</div>
          
        </figcaption>
      <figure class="">
        <img src="${value.map}"
          class=""
          alt="展區${value.number}位置">
  
        
      </figure>
      </section>`;
    });

    document.querySelector(`.area-${1 + indexArea} .map`).innerHTML = html;
  };



  const bulletMap = (indexArea) => {//小圓圈和地圖連動效果


    areaAll[indexArea].forEach((value, index) => {
      const bulletThis = $(`.area-${1 + indexArea} .bullet${index + 1}`);


      $("#subNav a").on("click", function (event) {
        $(".list-bullet ul li").removeClass("hollow");
        $(".map section").removeClass("read");
      });

      $(window).on("scroll", function () {
        const bulletThis = $(`.area-${1 + indexArea} .bullet${index + 1}`);
        const bulletPre = $(`.area-${1 + indexArea} .bullet${index}`);
        const bulletNext = $(`.area-${1 + indexArea} .bullet${index + 2}`);
        const bulletLast = $(`.area-${1 + indexArea} .list-bullet li`).last();

        const mapThis = $(`.area-${1 + indexArea} .map-sec${index + 1}`);
        const mapPre = $(`.area-${1 + indexArea} .map-sec${index}`);
        const mapNext = $(`.area-${1 + indexArea} .map-sec${index + 2}`);
        const mapLast = $(`.area-${1 + indexArea} .map section`).last();


        const windowTop = $(window).scrollTop();
        const navHeight = $("#nav").height() + 100;
        var $el = $(`.area-${1 + indexArea} .list-sec${index + 1}`); 
        
        const top = $el.position().top - $el.outerHeight(true) - 1;
        const topItem = $(`.area-${1 + indexArea} .list-sec${index + 1}`).position().top;

        const bottomItem = $(bulletLast).position().top;

        if (windowTop >= top) {
          $(bulletNext).removeClass("hollow");
          $(mapNext).removeClass("read");
          $(bulletPre).removeClass("hollow");

          $(mapPre).removeClass("read");
          $(bulletThis).addClass("hollow");
          $(mapThis).addClass("read");
        }



        let bulletList = $(".list-bullet");
        let mapList = $(".map");
        var y = $(window).scrollTop();
        var mainTop = $("main").position().top;

        if (windowTop > mainTop - 150) {
          $(bulletList).addClass("show");

          $(mapList).addClass("show");
        } else {
          $(bulletList).removeClass("show");
          $(mapList).removeClass("show");
        }

        if (y < bottomItem) {
          $(bulletLast).removeClass("hollow");
          $(mapLast).removeClass("read");
        }
      });



      bulletThis.on("click", function () { //左邊展區小圓圈連結 點擊滑動到該展區頂部

       
        const navHeight = $("#nav").height() + 100;
        var $el = $(`.area-${1 + indexArea} .list-sec${index + 1}`); 
        
        const top = $el.position().top - $el.outerHeight(true) + navHeight;
        
        $("body, html").animate({ scrollTop: top }, 1000); });
        
    });
  };



  areaAll.forEach((value, indexArea) => {
    rightBox(indexArea);
    leftBox(indexArea);
    map(indexArea);
    bulletMap(indexArea);
  });




  $(window).on("click", function (event) {
    if ($("#orianTab > a.nav-link").hasClass("active")) {
      $("#orianTab").addClass("orian-btline");
      $("#orianTab").css(
        "border-bottom",
        "6px solid var(--greyish-brown-three)"
      );

      $("#orianTab").removeClass("brown-underline");
      $(".nav-pills .nav-link.active").css("border-bottom", "0px !immportant")
    } else {
      $("#orianTab").css(
        "border-bottom",
        "0px solid var(--greyish-brown-three)"
      );
      $("#orianTab").addClass("brown-underline");
      $("#orianTab > a.nav-link").removeClass("orian-btline");
    }
  });



};