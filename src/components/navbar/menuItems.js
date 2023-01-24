export const menuItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "UdS",
    url: "/uds",
    submenu: [
      {
        title: "Fascicoli",
        url: "/uds"
      },
      {
        title: "Nuovo fascicolo",
        url: "udsForm"
      }
    ]
  },
  {
    title: "TdS",
    url: "/tds",
    submenu: [
      {
        title: "Fascicoli",
        url: "/uds"
      },
      {
        title: "Nuovo fascicolo",
        url: "/udsForm"
      }
    ]
  },
  {
    title: "Impostazioni",
    url: "/impostazioni",
    submenu: [
      {
        title: "Avvocati",
        url: "/avvocati"
      },
      {
        title: "Posizione Giuridica",
        url: "/posizionegiuridica"
      }
    ]
  },
  {
    title: "Email",
    url: "/email"
  }
];
