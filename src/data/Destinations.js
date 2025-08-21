import CanadaMap from "../assets/locations/desktop/image-map-canada.png";
import AustraliaMap from "../assets/locations/desktop/image-map-australia.png";
import UkMap from "../assets/locations/desktop/image-map-united-kingdom.png";

import CanadaTablet from "../assets/locations/tablet/image-map-canada.png";
import AustraliaTablet from "../assets/locations/tablet/image-map-australia.png";
import UkTablet from "../assets/locations/tablet/image-map-uk.png";

export const info = [
  {
    destinations: [
      {
        name: "Canada",
        contact: {
          phone: "P : +1 253-863-8967",
          email: "M : contact@designo.co",
        },
        location: {
          office: "Designo Central Office",
          address: "3886 Wellington Street",
          area: "Toronto, Ontario M9C 3J5",
        },
        url: CanadaMap,
        urlTablet: CanadaTablet,
      },
      {
        name: "Australia",
        contact: {
          phone: "P : (02) 6720 9092",
          email: "M : contact@designo.au",
        },
        location: {
          office: "Designo AU Office",
          address: "19 Balonne Street",
          area: "New South Wales 2443",
        },
        url: AustraliaMap,
        urlTablet: AustraliaTablet,
      },
      {
        name: "United Kingdom",
        contact: {
          phone: "P : 078 3115 1400",
          email: "M : contact@designo.uk",
        },
        location: {
          office: "Designo UK Office",
          address: "13  Colorado Way",
          area: "Rhyd-y-fro SA8 9GA",
        },
        url: UkMap,
        urlTablet: UkTablet,
      },
    ],
  },
];
