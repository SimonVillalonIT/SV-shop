type Product = {
  id: number;
  name: string;
  price: {
    current: {
      value: number;
      text: string;
    };
    previous: {
      value: any;
      text: string;
    };
    rrp: {
      value: any;
      text: string;
    };
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    currency: string;
  };
  colour: string;
  colourWayId: number;
  brandName: string;
  hasVariantColours: boolean;
  hasMultiplePrices: boolean;
  groupId: any;
  productCode: number;
  productType: string;
  url: string;
  imageUrl: string;
  additionalImageUrls: Array<string>;
  videoUrl: any;
  showVideo: boolean;
  isSellingFast: boolean;
  sponsoredCampaignId: any;
  facetGroupings: Array<any>;
  advertisement: any;
};
