// Portfolio project registry. Single source of truth for album data (photos,
// category, description) — consumed by the /portfolio grid and every
// homepage preview widget so there's one place to add/reorder photos.

export type PortfolioCategory = "hdb" | "condo" | "landed";

/** Order matches content.portfolio.filters[1..] (index 0 is "All"). */
export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = ["hdb", "condo", "landed"];

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  hdb: "HDB",
  condo: "Condo",
  landed: "Landed",
};

export interface PortfolioAlbumDescription {
  roomType?: string;
  sizeSqft?: number;
  location?: string;
}

export interface PortfolioAlbum {
  id: string;
  category: PortfolioCategory;
  name: string;
  /** Ordered photo paths — append more here to add photos to an album. */
  photos: string[];
  description?: PortfolioAlbumDescription;
}

export const PORTFOLIO_ALBUMS: PortfolioAlbum[] = [
  {
    id: "hdb-yishun-executive-maisonette",
    category: "hdb",
    name: "Executive Maisonette Yishun",
    photos: [
      "/assets/portfolio/hdb/hdb1.jpg",
      "/assets/portfolio/hdb/hdb2.jpg",
      "/assets/portfolio/hdb/hdb3.jpg",
      "/assets/portfolio/hdb/hdb4.jpg",
    ],
    description: { roomType: "Executive Maisonette", location: "Yishun" },
  },
  {
    id: "condo-geylang",
    category: "condo",
    name: "Geylang",
    photos: [
      "/assets/portfolio/condo/condo1.jpg",
      "/assets/portfolio/condo/condo2.jpg",
      "/assets/portfolio/condo/condo3.jpg",
      "/assets/portfolio/condo/condo4.jpg",
    ],
    description: { location: "Geylang" },
  },
  {
    id: "landed-jalan-kuras",
    category: "landed",
    name: "Jalan Kuras",
    photos: [
      "/assets/portfolio/landed/landed1.jpg",
      "/assets/portfolio/landed/landed2.jpg",
      "/assets/portfolio/landed/landed3.jpg",
      "/assets/portfolio/landed/landed4.jpg",
    ],
    description: { location: "Jalan Kuras" },
  },
];

export const getAlbumsByCategory = (
  category?: PortfolioCategory
): PortfolioAlbum[] =>
  category ? PORTFOLIO_ALBUMS.filter((a) => a.category === category) : PORTFOLIO_ALBUMS;

export const getAlbumById = (id: string): PortfolioAlbum | undefined =>
  PORTFOLIO_ALBUMS.find((a) => a.id === id);

export const flattenAlbumPhotos = (
  albums: PortfolioAlbum[] = PORTFOLIO_ALBUMS
): { src: string; album: PortfolioAlbum }[] =>
  albums.flatMap((album) => album.photos.map((src) => ({ src, album })));
