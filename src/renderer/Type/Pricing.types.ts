import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface PricingSectionProp {
  /** A Children need to be passed to the for this Component */
  children: ReactNode;
  /** A Company needs to be passed to the for this in string */
  companyType: string;
  /** If children's are passed as an array in stated fo single components   */
  childrenTypeArray: boolean;
  /**   Class Name for the Childe Component */
  childrenClassName?: string;
}

export interface PricingProp {
  pricingData: { price: number; perks?: string[]; planId: string }[];
  planType: string;
}

export interface CardBodyProp {
  planId?: string;
  title: string;
  upto: string;
  price: number;
  pricingMonthly: boolean;
}

export interface ArrayOfPricingCardProp {
  pricingData: {
    plan: {
      planId: string;
      title: string;
      price: number;
      upto: string;
    }[];
    perks?: string[];
  }[];
  pricingMonthly: boolean;
  blockTitle?: string;
  blockSubTitle?: string;
  planType: string;
}
export interface AddOnCardsProp {
  pricingData: {
    title: string;
    plan: {
      planId: string;
      price: number;
      upto: string;
    }[];
    perks?: string[];
    addOnPerks: {
      planId: string;
      price: number;
      perks: string[];
    }[];
  };
  pricingMonthly: boolean;
  blockTitle: string;
  planType: string;
}

export interface AddonsProp {
  addOnList: {
    planId: string;
    price: number;
    perks: string[];
  }[];

  priceUpdate: Dispatch<
    SetStateAction<
      {
        planId: string;
        price: number;
        upto: string;
      }[]
    >
  >;
  primeKey: number;
  setAddOnsRecord: React.Dispatch<any>;
}

export interface SelectedAddOnsType {
  addOnPlanId: string;
  addOnPrice: number;
}
export type ListOfSelectedAddOns = SelectedAddOnsType[];
