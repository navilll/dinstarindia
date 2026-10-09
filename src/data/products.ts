import type { StaticImageData } from "next/image";
import productPlaceholder from "../assets/products/product-placeholder.svg";
import uc200Pro from "../assets/products/IP PBX/UC200 Pro/UC200 Pro_side.png";
import uc350ProBack from "../assets/products/IP PBX/UC350 Pro/UC350 Pro back.png";
import uc350ProFront from "../assets/products/IP PBX/UC350 Pro/UC350 Pro front.png";
import uc350ProSide from "../assets/products/IP PBX/UC350 Pro/UC350 Pro side.png";
import uc350Back from "../assets/products/IP PBX/UC35O/UC350 back.png";
import uc350Front from "../assets/products/IP PBX/UC35O/UC350 front.png";
import sbc1000Back from "../assets/products/SBC/SBC 1000/SBC1000 back.png";
import sbc1000Front from "../assets/products/SBC/SBC 1000/SBC1000 front.png";
import sbc300Back from "../assets/products/SBC/SBC 300/SBC300 back.png";
import sbc300Front from "../assets/products/SBC/SBC 300/SBC300 front.png";
import sbc3000Back from "../assets/products/SBC/SBC 3000/SBC3000 back.png";
import sbc3000Front from "../assets/products/SBC/SBC 3000/SBC3000 front.png";
import sbc3000ProBack from "../assets/products/SBC/SBC 300O Pro/SBC3000 Pro-back-2.png";
import sbc3000ProFront from "../assets/products/SBC/SBC 300O Pro/SBC3000 Pro -front-1.png";
import sbc3000ProSide from "../assets/products/SBC/SBC 300O Pro/SBC3000 Pro-frontside.png";
import sbc8000 from "../assets/products/SBC/SBC 8000/SBC8000-01 NEW.png";
import mtg200Back from "../assets/products/Digital VoIP Gateway/MTG200/MTG200-back.png";
import mtg200Front from "../assets/products/Digital VoIP Gateway/MTG200/MTG200-ftont.png";
import mtg2000Back from "../assets/products/Digital VoIP Gateway/MTG2000/MTG2000-back.png";
import mtg2000Front from "../assets/products/Digital VoIP Gateway/MTG2000/MTG2000-new.png";
import mtg2000bBack from "../assets/products/Digital VoIP Gateway/MTG 2000B/MTG2000B-back.png";
import mtg2000bFront from "../assets/products/Digital VoIP Gateway/MTG 2000B/MTG2000B.png";
import mtg3000Front from "../assets/products/Digital VoIP Gateway/MTG3000/MTG3000-2MCUs-front.png";
import mtg3000Side from "../assets/products/Digital VoIP Gateway/MTG3000/MTG3000-1MCU-side.png";
import mtg3000Side2 from "../assets/products/Digital VoIP Gateway/MTG3000/MTG3000-2MCUs-side.png";
import mtg3000tBack from "../assets/products/Digital VoIP Gateway/MTG3000T/MTG3000T-back.png";
import mtg3000tFront from "../assets/products/Digital VoIP Gateway/MTG3000T/MTG3000T-front.png";
import mtg5000Back from "../assets/products/Digital VoIP Gateway/MTG5000/mtg5000-back.png";
import mtg5000Front from "../assets/products/Digital VoIP Gateway/MTG5000/mtg5000-front.png";
import mtg5000Side from "../assets/products/Digital VoIP Gateway/MTG5000/mtg5000-side.png";
import dag1000_1sBack from "../assets/products/FXS/DAG1000-1S FXS/DAG1000-1S-back.png";
import dag1000_1sFront from "../assets/products/FXS/DAG1000-1S FXS/DAG1000-1S-front.png";
import dag1000_2sBack from "../assets/products/FXS/DAG1000-2S/DAG1000-2S-back.png";
import dag1000_2sFront from "../assets/products/FXS/DAG1000-2S/DAG1000-2S-front.png";
import dag1000_4sBack from "../assets/products/FXS/DAG1000-4S/DAG1000-4S-back.png";
import dag1000_4sFront from "../assets/products/FXS/DAG1000-4S/DAG1000-4S-front.png";
import dag1000_4sGeBack from "../assets/products/FXS/DAG1000-4S(GE)/DAG1000-4S(GE)-back.png";
import dag1000_4sGeFront from "../assets/products/FXS/DAG1000-4S(GE)/DAG1000-4S(GE) -front.png";
import dag1000_4sGeSide from "../assets/products/FXS/DAG1000-4S(GE)/DAG1000-4S(GE)-side.png";
import dag1000_4sGeTop from "../assets/products/FXS/DAG1000-4S(GE)/DAG1000-4S(GE)-top.png";
import dag1000_8sGe1 from "../assets/products/FXS/DAG1000-8S(GE)/01.png";
import dag1000_8sGe2 from "../assets/products/FXS/DAG1000-8S(GE)/02.png";
import dag1000_8sGe3 from "../assets/products/FXS/DAG1000-8S(GE)/03.png";
import dag1000_8sGe4 from "../assets/products/FXS/DAG1000-8S(GE)/04.png";
import dag2000_16sFront from "../assets/products/FXS/DAG1000-16S/DAG2000-16S -01.png";
import dag2000_16sBack from "../assets/products/FXS/DAG1000-16S/DAG2000-16S -04.jpg";
import dag2000_16sDetail from "../assets/products/FXS/DAG1000-16S/DAG2000-16S -03.png";
import dag2000_16sExtra from "../assets/products/FXS/DAG1000-16S/DAG2000-16S -02 (1).png";
import dag2000_24sBack from "../assets/products/FXS/DAG2000-24S - Copy/DAG2000-24S-GE-back.png";
import dag2000_24sFront from "../assets/products/FXS/DAG2000-24S - Copy/DAG2000-24S-GE-front.png";
import dag2000_32sBack from "../assets/products/FXS/DAG2000-32S/DAG2000-32S-GE-back.png";
import dag2000_32sFront from "../assets/products/FXS/DAG2000-32S/DAG2000-32S-GE-front.png";
import dag1000_2oBack from "../assets/products/fxo gateway/DAG1000 - 2O FXO/DAG1000-2O-Back.png";
import dag1000_2oFront from "../assets/products/fxo gateway/DAG1000 - 2O FXO/DAG1000-2O-Front.png";
import dag1000_4oBack from "../assets/products/fxo gateway/DAG1000 - 4O FXO/DAG1000-4O-back.png";
import dag1000_4oFront from "../assets/products/fxo gateway/DAG1000 - 4O FXO/DAG1000-4O-front.png";
import dag1000_8oBack from "../assets/products/fxo gateway/DAG1000- 8O FXO/DAG1000-8O-back.png";
import dag1000_8oFront from "../assets/products/fxo gateway/DAG1000- 8O FXO/DAG1000-8O-front.png";
import dag2000_16oBack from "../assets/products/fxo gateway/DAG1000-16O FXO/DAG2000-16O-back.png";
import dag2000_16oFront from "../assets/products/fxo gateway/DAG1000-16O FXO/DAG2000-16O-front.png";
import productData from "./products.json";

