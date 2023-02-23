export type HeroType = {
  hero_title: string ;
  hero_subtitle: string;
  hero_image: string;
  btn_text: string;
};

export type ContactType = {
  contact_header: string;
  contact_subtitle: string;
  contact_img: string;
};

export type FooterType = {
  footer_copyright: string;
};

export interface ResponseType {
  hero_section: HeroType;
  contact_section: ContactType;
  footer_section: FooterType;
}

export type FeatureType = {
  id: number;
  feature_title: string;
  feature_content: string;
  feature_img: string;
};
