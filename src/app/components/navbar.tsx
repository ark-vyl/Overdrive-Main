import { useUserLocation } from '../context/user-location';
import { cn } from '../utils/cn';
import { fontGroup } from '../utils/font-wrapper'; 

export function Navbar() {
    const userLoc = useUserLocation()

    const navLinkList = [
      { link: "Home" },
      { link: "About" },
      { link: "Contacs" },
      { link: "Social media" },
    ];

  return (
    <div className={cn("flex justify-between")}>
      <h1 className={cn(fontGroup.kodeMono("Medium"), "text-(--main-color)")}>
        OVERDRIVE PROTOCOLS
      </h1>
      <div
        className={cn(
          "border border-(--main-bordercolor) px-16 flex gap-13 py-2 rounded-full items-center"
        )}
      >
        {navLinkList.map((item, i) => (
          <p
            key={i}
            className={cn(
              "text-[0.8em] text-(--color-unactive) w-fit",
              'hover:text-(--main-color) navGlow duration-300',
              userLoc?.navLocation === item.link && 'userloc-now',
              fontGroup.kodeMono("Regular")
            )}
          >
            {item.link}
          </p>
        ))}
      </div>
    </div>
  );
}
