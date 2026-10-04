/** Editorial references, not verified partnerships or product endorsements.
 * Change status only after approval and add a visible disclosure wherever used.
 * Do not render supplier links on research-only compound monographs.
 */
export type PartnerStatus = "editorial" | "affiliate";
export type PartnerEntry = {
  name: string;
  status: PartnerStatus;
  url: string;
  description: string;
};
export const StarPartners = {
  lifeExtension: {
    name: "Life Extension",
    status: "editorial",
    url: "https://www.lifeextension.com/vitamins-supplements/best-sellers",
    description: "Standardized clinical extracts & longevity assays",
  },
  carlson: {
    name: "Carlson Labs",
    status: "editorial",
    url: "https://www.carlsonlabs.com/",
    description: "IFOS-tested marine lipids & omega-3 formulations",
  },
  mountainRose: {
    name: "Mountain Rose Herbs",
    status: "editorial",
    url: "https://mountainroseherbs.com/",
    description: "Certified organic bulk whole-herb botanicals & extracts",
  },
  nowFoods: {
    name: "NOW Foods",
    status: "editorial",
    url: "https://www.nowfoods.com/",
    description: "In-house analytical testing for bulk vitamins & minerals",
  },
} satisfies Record<string, PartnerEntry>;
// Descriptions are supplied editorial notes and require verification before display.
