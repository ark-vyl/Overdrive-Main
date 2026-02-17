import { useUserLocation } from '../context/user-location';
import { cn } from '../utils/cn';
import { fontGroup } from '../utils/font-wrapper'; 
import { Home, Users, Contact, Share2 } from 'lucide-react';

export function Navbar() {
    const userLoc = useUserLocation()

    const navLinkList = [
      { link: "Home", icon: Home },
      { link: "Member", icon: Users },
      { link: "Contacts", icon: Contact },
      { link: "Social media", icon: Share2 },
    ];

  return (
    <div className={cn("flex justify-between w-full pt-3 sticky top-0 bg-transparent z-50")}>
      <h1 className={cn(fontGroup.kodeMono("Medium"), "text-(--main-color)")}>
        OVERDRIVE PROTOCOLS
      </h1>
      <div
        className={cn(
          "border border-(--main-bordercolor) px-8 flex gap-8 py-2 rounded-full items-center bg-(--main-backgroundcolor)"
        )}
      >
        {navLinkList.map((item, i) => (
          <a
            href={`#${item.link.toLowerCase()}`}
            key={i}
            className={cn(
              "text-[0.8em] text-(--color-unactive) w-fit flex items-center gap-2",
              'hover:text-(--main-color) navGlow duration-300',
              fontGroup.kodeMono("Regular")
            )}
          >
            <item.icon size={16} />
            <span>{item.link}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
