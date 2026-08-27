export type Project = {
  slug: string;
  name: string;
  category: "Residential" | "Cultural" | "Hospitality" | "Interiors";
  location: string;
  year: string;
  area: string;
  type: string;
  heroImage: string;
  heroCredit?: string;
  gallery: { src: string; alt: string; credit?: string }[];
  summary: string;
  description: string[];
  concept: string[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "ridge-house",
    name: "Ridge House",
    category: "Residential",
    location: "Faqra Hills",
    year: "2022",
    area: "540 m²",
    type: "Private residence",
    heroImage: "/images/project-ridge-hero.jpg",
    heroCredit: "Photo: AKL Architects (CC BY-SA 4.0, Wikimedia Commons)",
    gallery: [
      {
        src: "/images/project-ridge-hero.jpg",
        alt: "Ridge House cantilevered over the hillside, glass facade catching the afternoon light",
        credit: "Photo: AKL Architects (CC BY-SA 4.0, Wikimedia Commons)",
      },
    ],
    summary:
      "A house that steps down the slope instead of fighting it, ending in a pool that reads as a continuation of the terrain.",
    description: [
      "The brief asked for a single-family house on a site most engineers had already called difficult: a 34-degree slope with no flat ground to build from. We treated the grade as the plan generator rather than an obstacle — three staggered volumes, each set back from the one above, follow the hill down instead of scraping it flat.",
      "The client wanted a house that felt larger than its footprint. We got there by never closing a room on more than two sides — every space borrows a view, a stair, or a terrace from the one next to it.",
    ],
    concept: [
      "Structurally, the house is a stack of cantilevers anchored to a single concrete core cut into the bedrock. Everything outside that core is free to project outward, which is why the living level reaches nearly four meters past its own foundation with no visible support.",
      "The material palette stays deliberately narrow — board-formed concrete, blackened steel, and glass — so the landscape supplies the color the building doesn't.",
    ],
    facts: [
      { label: "Structure", value: "Cast concrete core, steel cantilevers" },
      { label: "Levels", value: "4, following the grade" },
      { label: "Completed", value: "2022" },
      { label: "Status", value: "Occupied" },
    ],
  },
  {
    slug: "meridian-retreat",
    name: "Meridian Retreat",
    category: "Hospitality",
    location: "Hoi An",
    year: "2020",
    area: "2,100 m²",
    type: "Boutique hotel, 24 rooms",
    heroImage: "/images/project-meridian-hero.jpg",
    heroCredit: "Photo: Basile Morin (CC BY-SA 4.0, Wikimedia Commons)",
    gallery: [
      {
        src: "/images/project-meridian-hero.jpg",
        alt: "Symmetrical entrance hall with vaulted ceiling and console tables",
        credit: "Photo: Basile Morin (CC BY-SA 4.0, Wikimedia Commons)",
      },
      {
        src: "/images/project-meridian-2.jpg",
        alt: "Lounge seating beneath a beaded chandelier",
        credit: "Photo: Basile Morin (CC BY-SA 4.0, Wikimedia Commons)",
      },
      {
        src: "/images/project-meridian-3.jpg",
        alt: "Reception desks flanking the central hall",
        credit: "Photo: Basile Morin (CC BY-SA 4.0, Wikimedia Commons)",
      },
      {
        src: "/images/project-meridian-4.jpg",
        alt: "Lounge at blue hour, lit by wall sconces",
        credit: "Photo: Basile Morin (CC BY-SA 4.0, Wikimedia Commons)",
      },
    ],
    summary:
      "A 24-room retreat built around a single symmetrical hall, restored more than redesigned.",
    description: [
      "Meridian Retreat occupies a colonial-era trading house that had sat empty for over a decade. Rather than gutting it, we spent the first four months of the project simply documenting what remained — the tile floors, the ceiling height, the proportions of the original openings — before drawing anything new.",
      "The result reads as restoration from the street and as a hotel only once you're inside: modern services, lighting, and climate control are threaded through the historic shell without touching its surfaces.",
    ],
    concept: [
      "The plan keeps a single formal gesture — the symmetrical entrance hall — as the building's spine, with all 24 rooms accessed from galleries that run parallel to it rather than through it.",
      "Every material decision favored things that patina rather than things that stay new: brass that will darken, tile that will wear, timber that will silver in the humidity.",
    ],
    facts: [
      { label: "Rooms", value: "24" },
      { label: "Original structure", value: "Colonial trading house, c. 1900" },
      { label: "Completed", value: "2020" },
      { label: "Status", value: "Operating" },
    ],
  },
  {
    slug: "fold-pavilion",
    name: "Fold Pavilion",
    category: "Cultural",
    location: "Basel",
    year: "2019",
    area: "860 m²",
    type: "Exhibition &amp; events pavilion",
    heroImage: "/images/project-fold-hero.jpg",
    heroCredit: "Photo: Wladyslaw (CC BY-SA 3.0, Wikimedia Commons)",
    gallery: [
      {
        src: "/images/project-fold-hero.jpg",
        alt: "Board-formed concrete wall detail with autumn branches overhead",
        credit: "Photo: Wladyslaw (CC BY-SA 3.0, Wikimedia Commons)",
      },
    ],
    summary:
      "A single folded concrete roof plane shelters an exhibition hall that has no interior columns at all.",
    description: [
      "The commission was for a small pavilion that could host exhibitions, lectures, and the occasional dinner for two hundred people — three programs that usually want three different buildings. We solved it with one folded concrete plate, tall enough at its peak to read as civic and low enough at its edges to feel like a garden wall.",
      "Every surface is left as struck: the board-marking from the formwork stayed as the finish, inside and out, so the building ages as concrete rather than needing a finish applied over it.",
    ],
    concept: [
      "The fold does the structural work a beam grid would otherwise do — it's a single continuous concrete surface acting as both roof and lateral bracing, poured in one sequence over eleven days.",
      "Daylight enters only where the fold changes angle, so the light inside shifts visibly through the day without a single skylight.",
    ],
    facts: [
      { label: "Roof", value: "Single folded concrete plate, cast in place" },
      { label: "Span", value: "22 m, column-free" },
      { label: "Completed", value: "2019" },
      { label: "Status", value: "In use" },
    ],
  },
  {
    slug: "birchwood-apartments",
    name: "Birchwood Apartments",
    category: "Residential",
    location: "Riverside District",
    year: "2023",
    area: "3,400 m²",
    type: "18-unit residential building",
    heroImage: "",
    gallery: [],
    summary:
      "Eighteen units organized around a shared courtyard that every apartment can see but only some can enter.",
    description: [
      "The site is a narrow infill lot between two party walls — the kind of plot most developers pass on. We used the depth of the site to our advantage, pulling every unit's living space toward a central courtyard cut through the building's middle third.",
      "No two apartments are identical. The courtyard's irregular shape meant every unit negotiates its own relationship to it, which we treated as a feature: residents chose their unit by which sightline they wanted, not just square footage.",
    ],
    concept: [
      "The facade is load-bearing brick, chosen specifically because it needed no separate structural frame — every saved centimeter of wall thickness became livable space inside.",
      "Balconies are staggered rather than stacked, so no apartment looks directly into the one below it.",
    ],
    facts: [
      { label: "Units", value: "18" },
      { label: "Structure", value: "Load-bearing brick" },
      { label: "Completed", value: "2023" },
      { label: "Status", value: "Occupied" },
    ],
  },
  {
    slug: "the-quiet-room",
    name: "The Quiet Room",
    category: "Interiors",
    location: "Private commission",
    year: "2021",
    area: "180 m²",
    type: "Residential interior",
    heroImage: "",
    gallery: [],
    summary:
      "A full interior renovation built around a single rule: no surface allowed to compete with the next one.",
    description: [
      "The client's only brief was a feeling — she wanted to come home and stop noticing the room, in the way you stop noticing something that's simply right. That's a harder brief than a list of requirements, because it rules out almost every easy design move.",
      "We spent more time removing detailing than adding it: skirting boards were recessed flush, door frames disappeared into the wall plane, and every visible material was limited to one of four already in the building.",
    ],
    concept: [
      "Light does the work that decoration usually does. Every room has one primary light source, positioned to graze a single material — plaster, oak, limestone — rather than flood the space evenly.",
      "Storage is entirely concealed behind unmarked panel doors, so the finished rooms read as emptier than they are.",
    ],
    facts: [
      { label: "Scope", value: "Full interior, structural walls unchanged" },
      { label: "Materials", value: "Lime plaster, oak, limestone" },
      { label: "Completed", value: "2021" },
      { label: "Status", value: "Private residence" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