export interface Product {
  slug: string;
  name: string;
  category: string;
  status?: string;
  description: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  overview: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  highlights?: string[];
}

interface ProductRecord extends Omit<Product, "image" | "gallery" | "overview"> {
  imageKey: string;
  galleryKeys: string[];
  overview?: string[];
}

const productImages: Record<string, StaticImageData> = {
  placeholder: productPlaceholder,
  uc200Pro,
  uc350ProBack,
  uc350ProFront,
  uc350ProSide,
  uc350Back,
  uc350Front,
  sbc1000Back,
  sbc1000Front,
  sbc300Back,
  sbc300Front,
  sbc3000Back,
  sbc3000Front,
  sbc3000ProBack,
  sbc3000ProFront,
  sbc3000ProSide,
  sbc8000,
  mtg200Back,
  mtg200Front,
  mtg2000Back,
  mtg2000Front,
  mtg2000bBack,
  mtg2000bFront,
  mtg3000Front,
  mtg3000Side,
  mtg3000Side2,
  mtg3000tBack,
  mtg3000tFront,
  mtg5000Back,
  mtg5000Front,
  mtg5000Side,
  "dag1000-1sBack": dag1000_1sBack,
  "dag1000-1sFront": dag1000_1sFront,
  "dag1000-2sBack": dag1000_2sBack,
  "dag1000-2sFront": dag1000_2sFront,
  "dag1000-4sBack": dag1000_4sBack,
  "dag1000-4sFront": dag1000_4sFront,
  "dag1000-4sGeBack": dag1000_4sGeBack,
  "dag1000-4sGeFront": dag1000_4sGeFront,
  "dag1000-4sGeSide": dag1000_4sGeSide,
  "dag1000-4sGeTop": dag1000_4sGeTop,
  "dag1000-8sGe1": dag1000_8sGe1,
  "dag1000-8sGe2": dag1000_8sGe2,
  "dag1000-8sGe3": dag1000_8sGe3,
  "dag1000-8sGe4": dag1000_8sGe4,
  "dag2000-16sBack": dag2000_16sBack,
  "dag2000-16sDetail": dag2000_16sDetail,
  "dag2000-16sExtra": dag2000_16sExtra,
  "dag2000-16sFront": dag2000_16sFront,
  "dag2000-24sBack": dag2000_24sBack,
  "dag2000-24sFront": dag2000_24sFront,
  "dag2000-32sBack": dag2000_32sBack,
  "dag2000-32sFront": dag2000_32sFront,
  "dag1000-2oBack": dag1000_2oBack,
  "dag1000-2oFront": dag1000_2oFront,
  "dag1000-4oBack": dag1000_4oBack,
  "dag1000-4oFront": dag1000_4oFront,
  "dag1000-8oBack": dag1000_8oBack,
  "dag1000-8oFront": dag1000_8oFront,
  "dag2000-16oBack": dag2000_16oBack,
  "dag2000-16oFront": dag2000_16oFront,
};

const productRecords: ProductRecord[] = productData;

export const products: Product[] = productRecords.map(({ imageKey, galleryKeys, ...product }) => {
  const image = productImages[imageKey];
  const gallery = galleryKeys.map((key) => productImages[key]);

  if (!image || gallery.some((galleryImage) => !galleryImage)) {
    throw new Error(`Product image is missing for ${product.name}`);
  }

  return { ...product, overview: product.overview ?? [], image, gallery };
});

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
