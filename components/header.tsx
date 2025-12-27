"use client"

import { StaggeredMenu } from "./ui/staggered-menu"
import type { StaggeredMenuItem, StaggeredMenuSocialItem } from "./ui/staggered-menu"

const menuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Projects", ariaLabel: "View our projects", link: "#projects" },
  { label: "Events", ariaLabel: "See upcoming events", link: "#events" },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/ocean-unmined/" },
  { label: "Instagram", link: "https://www.instagram.com/oceans_unmined/" },
  { label: "Facebook", link: "https://www.facebook.com/profile.php?id=61584388191133" },
  { label: "YouTube", link: "https://www.youtube.com/channel/UCZybxr7BQbt1AuThLquBsJw" },
]

export function Header() {
  return (
    <StaggeredMenu
      position="right"
      isFixed={true}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={["#60C5BA", "#E07856"]} // ocean-cyan and ocean-coral
      logoUrl="/logo.jpg"
      accentColor="#E07856" // ocean-coral
      closeOnClickAway={false}
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  )
}
