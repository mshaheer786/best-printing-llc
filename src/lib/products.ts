import businessCards from "@/assets/product-business-cards.jpg";
import banners from "@/assets/product-banners.jpg";
import flyers from "@/assets/product-flyers.jpg";
import tshirts from "@/assets/product-tshirts.jpg";
import vehicleWraps from "@/assets/product-vehicle-wraps.jpg";
import yardSigns from "@/assets/product-yard-signs.jpg";
import postcards from "@/assets/product-postcards.jpg";
import stickers from "@/assets/product-stickers.jpg";
import canvas from "@/assets/product-canvas.jpg";
import menus from "@/assets/product-menus.jpg";
import gifts from "@/assets/product-gifts.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Business Cards" | "Signs" | "Apparel" | "Promotional" | "Digital";
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  { slug: "business-cards", name: "Premium Business Cards", category: "Business Cards", price: "$29", image: businessCards, description: "Matte, gloss, soft-touch and gold foil finishes on heavy stock." },
  { slug: "postcards", name: "Marketing Postcards", category: "Promotional", price: "$45", image: postcards, description: "Direct-mail ready postcards in any size, full color both sides." },
  { slug: "flyers", name: "Flyers & Brochures", category: "Promotional", price: "$59", image: flyers, description: "Tri-fold, bi-fold or flat — perfect for events and campaigns." },
  { slug: "banners", name: "Vinyl Banners", category: "Signs", price: "$39", image: banners, description: "Weather-proof 13oz vinyl with hemmed edges and grommets." },
  { slug: "yard-signs", name: "Yard Signs", category: "Signs", price: "$15", image: yardSigns, description: "Corrugated plastic signs with H-stakes — built for outdoors." },
  { slug: "vehicle-wraps", name: "Vehicle Wraps", category: "Signs", price: "$1,200", image: vehicleWraps, description: "Full and partial wraps installed by certified professionals." },
  { slug: "tshirts", name: "Custom T-Shirts", category: "Apparel", price: "$12", image: tshirts, description: "Screen-printed and DTG apparel — bulk pricing available." },
  { slug: "stickers", name: "Die-Cut Stickers", category: "Promotional", price: "$25", image: stickers, description: "Custom shapes, vinyl, holographic and clear stocks." },
  { slug: "canvas", name: "Canvas Prints", category: "Promotional", price: "$65", image: canvas, description: "Gallery-wrapped canvas in sizes from 8x10 to 40x60." },
  { slug: "menus", name: "Restaurant Menus", category: "Promotional", price: "$89", image: menus, description: "Laminated, hardcover and synthetic-paper menus." },
  { slug: "gifts", name: "Custom Gifts & Swag", category: "Promotional", price: "$8", image: gifts, description: "Mugs, totes, pens and branded merchandise." },
  { slug: "web-design", name: "Website Design", category: "Digital", price: "$1,499", image: gifts, description: "Modern, responsive websites that match your brand identity." },
];

export const categories = ["All", "Business Cards", "Signs", "Apparel", "Promotional", "Digital"] as const;
